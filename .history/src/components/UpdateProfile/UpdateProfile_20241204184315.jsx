import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard"; // Import Dashboard
import UpdateProfile from "./components/UpdateProfile"; // Import UpdateProfile

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/update-profile" element={<UpdateProfile />} /> {/* Add the update profile route */}
      </Routes>
    </Router>
  );
}

export default App;
