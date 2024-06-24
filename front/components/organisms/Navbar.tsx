import { ChevronDownIcon } from "../atoms/mod.ts";

export const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="container">
        <nav className="navigation">
          <ul>
            <li>
              <a href="/">
                <span>item title</span>
              </a>
            </li>
          </ul>
        </nav>

        <div className="navbar--profile">
          <div>
            <div className="navbar--profile--title">
              <p className="navbar--profile--title--name">
                First Name -LastName
              </p>
              <div className="navbar--profile--title--role">
                <span className="navbar--profile--title--role--title">
                  Position
                </span>
                <ChevronDownIcon />
              </div>
            </div>

            <div className="navbar--profile--image">
              <img src="/images/profile.jpeg" alt="profile-image" />
            </div>
          </div>

          <div className="select--sub-buttons">
            <span className="option-title">Position Me</span>
          </div>
        </div>
      </div>
    </div>
  );
};
