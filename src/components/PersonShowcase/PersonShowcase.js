import React from "react";
import "./PersonShowcase.css";

function PersonShowcase(props) {
  return (
    <div className="PersonShowcase">
      <h2 className="PersonShowcase-title">{props.title}</h2>
      {props.render()}
    </div>
  );
}

export default PersonShowcase;

// <Track height="300px" min_height="300px">
//   {Array.isArray(items_array) && items_array.length > 0 ? (
//     items_array
//       .slice(0, 10)
//       .map((item) => (
//         <PersonShowcaseItem
//           key={uuidv4()}
//           name={item.name}
//           character={item.character}
//           path={item.profile_path}
//           content_id={item.id}
//         />
//       ))
//   ) : (
//     <div>Sorry we can't find any information on this.</div>
//   )}
// </Track>
