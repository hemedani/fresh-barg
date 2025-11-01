"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useModal } from "@/hooks/useModal";
import z from "zod";

import { Modal } from "@/components/mulecules";
import { Button } from "@/components/atoms/Button";
import { MyInput } from "@/components/atoms";
import { EntityCard } from "@/components/mulecules";
import { FC } from "react";
import { createProvince } from "@/app/actions/province/create";
import { useRouter } from "next/navigation";

export const provinceSchema = z.object({
  name: z.string().min(2, "نام باید حداقل 2 کاراکتر باشد"),
  enName: z.string().min(2),
  abb: z.string().min(2).max(5),
});

export type ProvinceForm = z.infer<typeof provinceSchema>;

export type TProvinceProps = {
  _id: string;
  name: string;
  enName: string;
  abb: string;
};

export type TProvinces = {
  provinces: TProvinceProps[]
}

export const ProvinceClient: FC<TProvinces> = ({ provinces }) => {
  const { isOpen, open, close } = useModal();
  const router = useRouter()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProvinceForm>({
    resolver: zodResolver(provinceSchema),
  });

  const onSubmit = async (data: ProvinceForm) => {
    const response = await createProvince({ set: data, get: { _id: 1, abb: 1, enName: 1, name: 1 } })
    console.log({ response });
    router.refresh()

    reset();
    close();
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">استان‌ها</h1>
        <Button className="" onClick={open}>ایجاد استان</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {provinces?.map((p) => (
          <EntityCard key={p._id} name={p.name} enName={p.enName} abb={p.abb} />
        ))}
      </div>

      <Modal isOpen={isOpen} onClose={close} title="ایجاد استان جدید">
        <form onSubmit={handleSubmit(onSubmit)}>
          <MyInput
            className=""
            label="نام"
            name="name"
            register={register}
            errMsg={errors.name?.message}
          />

          <MyInput
            label="نام انگلیسی"
            name="enName"
            register={register}
            errMsg={errors.enName?.message}
          />
          <MyInput
            label="مخفف"
            name="abb"
            register={register}
            errMsg={errors.enName?.message}
          />
          <div className="flex justify-end gap-2 mt-4">
            <Button type="button" className="" onClick={close}>
              لغو
            </Button>
            <Button className="" type="submit">ذخیره</Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
