import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="bg-blue-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-grey-100"
            className="inline-flex items-center py-6 px-3 mr-4 text-white hover:text-grey-800 text-4xl font-bold styleMe tracking-widest"
          >
            Razi Alawamleh
          </NavLink>
          <NavLink
            to="/post"
            className="inline-flex items-center py-3 my-6 rounded text-blue-100 hover:text-grey-800"
            activeClassName="text-blue-100 bg-blue-700"
          >
            Blog Post
          </NavLink>
          <NavLink
            to="/project"
            className="inline-flex items-center py-3 my-6 rounded text-blue-200 hover:text-grey-800"
            activeClassName="text-blue-100 bg-blue-700"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className="inline-flex items-center py-3 my-6 rounded text-blue-200 hover:text-grey-800"
            activeClassName="text-blue-100 bg-blue-700"
          >
            About Me!
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
