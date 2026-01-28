export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Let' s Pack things. Boss 👀.</em>
      </footer>
    );
  const numOfItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / numOfItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "Let's Go Boss....✈️"
          : `You have ${numOfItems} items on the list, and you have packed ${packedItems} ${
              packedItems === 0 ? "" : `${percentage}%`
            } out of it.`}
      </em>
    </footer>
  );
}
