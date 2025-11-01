import { GetMe } from "@/app/actions/user/getMe";
import { UserProfile } from "@/components/pages";

const Page = async () => {
  const me = await GetMe({
    _id: 1,
    email: 1,
    first_name: 1,
    last_name: 1,
    birth_date: 1,
    gender: 1,
    phone: 1,
    personnel_code: 1,
    is_active: 1,
    province: {
      _id: 1,
      name: 1,
    },
    city: {
      _id: 1,
      name: 1,
    },
    org: {
      _id: 1,
      name: 1,
    },
    unit: {
      _id: 1,
      name: 1,
    },
    avatar: {
      _id: 1,
      name: 1,
    },
  });

  const { user } = me;

  return (
    <UserProfile
      province={user?.province.name!}
      city={user?.city.name!}
      organ={user?.org[0].name!}
      unit={user?.unit[0].name!}
      first_name={user?.first_name!}
      last_name={user?.last_name!}
      email={user?.email!}
      phone={user?.phone!}
      personnel_code={user?.personnel_code!}
      is_active={user?.is_active!}
      birth_date={user?.birth_date!}
      gender={user?.gender!}
    />
  );
};

export default Page;
