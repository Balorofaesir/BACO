import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Alert from '../../components/Alert/Alert';
import TermsAndConditions from '../../components/TermsAndConditios/TermsAndConditions';
import { createUser } from '../../features/users/usersSlice';
import { openModal } from '../../features/SignUpModal/loginmodalSlice';
import './Signup.css';

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const  { isOpen }  = useSelector((state) => state.loginmodal);
  const [errorMessage, setErrorMessage] = useState(false);

  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked(!checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstName, lastName, password, email, birthday, gender } = e.target;

    try {
      const action = createUser({
        firstName: firstName.value.toUpperCase(),
        lastName: lastName.value.toUpperCase(),
        email: email.value.toLowerCase(),
        password: password.value,
        birthday: birthday.value,
        gender: gender.value,
      });
      const { payload } = await dispatch(action);
      const { token } = payload;
      window.localStorage.setItem('token', token);
      localStorage.setItem('auth', JSON.stringify(payload));
      navigate('/');
    } catch (err) {
      setErrorMessage(true);
      setTimeout(() => {
        setErrorMessage(false);
      }, 200);
      throw new Error(err);
    }
  };

  const gender = ['Male', 'Female', 'Other'];

  return (
    <div>
      {errorMessage === true ? <Alert text="Wrong Credentials" /> : null}
      {isOpen && <TermsAndConditions />}
      <div className="signupForm__globalContainer">
        <form className="signupForm__container" onSubmit={handleSubmit}>
          <h1 className="signupForm__title">Register</h1>
          <label htmlFor="firstName" className="signupForm__label">
            First Name
            <input
              type="text"
              name="firstName"
              className="signupForm__input"
              placeholder="First Name"
              required
            />
          </label>
          <label htmlFor="lastName" className="signupForm__label">
            Last Name
            <input
              type="text"
              name="lastName"
              className="signupForm__input"
              placeholder="Last Name"
              required
            />
          </label>
          <label htmlFor="email" className="signupForm__label">
            Email
            <input
              type="email"
              name="email"
              className="signupForm__input"
              placeholder="Enter your email"
              required
            />
          </label>
          <label htmlFor="password" className="signupForm__label">
            Password
            <input
              type="password"
              name="password"
              className="signupForm__input"
              placeholder="Enter your password"
              required
            />
          </label>
          <label htmlFor="gender" className="signupForm__label">
            Sex
            <select
              name="gender"
              id="gender"
              className="signupForm__input signupForm__input--select"
              required
              // onChange={handleInput}
            >
              {gender.map((data) => (
                <option key={data} value={data}>
                  {data}
                </option>
              ))}
            </select>
          </label>

          <label htmlFor="password" className="signupForm__label">
            Birthday
            <input
              type="date"
              name="birthday"
              className="signupForm__input signupForm__input--date"
              placeholder="Birthday"
              required
            />
          </label>

          <div className="signupOptions__container">
            <span className="signupForm__span">
              <label htmlFor="conditions" className="signupForm__labelOpt">
                <input
                  type="checkbox"
                  name="conditions"
                  className="signupForm__inputOpt"
                  onClick={handleCheck}
                  required
                />
                I agree with the
                <button
                  onClick={() => dispatch(openModal())}
                  type="button"
                  className="signupForm__terms--conditions"
                  required
                >
                  Terms & Conditions
                </button>
              </label>
            </span>
          </div>
          {checked === true ? (
            <button type="submit" className="signupForm__btn">
              Register now →
            </button>
          ) : (
            <button type="submit" className="signupForm__btn" disabled>
              Register now →
            </button>
          )}
          <Link to="/login" className="signupForm__link--login">
            Already have an account? Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
