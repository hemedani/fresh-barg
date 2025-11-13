"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import AsyncSelect from "react-select/async";
import { z } from "zod";
import { Editor } from "../template/editor/Editor";
import { MyInput, Button, SelectBox, CustomStyles } from "@/components/atoms";
import { FC, useEffect, useState } from "react"; // فقط این خط اضافه شد
import { createLetter } from "@/app/actions/letter/create";
import toast from "react-hot-toast";

const letterSchema = z.object({
    number: z.string().min(1, "شماره نامه الزامی است"),
    subject: z.string().min(1, "موضوع الزامی است"),
    receiversId: z.string().min(1, "گیرنده الزامی است"),
    orgId: z.string().min(1, "سازمان الزامی است"),
    unitId: z.string().min(1, "واحد الزامی است"),
    tags: z.array(z.string()).min(1, "حداقل یک برچسب انتخاب کنید"),
    leed: z.string().min(1, "خلاصه الزامی است"),
    content: z.string().min(1, "محتوا الزامی است"),
});

type LetterFormType = z.infer<typeof letterSchema>;

type Props = {
    userPosition: { _id: string, level: string }
    orgs: { _id: string; name: string }[];
    units: { _id: string; name: string }[];
    receivers: { _id: string; name: string }[];
    tagOptions: { value: string; label: string }[];
    authorId: string
};

export const LetterForm: FC<Props> = ({ userPosition, orgs, units, receivers, tagOptions, authorId }) => {
    const [mounted, setMounted] = useState(false); // فقط این خط اضافه شد

    useEffect(() => {
        setMounted(true); // فقط این خط اضافه شد
    }, []);

    const {
        register,
        handleSubmit,
        control,
        setValue,
        watch,
        reset,
        formState: { errors, isSubmitting, isValid },
    } = useForm<LetterFormType>({
        resolver: zodResolver(letterSchema),
        mode: "onChange",
        defaultValues: {
            number: "",
            subject: "",
            receiversId: "",
            orgId: "",
            unitId: "",
            tags: [],
            leed: "",
            content: "",
        },
    });

    const onSubmit = async (data: LetterFormType) => {
        const responseLetter = await createLetter({
            set: {
                authorId: authorId, content: data.content, leed: data.leed, number: +data.number, orgId: data.orgId, positionId: userPosition._id, recieversId: data.receiversId, subject: data.subject, tags: data.tags, unitId: data.unitId
            }, get: { _id: 1, content: 1 }
        })
        if (responseLetter.success) {
            toast.success("عملیات با موفقیت انجام شد")
        }

        reset();
    };

    // فقط این قسمت رو تغییر دادم — از mounted استفاده کردم
    const previewContent = watch("content") || "";
    const displayContent = mounted ? previewContent : "";

    return (
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">ثبت نامه جدید</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <MyInput
                        name="number"
                        label="شماره نامه *"
                        register={register}
                        errMsg={errors.number?.message}
                        placeholder="۱۴۰۳/۱۲۳" />
                    <MyInput name="subject" register={register} label="موضوع *" errMsg={errors.subject?.message} placeholder="موضوع نامه..." />
                </div>

                <Controller
                    name="receiversId"
                    control={control}
                    render={({ field }) => (
                        <SelectBox
                            name="receiversId"
                            label="گیرنده *"
                            value={field.value}
                            onChange={field.onChange}
                            options={receivers}
                            errMsg={errors.receiversId?.message}
                            placeholder="جستجو و انتخاب گیرنده..."
                        />
                    )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Controller
                        name="orgId"
                        control={control}
                        render={({ field }) => (
                            <SelectBox name="orgId" label="سازمان *" value={field.value} onChange={field.onChange} options={orgs} errMsg={errors.orgId?.message} />
                        )}
                    />
                    <Controller
                        name="unitId"
                        control={control}
                        render={({ field }) => (
                            <SelectBox name="unitId" label="واحد *" value={field.value} onChange={field.onChange} options={units} errMsg={errors.unitId?.message} />
                        )}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-white mb-3">برچسب‌ها *</label>
                    <Controller
                        name="tags"
                        control={control}
                        render={({ field }) => (
                            <AsyncSelect
                                isMulti
                                cacheOptions
                                defaultOptions={tagOptions}
                                loadOptions={(input) =>
                                    new Promise<any[]>((resolve) => {
                                        setTimeout(() => {
                                            const filtered = tagOptions.filter(
                                                (t) => t.label.includes(input) || t.value.includes(input)
                                            );
                                            resolve(filtered);
                                        }, 200);
                                    })
                                }
                                placeholder="جستجو و انتخاب برچسب..."
                                styles={CustomStyles}
                                value={tagOptions.filter((opt) => (field.value || []).includes(opt.value))}
                                onChange={(vals) => field.onChange(vals?.map((v) => v.value) || [])}
                                className="text-black"
                            />
                        )}
                    />
                    {errors.tags && <p className="text-red-400 text-sm mt-2">{errors.tags.message}</p>}
                </div>

                <MyInput name="leed" label="خلاصه نامه *" register={register} errMsg={errors.leed?.message} type="textarea" placeholder="خلاصه کوتاه..." />

                <div>
                    <label className="block text-sm font-medium text-white mb-3">محتوای نامه *</label>
                    <div className="bg-white rounded-xl overflow-hidden">
                        <Editor onContentChange={(c) => setValue("content", c, { shouldValidate: true })} />
                    </div>
                    {errors.content && <p className="text-red-400 text-sm mt-2">{errors.content.message}</p>}
                </div>

                {/* فقط اینجا تغییر دادم — از displayContent استفاده کردم */}
                <div className="bg-slate-800/50 rounded-xl p-6">
                    <p className="text-slate-300 text-sm mb-3">پیش‌نمایش محتوا:</p>
                    <div
                        className="prose prose-invert max-w-none text-sm"
                        dangerouslySetInnerHTML={{
                            __html: displayContent || "<p className='text-slate-500'>هنوز محتوایی وارد نشده</p>"
                        }}
                    />
                </div>

                <div className="flex justify-end gap-4 pt-6 border-t border-white/10">
                    <Button type="button" onClick={() => reset()} className="bg-gray-600 hover:bg-gray-700 px-8 py-3">
                        پاک کردن
                    </Button>
                    <button
                        type="submit"
                        disabled={!isValid || isSubmitting}
                        className="bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-10 py-3 font-bold disabled:opacity-50"
                    >
                        {isSubmitting ? "در حال ثبت..." : "ثبت نامه"}
                    </button>
                </div>
            </form>
        </div>
    );
};