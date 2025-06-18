import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Guests from "../Pages/Guests/Guests";
import Tables from "../Pages/Tables/Tables";
// import NotFound from "../components/NotFount/NotFound";
// import Layout from "../Pages/Layout";

const AppRouter = () => {

  //path-երը պիտի փոխվի
  return (
    <Routes>
      <Route path="/invitation" element={<Home />} />
      <Route path="/invitation/guests" element={<Guests />} />
      <Route path="/invitation/tables" element={<Tables />} />
      <Route path="/invitation/gallery" element={<h1>nkarner</h1>} />
      <Route path="*" element={<h1>not found</h1>} />
    </Routes>
  );
};

export default AppRouter;
