import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, itemData }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSearch, setSelectedSearch] = useState("");
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event) {
    setSelectedSearch(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if ((selectedCategory === "All") & (selectedSearch.length === 0)) {
      return true;
    } else if (item.category === selectedCategory) {
      return item;
    } else if (item.name.toLowerCase().includes(selectedSearch.toLocaleLowerCase())) {
      return item;
    } else {
      return null;
    }
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={itemData} itemsData={items} />
      <Filter search="testing" onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
