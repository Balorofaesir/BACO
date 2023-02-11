/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState, useRef, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createEvent } from "../features/events/eventSlice";

const URL = process.env.REACT_APP_API_URL;

const createEventComp = () => {
  const referencia = useRef();
  const dispatch = useDispatch();

  const upLoadFiles = () => {
    referencia.current.click();
  };
  const navigate = useNavigate();
  const [image, setImage] = useState();
  const [text, setText] = useState({
    name: null,
    description: null,
    country: null,
    city: null,
    date: null,
    image: null,
  });

  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result.toString());
      };
      reader.readAsDataURL(image);
    } else {
      setPreview("");
    }
  }, [image]);

  const handleInput = ({ target }) => {
    const key = target.name;
    setText({ ...text, [key]: target.value }); // haga una copia y guarde la info
  };

  const handleChangeImage = ({ target }) => {
    const { files } = target;
    const file = files[0];
    if (file && file.type.substring(0, 5) === "image") {
      setImage(file);
    } else {
      setImage(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", image);

    // connect to back end
    const options = {
      method: "POST",
      body: formData,
    };
    const response = await fetch(`${URL}/api/upload/file`, options);
    const resp = await response.json();
    dispatch(createEvent({ ...text, file: resp.url }))
    alert("event created")
    navigate("/profile")
  };

  return (
    <section>
      <section className="container-form">
        <div className="container-form__load-data">
          <form onSubmit={handleSubmit}>
          <h1>Event Image</h1>
            {image ? (
              <img src={preview} onClick={upLoadFiles} alt="images" />
            ) : null}
            <input
              type="file"
              className="Home__button"
              name="image"
              onChange={handleChangeImage}
            />
            <h1>name</h1>
            <input
              type="name"
              className="form__textMessage"
              name="name"
              onChange={handleInput}
            />
            <h1>description</h1>
            <input
              type="text"
              className="form__textMessage"
              name="description"
              onChange={handleInput}
              required
              rows="5"
            />
            <h1>city</h1>
            <input
              type="text"
              className="form__textMessage"
              name="city"
              onChange={handleInput}
              required
            />
            <h1>country</h1>
            <input
              type="country"
              className="form__textMessage"
              name="country"
              onChange={handleInput}
              required
            />
            <h1>Date and hour</h1>
            <input
              type="datetime-local"
              name="date"
              className="form__textMessage"
              onChange={handleInput}
              required
            />

            <button type="submit" className="Home__button">
              Create Event
            </button>
          </form>
        </div>
      </section>
    </section>
  );
};

export default createEventComp;
