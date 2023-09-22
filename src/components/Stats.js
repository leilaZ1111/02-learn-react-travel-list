export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  const numItems = items.length; // we can use the length of the array to get the number of items, and we DON'T WANT to store it in a state => it's a derived state!
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? 'You got everything! Ready to go ✈️'
          : `🧳 You have ${numItems} items on your list, and you already packed
          ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}

// In the Footer we have conditionally rendered the message based on the percentage of packed items. We have used a ternary operator to do that.
// We also use an if statement in the beginning (if (!items.length) => "if they are no items") to check if there are items in the list, and if not, we render a message to invite the user to add some items to the list.
