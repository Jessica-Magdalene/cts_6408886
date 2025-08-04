import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TrainerList from './TrainerList';
import Home from './Home';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trainers" element={<TrainerList />} />
        {/* Next step: Add trainer details route here */}
      </Routes>
    </Router>
  );
}

export default AppRouter;
