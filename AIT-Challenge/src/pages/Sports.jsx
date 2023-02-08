import axios from "axios";
import React, { useEffect, useState } from "react";
import MainNavbar from "../components/MainNavbar";

const Sports = () => {
  const [sportsData, setSportsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const results = await axios(
        "https://api.giphy.com/v1/gifs/categories/sports",
        {
          params: {
            api_key: "06vxLXnVEXXHfDDesCXQzXCaelIEOiL6",
          },
        }
      );
      console.log(results);
      setSportsData(results.data.data);
    };

    fetchData();
  }, []);

  const renderSportsGifs = () => {
    return sportsData.map((el) => {
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
      <h2>Sports</h2>
      <div style={{ display: "flex" }}>{renderSportsGifs()}</div>;
    </>
  );
};

export default Sports;
