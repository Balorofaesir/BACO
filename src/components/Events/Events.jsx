import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import "../Header/Header.css";

import { setEvents, selectEvent } from "../../features/events/eventSlice";

const FindAEvent = () => {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const Events = useSelector(selectEvent);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(setEvents());
  }, [dispatch]);

  function handleClick(data) {
    navigate(`/Event/${data}`);
  }

  const handleInputCountry = (e) => {
    setCountry(e.target.value);
    setCity("")
    setDate("")
  };
  const handleInputCity = (e) => {
    setCity(e.target.value);
    setDate("")
  };
  const handleInputDate = (e) => {
    setDate(e.target.value);
  };
  const handleCleanFilter = () => {
    setCountry("");
    setCity("")
    setDate("")
    document.getElementById("Countryfilter").placeholder = "default"
    document.getElementById("cityFilter").defaultValue = "default"
    document.getElementById("dateFilter").defaultValue = "default"
  }
  const notRepeatedElements = (obj) => {
    const countrys = obj.map((data) => data.country);
    const res = [...new Set(countrys)];
    return res.map((data) => (
      <option value={data} key={data}>
        {data}
      </option>
    ));
  };
  const notRepeatedCitys = (obj) => {
    const citys = obj.filter((data) => data.country.includes(country)).map(data => data.city );
    const res = [...new Set(citys)];
    return res.map((data) => (
      <option value={data} key={data}>
        {data}
      </option>
    ));
  };
  const notRepeatedDates = (obj) => {
    const varDates = obj.filter((data) => data.city.includes(city) && data.country.includes(country)).map(data => data.date.slice(0, -14) );
    const res = [...new Set(varDates)];
    return res.map((data) => (
      <option value={data} key={data}>
        {data}
      </option>
    ));
  };

  return (
    <section>
      <select
        name="Countryfilter"
        id="Countryfilter"
        className="event-filter-input"
        defaultValue="default"
        onChange={handleInputCountry}
      >
        <option className="find_Event" value="default" disabled hidden>
          select Country
        </option>
        {Events && notRepeatedElements(Events)}
      </select>
      <select
        name="cityFilter"
        id="cityFilter"
        className="event-filter-input"
        defaultValue="default"
        onChange={handleInputCity}
      >
        <option className="find_Event" value="default" disabled hidden>
          select City
        </option>
        {Events && notRepeatedCitys(Events)}
      </select>
      <select
        name="dateFilter"
        id="dateFilter"
        className="event-filter-input"
        defaultValue="default"
        onChange={handleInputDate}
      >
        <option className="find_Event" value="default" disabled hidden>
          select Date
        </option>
        {Events && notRepeatedDates(Events)}
      </select>
      <button type="button" onClick={handleCleanFilter} className="event-details-button">clean filter</button>

      <div className="event" >
      {Events &&
        Events.filter((data) => data.country.includes(country) && data.city.includes(city) && data.date.includes(date)).map(data => (
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
