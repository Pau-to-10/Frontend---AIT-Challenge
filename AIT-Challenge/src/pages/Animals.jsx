import axios from "axios";
import React, { useEffect, useState } from "react";
import MainNavbar from "../components/MainNavbar";

const Animals = () => {
  const [animalsData, setAnimalsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const results = await axios(
        "https://api.giphy.com/v1/gifs/categories/animals",
        {
          params: {
            api_key: "06vxLXnVEXXHfDDesCXQzXCaelIEOiL6",
          },
        }
      );
      console.log(results);
      setAnimalsData(results.data.data);
    };

    fetchData();
  }, []);

  const renderAnimalsGifs = () => {
    return animalsData.map((el) => {
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
      <h2>Animals</h2>
      <div style={{ display: "flex" }}>{renderAnimalsGifs()}</div>;
    </>
  );
};

export default Animals;
