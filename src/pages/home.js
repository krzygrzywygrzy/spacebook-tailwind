import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { useLocation } from "wouter";
import useGetHomePageData from "../hooks/useGetHomePageData";
import Navbar from "../components/Navbar";

/**
 * React FC that renders home page
 */
const HomePage = () => {
  const [, setLocation] = useLocation();

  useEffect(()=> document.title = "Spacebook | Home", []);

  //check if auth cookie is present, otherwise redirect to <LoginPage/>
  useEffect(() => {
    const cookie = Cookies.get("authenticatedUser");
    if ((cookie === undefined) | "") setLocation("/login");
  }, [setLocation]);

  //const homePageData = useGetHomePageData();

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
    </div>
  );
};

export default HomePage;
