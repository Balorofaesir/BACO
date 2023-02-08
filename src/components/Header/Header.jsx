import Types from "prop-types";

import "./Header.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { useEffect, useState } from "react"
import { AiOutlineMenu } from "react-icons/ai";
import { GiCaesar } from "react-icons/gi";
import { ImProfile } from "react-icons/im";
import { selectAuth, logout } from "../../features/auth/authSlice";
// import getMyProfile from '../../services/user'
// import BACO from "./BACO.ico"

const Header = ({ toggle, open }) => {
  // const [profile, setProfile] = useState(null)
  const navegate = useNavigate();
  const dispatch = useDispatch();
  const { isAuth, profile } = useSelector(selectAuth);

  // useEffect(() => {
  //   const fetchProfile = async () => {
  //     const data = await getMyProfile()
  //     setProfile(data)
  //   }
  //   fetchProfile()
  // }, [])

  const handleLogout = () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("token");
    dispatch(logout());
    toggle()
    navegate("/");
  };
  const ClickHome = () => {
    navegate("/");
  };
  const ClickProfile = () => {
    navegate("/profile");
  };
  const ClickLogin = () => {
    navegate("/login");
  };
  const handleEvent = () => {
    navegate(`/myEvents`);
    toggle()
  };
  const ClickHometoggle = () => {
    navegate("/");
    toggle()
  };
  const ClickProfiletoggle = () => {
    navegate("/profile");
    toggle()
  };
  const ClickLogintoggle = () => {
    navegate("/login");
    toggle()
  };
  const handleEventtoggle = () => {
    navegate(`/myEvents`);
    toggle()
  };

  return (
    <section>
      <section className="headerWineContainer">
        <div className="headerWineContainer--minicont">
          <p className="headerWineContainer--iconpage">
            BACO
            <GiCaesar />
          </p>
        </div>
        <section className="header--SmallerContainer">
          <section className="miniContainer2">
            <button className="Home__button" type="button" onClick={ClickHome}>
              Home
            </button>
            {/* <p> About</p> */}

            {!isAuth ? (
              <button
                className="Home__button"
                type="button"
                onClick={ClickLogin}
              >
                Login
              </button>
            ) : (
              <p>
                <button
                  className="Home__button"
                  type="button"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </p>
            )}
            {isAuth && (
              <button
                className="Home__button"
                type="button"
                onClick={ClickProfile}
              >
                profile
              </button>
            )}

            <button
              className="Home__button"
              onClick={handleEvent}
              type="button"
            >
              event
            </button>
          </section>
            <button
              className="List__button"
              type="button"
              onClick={toggle}
            >
                <AiOutlineMenu />
            </button>
        </section>  <div className="headerWineContainer--minicont">
        <p>
          <ImProfile /> User:{" "}
          {isAuth ? (
            <button
              type="button"
              onClick={ClickProfile}
              className="Home__button__white"
            >
              {profile.firstName}{" "}
            </button>
          ) : (
            <span> </span>
          )}
        </p>
      </div>
      </section>


      <div className="navegationBar">
        {open && (
          <section className="navegationBarList">
            <button
              className="Home__button"
              type="button"
              onClick={ClickHometoggle}
            >
              Home
            </button>
            {/* <p> About</p> */}

            {!isAuth ? (
              <button
                className="Home__button"
                type="button"
                onClick={ClickLogintoggle}
              >
                Login
              </button>
            ) : (
              <p>
                <button
                  className="Home__button"
                  type="button"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </p>
            )}
            {isAuth && (
              <button
                className="Home__button"
                type="button"
                onClick={ClickProfiletoggle}
              >
                profile
              </button>
            )}

            <div>
              <img src="" alt="" />
              <img src="" alt="" />
              <button
                className="Home__button"
                onClick={handleEventtoggle}
                type="button"
              >
                event
              </button>
            </div>
          </section>
        )}
      </div>
    </section>
  );
};

Header.propTypes = {
  toggle: Types.func.isRequired,
  open: Types.bool.isRequired,
};

export default Header;
