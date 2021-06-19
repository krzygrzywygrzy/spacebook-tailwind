import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import useSearch from "../hooks/useSearch";
import NavbarSearchResults from "./NavbarSearchResults";

/**
 * React FC that renders Navbar
 */
const Navbar = () => {
  //
  // searching and displaying search results
  //
  const [phrase, setPhrase] = useState("");
  const [showSearchResultsBox, setShowSearchResultsBox] = useState(false);

  useEffect(() => {
    if (phrase.length > 2) setShowSearchResultsBox(true);
    else setShowSearchResultsBox(false);
  }, [phrase]);

  const results = useSearch(phrase);

  //
  // searching and displaying search results - end
  //

  return (
    <div className=" hidden md:block  py-2 bg-white border-b border-gray-200 md:px-24 xl:px-32 2xl:px-96">
      <div className="xl:mx-32 grid grid-cols-3">
        <div>
          <Link href="/">spacebook</Link>
        </div>
        <div className="flex justify-center">
          <input
            type="text"
            className="block focus:outline-none rounded-sm bg-gray-100 border border-gray-200 px-2 text-sm w-52"
            placeholder="search..."
            value={phrase}
            onChange={(e) => setPhrase(e.target.value)}
          />
          {showSearchResultsBox && <NavbarSearchResults results={results} />}
        </div>
        <div className="flex justify-end">links</div>
      </div>
    </div>
  );
};

export default Navbar;
