import React, { useState } from "react";

import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit, itemsData }) {
  let [name, setName] = useState("");
  let [category, setCategory] = useState("Produce");
  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value);
  }
  function SubmitHandler(event) {
    event.preventDefault();

    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: name,
      category: category,
    };
    // console.log(typeof onItemFormSubmit);
    onItemFormSubmit([...itemsData, newItem]);
  }

  return (
    <form className="NewItem" onSubmit={(e) => SubmitHandler(e)}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleNameChange} value={name} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCategoryChange} value={category}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
