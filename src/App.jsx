import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import OnlineLesson from "./pages/OnlineLesson.jsx";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/OnlineLesson.jsx" element={<OnlineLesson />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
