import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StyledComponent from "./components/StyledComponent";
import ListComponent from "./components/ListComponent";
import Welcome from "./components/Welcome";
import AxiosComponent from "./components/AxiosComponent";
import NewsPage from "./pages/NewsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome/>}></Route>
        <Route path="/axios" element={<AxiosComponent/>}></Route>
        <Route path="/list" element={<ListComponent/>}></Route>
        <Route path="/style" element={<StyledComponent/>}></Route>
        <Route path="/news" element={<NewsPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;