import React from "react";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <div className="justify-center flex">
      <div className="flex justify-center content-center items-center h-24 max-w-[320px] px-5 text-black">
        <ul className="flex justify-between">
          <li className="p-5 font-semibold">
            <button>
              <Link to={"/"}>Home</Link>
            </button>
          </li>
          <li className="p-5 font-semibold">
            <button>
              <Link to={"/Portfolio"}>Portfolio</Link>
            </button>
          </li>
          <li className="p-5 font-semibold">
            <button>
              <Link to={"/Contact"}>Contact</Link>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default navbar;
