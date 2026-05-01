import Navlink from "@/app/components/shared/components/Navlink";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const links = (
    <>
      <li>
        <Navlink href="/">Home</Navlink>
      </li>
      <li>
        <Navlink href="/allBooks">All Books</Navlink>
      </li>
      <li>
        <Navlink href="/myProfile">My Profile</Navlink>
      </li>
    </>
  );

  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar px-4 container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm font-semibold text-sm md:text-base dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link href="/" className="font-bold text-xl">
            <span>Mango</span>
            <span className="text-primaryy">Bookish</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-sm font-semibold px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <a className=" bg-primaryy cursor-pointer text-white rounded-full px-4 py-1 active:scale-95">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
