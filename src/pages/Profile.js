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
      <div className="Profile mt-8 xl:mx-96 xl:px-32">
        {/* use info section */}
        <section className="flex flex-row">
          <div className="rounded-full bg-white border border-gray-200 h-44 w-44"></div>
          <div className="xl:ml-32 lg:ml-24">
            <div>
              {res.status === "success" && res.data.user ? (
                <div className="flex items-center">
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
                <div className="flex">
                  <div className="mr-16"> posts: <span className="font-semibold">130</span></div>
                  <div> friends: <span className="font-semibold">0</span></div>
                </div>
              ) : (
                <div className="flex flex-row mt-4">
                  <div className="bg-gray-300 rounded-md h-5 w-44"></div>
                  <div className="bg-gray-300 rounded-md h-5 ml-1 w-36"></div>
                  <div className="bg-gray-300 rounded-md h-5 ml-1 w-24"></div>
                </div>
              )}
            </div>
          </div>
        </section>
        {/* posts section */}
        <section className="mt-8">
          <div className="border-b border-gray-200 text-center font-thin">Posts</div>
        </section>
      </div>
    </div>
  );
};

export default ProfilePage;
