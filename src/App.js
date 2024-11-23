import './App.css';
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import HomePage from './Components/HomePage';
import ContactMessages from './Components/ContactMessages';
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/messages" element={<ContactMessages />} />
    </Routes>
  );
}

export default App;
