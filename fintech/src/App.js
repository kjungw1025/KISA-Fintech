import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StyledComponent from "./components/StyledComponent";
import ListComponent from "./components/ListComponent";
import StateComponent from "./components/StateComponent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/style" element={<StyledComponent/>}></Route>
        <Route path="/list" element={<ListComponent/>}></Route>
        <Route path="/state" element={<StateComponent/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;