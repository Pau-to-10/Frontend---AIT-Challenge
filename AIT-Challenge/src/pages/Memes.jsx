import axios from "axios";
import React, { useEffect, useState } from "react";
import MainNavbar from "../components/MainNavbar";

const Memes = () => {
  const [memesData, setMemesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const results = await axios(
        "https://api.giphy.com/v1/gifs/categories/memes",
        {
          params: {
            api_key: "06vxLXnVEXXHfDDesCXQzXCaelIEOiL6",
          },
        }
      );
      console.log(results);
      setMemesData(results.data.data);
    };

    fetchData();
  }, []);

  const renderMemesGifs = () => {
    return memesData.map((el) => {
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
      <h2>Memes</h2>
      <div style={{ display: "flex" }}>{renderMemesGifs()}</div>;
    </>
  );
};

export default Memes;
