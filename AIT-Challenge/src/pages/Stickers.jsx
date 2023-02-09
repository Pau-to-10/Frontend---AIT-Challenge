import axios from "axios";
import React, { useEffect, useState } from "react";
import MainNavbar from "../components/MainNavbar";

const Stickers = () => {
  const [stickersData, setStickersData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const results = await axios(
        "https://api.giphy.com/v1/gifs/categories/stickers",
        {
          params: {
            api_key: "06vxLXnVEXXHfDDesCXQzXCaelIEOiL6",
          },
        }
      );
      console.log(results);
      setStickersData(results.data.data);
    };

    fetchData();
  }, []);

  const renderStickersGifs = () => {
    return stickersData.map((el) => {
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
      <h2>Stickers</h2>
      <div style={{ display: "flex" }}>{renderStickersGifs()}</div>;
    </>
  );
};

export default Stickers;
