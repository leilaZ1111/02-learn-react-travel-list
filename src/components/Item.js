export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

// Checkbox: in order to transform it in a control element, we want to transform the value of the checkbox to a boolean, so we have used the "checked" attribute to bind the state to the element, and the "onChange" event to update the state when the user changes the value.
