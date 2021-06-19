import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { useLocation } from "wouter";
import useGetHomePageData from "../hooks/useGetHomePageData";

/**
 * React FC that renders home page
 */
const HomePage = () => {
  const [, setLocation] = useLocation();

  //check if auth cookie is present, otherwise redirect to <LoginPage/>
  useEffect(() => {
    const cookie = Cookies.get("authenticatedUser");
    if ((cookie === undefined) | "") setLocation("/login");
  }, []);

  const homePageData = useGetHomePageData();

  return <div>Home</div>;
};

export default HomePage;
