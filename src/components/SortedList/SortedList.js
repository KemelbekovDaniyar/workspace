function SortedList({ items }) {
  const output = items
    .sort((a, b) => b.score - a.score)
    .map(item => (
      <li>{item.name} - {item.score}</li>
    ));

  return (
    <ol>
      {output}
    </ol>
  )
}

export default SortedList;