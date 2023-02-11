// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// import { setFavoriteEvents,selectFavoriteEvents  } from "../features/myFavoriteEvents/favoriteEventsSlice";


// const MyFavsEvents = () => {
//   const [country, setCountry] = useState("");
//   const Favorites = useSelector(selectFavoriteEvents);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   useEffect(() => {
//     dispatch(setFavoriteEvents());
//   }, [dispatch]);

//   function handleClick(data) {
//     navigate(`/Event/${data}`);
//   }

//   const handleInput = (e) => {
//     setCountry(e.target.value);
//   };
//   const notRepeatedElements = (obj) => {
//     const countrys = obj.map((data) => data.country);
//     const res = [...new Set(countrys)];
//     return res.map((data) => (
//       <option value={data} key={data}>
//         {data}
//       </option>
//     ));
//   };

//   return (
//     <section>
//       <select
//         name="filter"
//         id="filter"
//         className="event-filter-input"
//         defaultValue="default"
//         onChange={handleInput}
//       >
//         <option className="find_Event" value="default" disabled hidden>
//           select Country
//         </option>
//         {Favorites && notRepeatedElements(Favorites)}
//       </select>
//       <div className="event">
//         {Favorites &&
//           Favorites.filter((data) => data.country.includes(country)).map(
//             (data) => (
//               <section className="event--container" key={data._id}>
//                 <p>{data.name} </p>
//                 <p>Date: {data.date.slice(0, -14)} </p>
//                 <p>Starts at: {data.date.slice(11, -8)} </p>
//                 <div>Country: {data.country}</div>
//                 <div>City: {data.city}</div>
//                 <button
//                   className="event-details-button"
//                   type="button"
//                   onClick={() => {
//                     handleClick(data._id);
//                   }}
//                 >
//                   Event details
//                 </button>
//               </section>
//             )
//           )}
//       </div>
//     </section>
//   );
// };

// export default MyFavsEvents;
