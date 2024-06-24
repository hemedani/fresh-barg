import { useSignal } from "@preact/signals";
import { UserProfileInfo } from "./UserProfileInfo.tsx";

export const UserProfile = () => {
  const activeProfile = useSignal(false);
  return (
    <div className={`profile ${activeProfile.value ? "active-profile" : ""}`}>
      <UserProfileInfo activeProfile={activeProfile} />
      <ul className="user-role">
        <li>option 1</li>
        <li>option 2</li>
      </ul>
    </div>
  );
};
