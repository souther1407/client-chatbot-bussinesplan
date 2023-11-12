import { Routes, Route } from "react-router-dom";
import ChatBot from "./pages/ChatBot/ChatBot";
import { CHATBOT, LOGIN } from "./utils/constants/routes";
import Login from "./pages/Login/Login";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path={CHATBOT} element={<ChatBot />} />
      <Route path={LOGIN} element={<Login />} />
    </Routes>
  );
}

export default App;
