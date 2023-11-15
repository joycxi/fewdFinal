import "./styles.css";
import "./Components/accordion/Accordian";
import Accordion from "./Components/accordion/Accordian";
import Darktheme from "./Components/editable/Darktheme";
import TarotCards from "./Components/TarotList/TarotCards";
import MinorCards from "./Components/TarotList/MinorCards";

export default function App() {
  return (
    <div className="App">
      <Darktheme />
      <h1>Accordian</h1>
      <h2>death. to them all. </h2>
      <Accordion />
      <TarotCards />
      <MinorCards />
    </div>
  );
}
