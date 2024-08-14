import logo from "./logo.svg";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
// import Quiz from "./components/Quiz";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Study from "./components/Study";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        {/* <Route path="/quiz" element={<Quiz />} /> */}
        <Route path="/study" element={<Study />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
