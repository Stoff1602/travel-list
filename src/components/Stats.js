export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start med å legge til gjenstander til listen</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "Du har pakket alt og er klar for reise!!"
          : `Du har ${numItems} gjenstander i listen, og du har pakket ${numPacked}(
        ${percentage}%)`}
      </em>
    </footer>
  );
}
