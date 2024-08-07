import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [toysList, setToysList] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((r) => r.json())
      .then((data) => setToysList(data));
  }, []);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function onNewToySubmit(newToy) {
    setToysList([...toysList, newToy]);
  }

  function onToyDelete(deletedToy) {
    setToysList([...toysList.filter((toy) => toy.id !== deletedToy.id)]);
  }

  function onToyLike(updatedToy) {
    setToysList([
      ...toysList.map((toy) => {
        if (toy.id === updatedToy.id) {
          return { ...toy, likes: toy.likes + 1 };
        } else {
          return toy;
        }
      }),
    ]);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onNewToySubmit={onNewToySubmit} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer
        toysList={toysList}
        onToyDelete={onToyDelete}
        onToyLike={onToyLike}
      />
    </>
  );
}

export default App;
