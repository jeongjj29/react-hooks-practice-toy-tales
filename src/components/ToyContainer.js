import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toysList, onToyDelete, onToyLike }) {
  return (
    <div id="toy-collection">
      {toysList.map((toy) => (
        <ToyCard
          key={toy.id}
          toy={toy}
          onToyDelete={onToyDelete}
          onToyLike={onToyLike}
        />
      ))}
    </div>
  );
}

export default ToyContainer;
