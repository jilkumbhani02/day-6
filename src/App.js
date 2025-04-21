import "./App.css";
import Input from "./components/LocalStorage/Input";
import Search from "./components/usedebounce/Search";
import Check from "./components/useonlinestatus/Check";

function App() {
  return (
    <div className="App">
      <Check />
      <Search />
      <Input />
    </div>
  );
}

export default App;
