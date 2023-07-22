import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./Pages/Home";
import Auth from "./Pages/Auth";
import CreatePost from "./Pages/CreatePost";
import SavedPost from "./Pages/SavedPost";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/saved-post" element={<SavedPost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
