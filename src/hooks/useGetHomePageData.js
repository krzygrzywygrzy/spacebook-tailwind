import { useState, useEffect } from "react";
import getUserService from "../services/getUser";

/**
 * React custom hook that allows to fetch primary user data, posts etc...
 * @returns {data, status}
 */
const useGetHomePageData = () => {
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = async () => {
      setStatus("pending");
      const res = await getUserService();
      console.log(res);
      setData(res);
      setStatus("success");
    };

    getData();
  }, []);

  return { data, status };
};

export default useGetHomePageData;
