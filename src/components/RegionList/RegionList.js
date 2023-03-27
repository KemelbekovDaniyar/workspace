function RegionList({ regions }) {
  const output = regions.map((region) => (
    <div>
      <h2>{region.name}</h2>
      <div>area - {region.area}</div>
      <div>population - {region.population}</div>
    </div>
  ));

  return (
    <div>
      {output}
    </div>
  )
}

export default RegionList;