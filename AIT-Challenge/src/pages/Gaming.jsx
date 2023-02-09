import React, { useEffect, useState } from "react";
import axios from "axios";
import MainNavbar from "../components/MainNavbar";

const Gaming = () => {
  const [gamingData, setGamingData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const results = await axios(
        "https://api.giphy.com/v1/gifs/categories/gaming",
        {
          params: {
            api_key: "06vxLXnVEXXHfDDesCXQzXCaelIEOiL6",
          },
        }
      );
      console.log(results);
      setGamingData(results.data.data);
    };

    fetchData();
  }, []);

  const renderGamingGifs = () => {
    return gamingData.map((el) => {
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
      <h2>Gaming</h2>
      <div style={{ display: "flex" }}>{renderGamingGifs()}</div>;
    </>
  );
};

export default Gaming;
