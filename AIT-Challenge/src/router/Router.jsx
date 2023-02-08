import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Sports from "../pages/Sports";
import Animals from "../pages/Animals";
import Gaming from "../pages/Gaming";
import Music from "../pages/Music";
import Memes from "../pages/Memes";
import Stickers from "../pages/Stickers";
import UploadContent from "../pages/UploadContent";

const Router = () => {
  return (
    <>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/upload" element={<UploadContent />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/animals" element={<Animals />} />
        <Route path="/gaming" element={<Gaming />} />
        <Route path="/music" element={<Music />} />
        <Route path="/memes" element={<Memes />} />
        <Route path="/stickers" element={<Stickers />} />
      </Routes>
    </>
  );
};

export default Router;
