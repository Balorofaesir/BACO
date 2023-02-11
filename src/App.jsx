import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  useState,
  // useEffect
} from "react";
// import { useSelector, useDispatch } from 'react-redux';
import NotFound404 from "./pages/NotFound404";
import Profile from "./pages/Profile/Profile";
import Header from "./components/Header/Header";
import EventCreator from "./pages/createEvent";
// import MyFavoriteEvents from "./pages/MyFavoriteEvents";
// import Footer from './components/Footer/Footer';
import HomePage from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import EventDetails from "./pages/EventDetails/EventDetails";
import RequireAuth from "./features/auth/RequireAuth";

const App = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="App">
      <header>
        <Header toggle={toggle} open={open} />
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/event/:id" element={<EventDetails />} />
        <Route
          path="/event-creator"
          element={
            <RequireAuth roles={["USER"]}>
              <EventCreator />
            </RequireAuth>
          }
        />
        {/* <Route
          path="/my-favorite-events"
          element={
            <RequireAuth roles={["USER"]}>
              <MyFavoriteEvents />
            </RequireAuth>
          }
        /> */}
        <Route path="/*" element={<NotFound404 />} />
        {/* <Route
          path="my-events"
          element={
            <RequireAuth roles={['USER', 'ADMIN']}>
              <myEvents />{' '}
            </RequireAuth>
          }
        /> */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="profile"
          element={
            <RequireAuth roles={["USER"]}>
              <Profile />
            </RequireAuth>
          }
        />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
};
export default App;
