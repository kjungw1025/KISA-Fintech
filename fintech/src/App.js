import './App.css';
import Welcome from "./components/Welcome";
import StateComponent from "./components/StateComponent";

function App() {
  return (
    <div className="App">
      <Welcome userName="홍길동" age={14}></Welcome>
      <StateComponent></StateComponent>
    </div>
  );
}

export default App;
