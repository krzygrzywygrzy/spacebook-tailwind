import { useEffect, useState } from "react";
import getAnotherUserService from "../services/getOtherUser";

const useGetProfilePageData = (id) => {
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState({});

  useEffect(() => {
    const getUser = async () => {
      setStatus("pending");
      if (id !== undefined) {
        const res = await getAnotherUserService(id);
        setData(res);
        setStatus("success");
      } else {
        //TODO: implement
      }
    };
    getUser();
  }, [id]);

  return { status, data };
};

export default useGetProfilePageData;
