import Cookies from "js-cookie";
import { apiURL, contentType } from "../config";

const getUserService = async () => {
  const token = Cookies.get("authenticatedUser");
  const res = await fetch(apiURL + "/getUser", {
      method: "POST",
      headers: {
          ...contentType,
          "Authorization": token,
      }
  });
  const data = await res.json();
  return data;
};

export default getUserService;
