function RegionList({ regions }) {
  regions.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    else if (a.name < b.name) {
      return -1;
    }
    else {
      return 0;
    }
  });


  regions.sort((a, b) => {
    if (a.area > b.area) {
      return 1;
    }
    else if (a.area < b.area) {
      return -1;
    }
    else {
      return 0;
    }
  });

  regions.sort((a, b) => {
    if (a.population > b.population) {
      return 1;
    }
    else if (a.population < b.population) {
      return -1;
    }
    else {
      return 0;
    }
  });




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