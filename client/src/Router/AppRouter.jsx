import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Guests from "../Pages/Guests/Guests";
import Tables from "../Pages/Tables/Tables";
// import NotFound from "../components/NotFount/NotFound";
// import Layout from "../Pages/Layout";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/invitation" element={<Home />} />
      <Route path="/guests" element={<Guests />} />
      <Route path="/tables" element={<Tables />} />
      <Route path="/gallery" element={<h1>nkarner</h1>} />
      <Route path="*" element={<h1>not found</h1>} />
    </Routes>
  );
};

export default AppRouter;
