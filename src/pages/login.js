import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import Cookies from "js-cookie";

/**
 * React FC that renders login page
 */
const LoginPage = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  //redirect tool
  const [, setLocation] = useLocation();

  //fetching api endpoint to get cookie jwt token
  const handleLogIn = async () => {
    try {
      const query = await fetch("http://spacebook-web.herokuapp.com/login", {
        method: "post",
        body: JSON.stringify({ login, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (query.status === 200) {
        const data = await query.json();
        Cookies.set("authenticatedUser", data.token, { expires: 3 });
        setLocation("/");
      } else {
        console.log(query.status);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="lg:mx-64">
      <div className="w-96 mb-2 text-blue-800 text-6xl pt-56 select-none subpixel-antialiased font-semibold">
        Get across with people from all over the universe
      </div>
      <div className="w-96 mb-4 text-gray-700">
        Spacebook allows you to share memories your memories not only to people living on Earth
      </div>
      <div className="flex flex-col w-72 justify-start">
        <input
          type="text"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          placeholder="Login/Phone..."
          className="block focus:outline-none rounded-md bg-gray-200 p-1  mb-2 px-2 border-2 focus:border-blue-800"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password..."
          className="block focus:outline-none rounded-md bg-gray-200 p-1  mb-2 px-2 border-2 focus:border-blue-800"
        />
        <div className="flex flex-row items-center">
          <div
            onClick={handleLogIn}
            className="block focus:outline-none bg-blue-800 w-1/3 text-center py-2 text-white rounded-full cursor-pointer"
          >
            log in
          </div>
          <div className="ml-2">
            <Link href="/signup">no account?</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
