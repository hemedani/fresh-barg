import { FunctionComponent } from "preact";
import { ChevronDownIcon } from "../components/mod.ts";
import { Signal } from "@preact/signals";

interface UserProfileInfProps {
  activeProfile: Signal<boolean>;
}

export const UserProfileInfo: FunctionComponent<UserProfileInfProps> = (
  { activeProfile },
) => {
  return (
    <div
      className="user-profile-info"
      onClick={() => activeProfile.value = !activeProfile.value}
    >
      <div className="user-info">
        <span className="user-name">John Doe</span>
        <div className="user-position">
          <span>Ghost</span>
          <ChevronDownIcon />
        </div>
      </div>
      <div className="profile-image">
        <img
          src="/images/profile.jpeg"
          alt="user profile image"
          loading="lazy"
        />
      </div>
    </div>
  );
};
