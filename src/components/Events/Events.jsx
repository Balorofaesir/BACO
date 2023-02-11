import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import "../Header/Header.css";

import { setEvents, selectEvent } from "../../features/events/eventSlice";

const FindAEvent = () => {
  const [country, setCountry] = useState("");
  const Events = useSelector(selectEvent);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(setEvents());
  }, [dispatch]);
  // const handleEvents = () => {
  //   console.log();
  //   setIdEvents();
  // };
  function handleClick(data) {
    navigate(`/Event/${data}`);
  }
  // function handleAppoiment() {
  //   navigate(`/appointment`);
  // }
  const handleInput = (e) => {
    setCountry(e.target.value);
  };
  const notRepeatedElements = (obj) => {
    const countrys = obj.map((data) => data.country);
    const res = [...new Set(countrys)];
    return res.map((data) => (
      <option value={data} key={data}>
        {data}
      </option>
    ));
  };

  return (
    <section>
      <select
        name="filter"
        id="filter"
        className="event-filter-input"
        defaultValue="default"
        onChange={handleInput}
      >
        <option className="find_Event" value="default" disabled hidden>
          select Country
        </option>
        {Events && notRepeatedElements(Events)}
      </select>
      <div className="event" >
      {Events &&
        Events.filter((data) => data.country.includes(country)).map((data) => (
          <section className="event--container" key={data._id}>
            <p>{data.name} </p>
            <div className="event--container--image">
            <img className="image" src={data.file} alt="doct" />
          </div>
            <p>Date: {data.date.slice(0, -14)} </p>
            <p>Starts at: {data.date.slice(11, -8)} </p>
            <div>Country: {data.country}</div>
            <div>City: {data.city}</div>
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
        ))}
        </div>
    </section>
  );
};

export default FindAEvent;
