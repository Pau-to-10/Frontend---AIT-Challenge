import React, { useEffect, useState } from "react";
import axios from "axios";
const TrendingGiphy = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const results = await axios("https://api.giphy.com/v1/gifs/trending", {
        params: {
          api_key: "06vxLXnVEXXHfDDesCXQzXCaelIEOiL6",
        },
      });
      console.log(results);
      setData(results.data.data);
    };

    fetchData();
  }, []);

  const renderGifs = () => {
    return data.map((el) => {
      return (
        <div key={el.id}>
          <img src={el.images.fixed_height.url} />
        </div>
      );
    });
  };

  return <div style={{ display: "flex" }}>{renderGifs()}</div>;
};

export default TrendingGiphy;
