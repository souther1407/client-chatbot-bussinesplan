import { Routes, Route } from "react-router-dom";
import ChatBot from "./pages/ChatBot/ChatBot";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ChatBot />} />
    </Routes>
  );
}

export default App;
