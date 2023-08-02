import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import AuthResultPage from "./pages/AuthResultPage";
import MainPage from "./pages/MainPage";
import BalancePage from "./pages/BalancePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage/>}></Route>
        <Route path="/main" element={<MainPage />}></Route>
        <Route path="/balance" element={<BalancePage />}></Route>
        <Route path="/authResult" element={<AuthResultPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;