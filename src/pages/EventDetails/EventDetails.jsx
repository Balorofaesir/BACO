import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getEvent,
  //  selectEvent
} from "../../features/events/eventSlice";

const EventProfile = () => {
  const params = useParams();
  const data = useSelector((state) => state.events.event);
  console.log("params:", params, "data:", data);

  // const  data  = useSelector(selectEvent);
  // console.log('params:', data);
  // console.log('RESULT:', params._id);
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  useEffect(() => {
    dispatch(getEvent(params.id));
  }, [dispatch]);

  if (!data) return <h1 className="event1">is loading</h1>;

  return (
    <div>
      {data?.name && (
        <div className="cont5">
          <div className="cont5__image">
            <img className="image" src={data.image} alt="doct" />
          </div>
          <h1 className="event1">{data.name}</h1>

          <div className="cont5__section3">
            <h1>description</h1>
            <div className="cont5__section3--p">
              <p>{data.description}</p>
            </div>
            <h1>date</h1>
            <div className="cont5__section3--p">
              <p>{data.date.slice(0, -14)}</p>
            </div>
            <div className="cont5__section3--p">
              <h1>hour</h1>
              <p>{data.date.slice(11, -8)}</p>
            </div>
            <div className="cont5__section3--p">
              {" "}
              <h1>Country</h1>
              <p>{data.city}</p>
              <h1>City</h1>
              <p>{data.city}</p>
            </div>

            {/* <ul>
              <li>Member of the royal college of surgeons of USA</li>
              <li>Member of the general dental council USA</li>
            </ul>
          </div>
          <div className="cont5__section4">
            <h1>Skills</h1>
            <div>
              {data.skills.map((data1) => (
                <p key={data1} className="p1">
                  - {data1}
                </p>
              ))}
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default EventProfile;
