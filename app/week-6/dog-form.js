"use client";

import { useState } from "react";

export default function DogForm({ onAddDog }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    // generate an ID
    const newId = Math.floor(Math.random() * 1000000);
    const newDog = { id: newId, name, age };
    onAddDog(newDog);
  }

  return (
    <div>
      <h2>Add Dog</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="text-black"
          />
        </div>
        <div>
          <label>Age</label>
          <input
            id="age"
            type="number"
            value={age}
            onChange={(event) => setAge(event.target.value)}
            className="text-black"
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
