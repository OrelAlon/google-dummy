import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Results from "./Results";
import Search from "./Search";

import "./style/routesTo.css";

const RoutesTo = () => {
  return (
    <div className="routes">
      <Routes>
        <Route path="/" render={() => <Navigate to="/search" />} />
        <Route path="/search" element={<Results />} />
        <Route path="/image" element={<Results />} />
        <Route path="/news" element={<Results />} />
        <Route path="/video" element={<Results />} />
      </Routes>
    </div>
  );
};

export default RoutesTo;
