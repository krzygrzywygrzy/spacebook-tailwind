import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import useGetProfilePageData from "../hooks/useGetProfilePageData";

const ProfilePage = ({ id }) => {
  const [auth, setAuth] = useState(false);
  const res = useGetProfilePageData(id !== "you" && id);

  useEffect(() => {
    if (Cookies.get("authenthicatedUser") !== undefined) setAuth(true);

    //set title
    document.title = "Spacebook | Profile";
  }, []);

  return (
    <div>
      <Navbar />
      <div className="Profile mt-8 lg:mx-96">
        <div className="flex flex-row">
          <div className="h-52 w-52 rounded-full bg-white border border-gray-200"></div>
          <div className="ml-12">
            <div className="flex">
              {res.status !== "success" ? (
                <div className="text-xl font-thin">
                  {res.data.user.fname} {res.data.user.surname}
                </div>
              ) : (
                <div className="flex flex-row">
                  <div className="border-gray-300 border-sm w-10 h-5"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
