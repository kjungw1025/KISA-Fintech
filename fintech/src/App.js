import './App.css';
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <Welcome userName="홍길동" age={14}></Welcome>
    </div>
  );
}

export default App;
