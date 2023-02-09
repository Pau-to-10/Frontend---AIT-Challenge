import axios from "axios";
import React, { useEffect, useState } from "react";
import MainNavbar from "../components/MainNavbar";

const Music = () => {
  const [musicData, setMusicData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const results = await axios(
        "https://api.giphy.com/v1/gifs/categories/music",
        {
          params: {
            api_key: "06vxLXnVEXXHfDDesCXQzXCaelIEOiL6",
          },
        }
      );
      console.log(results);
      setMusicData(results.data.data);
    };

    fetchData();
  }, []);

  const renderMusicGifs = () => {
    return musicData.map((el) => {
      return (
        <div key={el.gif.id}>
          <img src={el.gif.images.fixed_height.url} />
        </div>
      );
    });
  };

  return (
    <>
      <MainNavbar />
      <h2>Music</h2>
      <div style={{ display: "flex" }}>{renderMusicGifs()}</div>;
    </>
  );
};

export default Music;
