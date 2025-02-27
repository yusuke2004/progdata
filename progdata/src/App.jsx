import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Top from "./pages/Top/Top";
import Post from "./pages/Post/Post";
import Index from "./pages/Index/Index";
import Login from "./pages/Login/Login";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/post" element={<Post />} />
        <Route path="/index" element={<Index />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>  
    );
}

export default App;