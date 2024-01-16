import { useState } from "react";
export default function Form({ onAddItems, handleDeleteItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    onAddItems(newItem);
    setDescription("");
    setQuantity(1);
  }
  return (
    <form className="add-form d-flex flex-wrap py-5 align-items-center">
      <h3 className="col-12 text-center py-3">
        What do you need for your 😍 trip ?
      </h3>
      <div className="col-12 text-center py-3">
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          placeholder="item..."
        />
        <button type="submit" onClick={handleSubmit}>
          ADD
        </button>
      </div>
    </form>
  );
}
