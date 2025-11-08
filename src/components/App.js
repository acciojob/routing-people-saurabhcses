import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './../styles/App.css';
import UserList from "./UserList";
import UserDetail from "./UserDetail";

const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}
      <Router>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/users/:id" element={<UserDetail />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
