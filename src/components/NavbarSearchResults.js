import React from "react";
import { Link } from "wouter";

/**
 * React FC that renders
 * @param {results} Array of { _id, fname, surname }
 */
const NavbarSearchResults = ({ results }) => {
  return (
    <div className="absolute top-12 w-60 bg-white border border-gray-200">
      {results.length === 0 ? (
        <div className="text-center text-sm p-1">loading...</div>
      ) : (
        <div>
          {results.numOfResults > 0 ? (
            <div>
              {results.result.map((item, index) => {
                return (
                  <Link key={index} href={`/profile/${item._id}`}>
                    <div className="text-sm cursor-pointer hover:bg-gray-100 p-1">
                      {item.fname} {item.surname}
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="text-center text-sm p-1">nothing found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default NavbarSearchResults;
