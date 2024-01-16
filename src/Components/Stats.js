export default function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  if (!items.length)
    return (
      <footer>
        <p className="stats">
          <em>Start add some items to your packing list</em>
        </p>
      </footer>
    );
  return (
    <>
      {percentage === 100 ? (
        <footer className="stats">
          <em>" You Got everything! Ready to go ✈ "</em>
        </footer>
      ) : (
        <footer className="stats">
          <em>
            💼 You Have <span> {numItems} </span> Items in your List , and you
            already packed
            <span>
              {numPacked} ({percentage} %)
            </span>
          </em>
        </footer>
      )}
    </>
  );
}
