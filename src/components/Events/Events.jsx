import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { setEvents, selectEvent } from "../../features/events/eventSlice";

const FindAEvent = () => {
  const [country, setCountry] = useState("")
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
    const countrys = obj.map((data) => data.country)
    const res = [...new Set(countrys)];
    return res.map((data) => (
      <option value={data} key={data}>
        {data}
      </option>
    ))
  }

  return (
    <section className="findDr_Main">
<select
          name="filter"
          id="filter"
          className="filter-input"
          defaultValue="default"
          onChange={handleInput}
        >
          <option value="default" disabled hidden>
            select Country
          </option>
          {Events && notRepeatedElements(Events) }
        </select>
      {Events &&
        Events.filter(data => data.country.includes(country)).map((data) => (
          <section className="findDr_Main--container" key={data._id}>
            <p>{data.name} </p>
            <p>{data.description  }</p>
            {/* <div>
              <img
                className="findDr_Main--container--img"
                src={data.description}
                alt=""
              />
            </div> */}
            <p>{data.date} </p>
            <div>country: {data.country}</div>
            <div>city: {data.city}</div>
            <button
              className="findDr__button"
              type="button"
              onClick={() => {
                handleClick(data._id);
              }}
            >
              Event details
            </button>
          </section>
        ))}
    </section>
  );
};

export default FindAEvent;
