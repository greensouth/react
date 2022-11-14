import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./sections/Main";
import Home from "./sections/Home";
import Profile from "./sections/Profile";
import NoPage from "./sections/NoPage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App;
