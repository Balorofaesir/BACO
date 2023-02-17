import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import getMyProfile from "../../services/user";
import { getEventsByCreator } from "../../features/events/eventAPI";
import "./Profile.css";
// import { modifyUser } from "../../features/users/usersAPI";
import { modUser } from "../../features/users/usersSlice";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [events, setEvents] = useState(null);
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  const navigate = useNavigate();
  const handleClick = (data) => {
    navigate(`/Event/${data}`);
  };
  // const MyFavoriteEvents = () => {
  //   navigate(`/my-favorite-events`);
  // }
  const handleEventCreator = () => {
    navigate(`/event-creator`);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const response = await getMyProfile();
      const responseEvents = await getEventsByCreator();
      setProfile(response);
      setEvents(responseEvents);
    };
    fetchData();
  }, []);

  const handleModifyProfileInput = async (event) => {
    event.preventDefault();
    const { userName
      // , password
     } = event.target;
    try {
      const action = modUser({
        id:profile._id,
        data: {
        userName: userName.value.toLowerCase(),
        }
        // password: password.value
      });
      const {payload} = await dispatch(action)
      localStorage.setItem('auth', JSON.stringify(payload))
      alert("profile successfully edited");
      toggle()
    } catch (err) {
      throw new Error(err);
    }
  };
  return (
    <main className="mainProfile">
      {profile === null ? <p>Loading</p> : null}
      {!open && (
        <section className="profile">
          <div className="Profile--generalContainer">
            <section className="profile_container1">
              <h1>
                Username:
                {profile ? (
                  <span> {profile.userName}</span>
                ) : (
                  <span>loading</span>
                )}
              </h1>
              {/* <h1>
                email:
                {profile ? <span> {profile.email}</span> : <span>loading</span>}
              </h1> */}

              <button type="button" onClick={toggle} className="Home__button">
                edit profile
              </button>
              {/* <button type="button" onClick={MyFavoriteEvents} className="Home__button">
              MyFavoriteEvents
              </button> */}
              <button
                type="button"
                onClick={handleEventCreator}
                className="Home__button"
              >
                Event-creator
              </button>
            </section>
            <section>
              <h1>Events created by me</h1>
              <div>
                {events ? (
                  events.map((data) => {
                    const day = data.date?.slice(0, -14);
                    const hour = data.date?.slice(11, -8);
                    return (
                      <section className="profile_container" key={data._id}>
                        <div className="profile_container--containers">
                          {" "}
                          <p>Event</p>
                          <p> {data.name}</p>
                        </div>
                        <div className="profile_container--containers">
                          <p>
                            {" "}
                            Location: {data.city}
                            {"  "}
                            {data.country}
                          </p>
                        </div>
                        <div className="profile_container--containers">
                          {" "}
                          <p>date</p>
                          <p> {day}</p>
                        </div>
                        <div className="profile_container--containers">
                          {" "}
                          <p>Start At</p>
                          <p> {hour}</p>
                        </div>
                        <button
                          className="event-details-button"
                          type="button"
                          onClick={() => {
                            handleClick(data._id);
                          }}
                        >
                          Event details
                        </button>
                      </section>
                    );
                  })
                ) : (
                  <div> 0 appoiments</div>
                )}
              </div>
            </section>
          </div>
        </section>
      )}
      {open && (
        <form
          className="signupForm__container"
          onSubmit={handleModifyProfileInput}
        >
          <label htmlFor="firstName" className="signupForm__label">
            UserName
            <input
              type="text"
              name="userName"
              className="signupForm__input"
              placeholder="userName"
              required
              id="userName"
            />
          </label>
          {/* <label htmlFor="email" className="signupForm__label">
            Password
            <input
                type="password"
                name="password"
                className="signupForm__input"
                placeholder="Enter your password"
                required
            />
          </label> */}
          <button type="submit" className="Home__button">
            edit profile
          </button>
          <button type="button" className="Home__button" onClick={toggle}>
            cancel edit
          </button>
        </form>
      )}
    </main>
  );
};
export default Profile;
