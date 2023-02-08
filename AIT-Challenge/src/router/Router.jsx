import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Trending from "../pages/Trending";
import UploadContent from "../pages/UploadContent";

const Router = () => {
  return (
    <>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/upload" element={<UploadContent />} />
        <Route path="/trending" element={<Trending />} />
      </Routes>
    </>
  );
};

export default Router;
