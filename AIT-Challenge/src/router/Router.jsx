import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";

const Router = () => {
  return (
    <>
      <Routes>
        <Route index path="/" element={<HomePage />} />
      </Routes>
    </>
  );
};

export default Router;
