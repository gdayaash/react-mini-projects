import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import Packages from "./components/Packages";
import Stats from "./components/Stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Watch", quantity: 1, packed: false },
// ];

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDelItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function updateItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function clearList() {
    const confirm = window.confirm("Is the trip not happenning 😩");
    if (confirm) setItems([]);
  }
  return (
    <div className="App">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <Packages
        items={items}
        onDelItems={handleDelItem}
        onToggleItems={updateItem}
        clearList={clearList}
      />
      <Stats items={items} />
    </div>
  );
}
