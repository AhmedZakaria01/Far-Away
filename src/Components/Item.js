export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li className="py-123451234512ew">
      <input type="checkbox" onChange={() => onToggleItem(item.id)} />
      <span
        style={
          item.packed ? { textDecoration: "line-through", color: "red" } : {}
        }
      >
        {item.quantity} {item.description}
      </span>
      <button type="button" onClick={() => onDeleteItem(item.id)}>
        ❌
      </button>
    </li>
  );
}
