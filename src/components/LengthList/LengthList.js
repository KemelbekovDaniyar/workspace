function LengthList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li>{item} - {item.length}</li>
      ))}
    </ul>
  );
}

export default LengthList;