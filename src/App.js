import SimpleList from "./components/SimpleList/SimpleList";
import LengthList from "./components/LengthList/LengthList";
import SortedList from "./components/SortedList/SortedList";
import "./styles.css";

export default function App() {
  const example1 = ["Aijan", "Bakyt", "Joldosh"];
  const example2 = ["Apple", "Banana", "Orange"];
  const example3 = [
    { name:"Aijan", score:55 },
    { name:"Bakyt", score: 44},
    { name:"Joldosh", score: 70}
  ];


  return (
    <div className="App">
      <SimpleList items={example1} />
      <SimpleList items={example2} />
      <LengthList items={example1} />

      <SortedList items={example3} />
      </div>
  );
}
