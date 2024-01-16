import { useState } from "react";
import Logo from "./Logo.js";
import Form from "./Form.js";
import PackingList from "./PackingList.js";
import Stats from "./Stats.js";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: false },
    { id: 3, description: "Charger", quantity: 10, packed: false },
  ];

  const [items, setItems] = useState(initialItems);

  function handleItems(item) {
    setItems([...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((curentItems) => curentItems.filter((item) => item.id !== id));
  }

  function onToggleItem(id) {
    setItems((items) =>
      items.map((items) =>
        items.id === id ? { ...items, packed: !items.packed } : items
      )
    );
    console.log(items);
  }
  function onClearItem() {
    const confirmed = window.confirm(
      "Are you sure you want to Delete All of your Items? "
    );
    if (confirmed) {
      setItems([]);
    }
  }
  return (
    <div>
      <Logo />
      <Form onAddItems={handleItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={onToggleItem}
        onClearItem={onClearItem}
      />
      <Stats items={items} />
    </div>
  );
}
