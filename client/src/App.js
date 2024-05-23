import React, { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);
  function addItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleCheck(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClear() {
    if (!items.length) {
      alert("List is already empty");
      return;
    }
    const confirmed = window.confirm(
      "Are you Sure you want to delete the list completely"
    );
    if (confirmed) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onaddItems={addItems} />
      <PackingList
        items={items}
        del={handleDeleteItem}
        handleCheck={handleCheck}
        handleClear={handleClear}
      />
      <Stats items={items} />
    </div>
  );
}
