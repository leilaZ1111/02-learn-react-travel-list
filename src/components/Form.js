import { useState } from 'react';

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return; // if the description is empty, we don't want to add the item

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItems(newItem);

    // reset the form after adding the item
    setDescription('');
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
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
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

// See how we have used Number() to convert the value to a number instead of a string on <Form<select, the dev tools will show you that the value is a number and it's how we have spoted the potential issie in the first place.

// no need to use Number() for the input value, because it's a text input and the value will always be a string.

// in the element to which we want to bind the state, we have used the "value" attribute to bind the state to the element, and the "onChange" event to update the state when the user changes the value.
