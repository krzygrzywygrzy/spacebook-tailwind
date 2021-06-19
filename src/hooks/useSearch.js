import { useState, useEffect } from "react";
import { apiURL, contentType } from "../config";

const useSearch = (phrase) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const search = async () => {
      const res = await fetch(apiURL + "/search", {
        method: "POST",
        headers: {
          ...contentType,
        },
        body: JSON.stringify({ phrase }),
      });

      if (res.status === 201) {
        const resData = await res.json();
        console.log(resData);
        setData(resData);
      } else {
        console.log("Error " + res.status);
      }
    };

    search();
  }, [phrase]);

  return data;
};

export default useSearch;
