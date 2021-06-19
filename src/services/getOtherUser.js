import Cookies from "js-cookie";
import { apiURL, contentType } from "../config";

const getAnotherUserService = async (userID) => {
  const res = await fetch(apiURL + "/anotherUser", {
    method: "POST",
    body: JSON.stringify({ userID }),
    headers: {
      ...contentType,
      Authorization: Cookies.get("authenticatedUser"),
    },
  });
  const data = await res.json();
  return data;
};

export default getAnotherUserService;
