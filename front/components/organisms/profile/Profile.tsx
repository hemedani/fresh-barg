export const Profile = () => {
  return (
    <div className="card-container">
      <img
        className="profile-img"
        src="/images/Logo.png"
        alt="User profile image"
      />
      <p>user firstName - user LastName</p>
      <div className="profile-text-container">
        <p>User Organ Name</p>
        <p>User Unit Name</p>
      </div>
    </div>
  );
};
