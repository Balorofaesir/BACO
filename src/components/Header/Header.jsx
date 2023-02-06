import Types from 'prop-types';
import './Header.css';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import { useEffect, useState } from "react"
import { AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai';
import { ImProfile } from 'react-icons/im';
import { selectAuth, logout } from '../../features/auth/authSlice';
// import getMyProfile from '../../services/user'

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
    localStorage.removeItem('auth');
    localStorage.removeItem('token');
    dispatch(logout());
    navegate('/');
  };
  const ClickHome = () => {
    navegate('/');
  };
  const ClickProfile = () => {
    navegate('/profile');
  };
  const ClickLogin = () => {
    navegate('/login');
  };
  const handleEvent = () => {
    navegate(`/myEvents`);
  };

  return (
    <section>
      <section className="headerBlackContainer">
        <div className="miniHeaderBlackContainer">
          <button
            className="Home__button__white"
            type="button"
          >
            <AiOutlineSearch /> find and event
          </button>
        </div>
        <div className="miniHeaderBlackContainer">

          <p>
            <ImProfile  /> User:{' '}
            {isAuth ? <button type='button' onClick={ClickProfile} className="Home__button__white">{profile.firstName} </button> : <span> </span>}
          </p>
        </div>
      </section>
      <section className="headerSmallerContainer">

        <section className="miniContainer2">
          <button className="Home__button" type="button" onClick={ClickHome}>
            Home
          </button>
          {/* <p> About</p> */}

          {!isAuth ? (
            <button className="Home__button" type="button" onClick={ClickLogin}>
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
        <section className="miniContainer4">
          <img src="" alt="" />
          <img src="" alt="" />
        </section>
        <div className="miniContainer3">
          {/* <p className="miniContainer3__dots">...</p> */}
          <button
            className="miniContainer3__imgButton"
            type="button"
            onClick={toggle}
          >
            <div className="miniContainer3__img1">
            <AiOutlineMenu />
            </div>
          </button>
        </div>
      </section>

      <div className="navegationBar">
        {open && (
          <section className="navegationBarList">
            <button className="Home__button" type="button" onClick={ClickHome && toggle}>
              Home
            </button>
            {/* <p> About</p> */}


            {!isAuth ? (
              <button
                className="Home__button"
                type="button"
                onClick={ClickLogin && toggle}
              >
                Login
              </button>
            ) : (
              <p>
                <button
                  className="Home__button"
                  type="button"
                  onClick={handleLogout && toggle}
                >
                  Logout
                </button>
              </p>
            )}
            {isAuth && (
              <button
                className="Home__button"
                type="button"
                onClick={ClickProfile && toggle}
              >
                profile
              </button>
            )}

            <div>
              <img src="" alt="" />
              <img src="" alt="" />
              <button
            className="Home__button"
            onClick={handleEvent && toggle}
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
