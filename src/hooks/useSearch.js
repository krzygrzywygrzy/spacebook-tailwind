import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import { apiURL, contentType } from "../config";

const useSearch = (phrase) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const search = async () => {
      if (phrase.length > 2) {
        const res = await fetch(apiURL + "/search", {
          method: "POST",
          headers: {
            ...contentType,
            Authorization: Cookies.get("authenticatedUser"),
          },
          body: JSON.stringify({ phrase }),
        });

        if (res.status === 201) {
          const resData = await res.json();
          setData(resData);
        } else {
          console.log("Error " + res.status);
        }
      }
    };

    search();
  }, [phrase]);

  return data;
};

export default useSearch;
