import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
// import StarRating from "./StarRating";
import App from "./App-v1";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);

//   return (
//     <div>
//       {/* <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
//       <p>This movie was rated {movieRating} stars</p> */}
//     </div>
//   );
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={10} color="purple" size={24} />
    <StarRating
      maxRating={5}
      color="red"
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <Test />
    <StarRating defaultRating={3} /> */}
  </React.StrictMode>
);
