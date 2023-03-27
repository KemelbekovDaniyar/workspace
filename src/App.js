import SimpleList from "./components/SimpleList/SimpleList";
import LengthList from "./components/LengthList/LengthList";
import SortedList from "./components/SortedList/SortedList";
import "./styles.css";
import RegionList from "./components/RegionList/RegionList";

export default function App() {
  const example1 = ["Aijan", "Bakyt", "Joldosh"];
  const example2 = ["Apple", "Banana", "Orange"];
  const example3 = [
    { name: "Aijan", score: 55 },
    { name: "Bakyt", score: 44 },
    { name: "Joldosh", score: 70 }
  ];
  const example4 = [
    { name: "Bishkek City", area: 160, population: 1098448 },
    { name: "Batken Region", area: 17048, population: 558652 },
    { name: "Chüy Region", area: 19895, population: 985430 },
    { name: "Jalal-Abad Region", area: 32418, population: 1282253 },
    { name: "Naryn Region", area: 44160, population: 294311 },
    { name: "Osh Region", area: 28934, population: 1414670 },
    { name: "Talas Region", area: 13406, population: 274029 },
    { name: "Issyk-Kul Region", area: 43735, population: 505901 },
    { name: "Osh City", area: 182, population: 333629 }
  ]


  return (
    <div className="App">
      <SimpleList items={example1} />
      <SimpleList items={example2} />
      <LengthList items={example1} />

      <SortedList items={example3} />
      <RegionList regions={example4} />
    </div>
  );
}
