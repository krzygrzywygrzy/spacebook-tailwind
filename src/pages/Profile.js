import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import useGetProfilePageData from "../hooks/useGetProfilePageData";

const ProfilePage = ({ id }) => {
  // eslint-disable-next-line
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
      <div className="Profile mt-4 md:mt-8 2xl:mx-96  xl:mx-32 xl:px-32  sm:mx-8 md:px-16">
        {/* use info section */}
        <section className="flex md:flex-row flex-col justify-center md:justify-start md:space-x-16">
          <div className="rounded-full bg-white border border-gray-200 md:h-44 md:w-44 h-32 w-32 mx-auto md:mx-px"></div>
          <div>
            <div>
              {res.status === "success" && res.data.user ? (
                <div className="flex items-center justify-center md:justify-start mt-4 md:mt-0">
                  <div className="text-xl font-thin">
                    {res.data.user.fname} {res.data.user.surname}
                  </div>
                  <div className=" border border-gray-300 ml-2 p-2 rounded-md text-sm cursor-pointer font-semibold">
                    Add friend
                  </div>
                </div>
              ) : (
                <div className="flex flex-row">
                  <div className="bg-gray-300 rounded-md h-5 w-44"></div>
                  <div className="bg-gray-300 rounded-md h-5 ml-1 w-36"></div>
                </div>
              )}
              {res.status === "success" ? (
                <div className="flex md:justify-start justify-center">
                  <div className="mr-16">
                    {" "}
                    posts: <span className="font-semibold">130</span>
                  </div>
                  <div>
                    {" "}
                    friends: <span className="font-semibold">0</span>
                  </div>
                </div>
              ) : (
                <div className="flex flex-row mt-4">
                  <div className="bg-gray-300 rounded-md h-5 w-44"></div>
                  <div className="bg-gray-300 rounded-md h-5 ml-1 w-12"></div>
                  <div className="bg-gray-300 rounded-md h-5 ml-1 w-24"></div>
                </div>
              )}
            </div>
          </div>
        </section>
        {/* posts section */}
        <section className="mt-8 px-4 md:p-0">
          <div className=" border-b border-gray-200 text-center font-thin">Posts</div>
        </section>
      </div>
    </div>
  );
};

export default ProfilePage;
