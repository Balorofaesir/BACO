import './App.css';
import { Routes, Route } from 'react-router-dom';
import {
  useState,
  // useEffect
} from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';
import HomePage from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
// import EventsPage from './components/eventsPage/eventsPage'
// import { selectAuth,
// setAuthUser
// } from './features/auth/authSlice';
// import useLocalStorage from './hooks/useLocalStorage';
// import RequireAuth from './components/RequireAuth';

const App = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  // const dispatch = useDispatch();
  // const storedValue = window.localStorage.getItem('auth');
  // const { isAuth } = useSelector(selectAuth);

  // useEffect(() => {
  //   if (!isAuth ) {
  //     dispatch((storedValue));
  //   }
  // }, [storedValue, isAuth, dispatch]);

  return (
    <div className="App">
      <header>
        <Header toggle={toggle} open={open} />
      </header>
      <Routes>
        <Route path="/" element={<HomePage />}>
          {/* <Route path="urgency" element={<Emergency />} /> */}
        </Route>
        {/* <Route
          path="/cart"
          element={
            <RequireAuth roles={['USER']}>
              <CartPage />
            </RequireAuth>
          }
        /> */}
        {/* <Route path="/*" element={<NotFound />} /> */}
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
        {/* <Route
          path="profile"
          element={
            <RequireAuth roles={['USER']}>
              <Profile />
            </RequireAuth>
          }
        /> */}
      </Routes>
      {/* <Footer /> */}
    </div>
  );
};
export default App;
