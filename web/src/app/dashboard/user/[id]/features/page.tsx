import { getActivePositionId } from "@/app/actions/position/getActivePosition";
import { getUser } from "@/app/actions/user/getUser";
import { FeaturesPage } from "@/components/pages/position/features/FeaturePage";
import { redirect } from "next/navigation";

export default async function UserFeaturesPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const activePosition = await getActivePositionId();
    if (!activePosition) redirect("/dashboard");

    const user = await getUser({
        get: {
            _id: 1,
            first_name: 1,
            last_name: 1,
            gender: 1,
            position: { _id: 1, name: 1, level: 1, features: 1 },
            province: { _id: 1, name: 1 },
            city: { _id: 1, name: 1 },
            org: { _id: 1, name: 1 },
            unit: { _id: 1, name: 1 },
            email: 1,
            phone: 1,
        },
        set: { _id: id, positionId: activePosition },
    });

    if (!user) {
        redirect("/dashboard");
    }

    return <FeaturesPage user={user} activePosition={activePosition} />;
}