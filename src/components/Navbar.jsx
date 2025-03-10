import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import "../index.css";

const navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="border sticky border-gray-600 bg-black h-[100px] text-gray-400 max-w-[1200px] mx-auto flex justify-between items-center">
      <h1 className="text-3xl font-bold primary-color ml-4">
        M. Heang
      </h1>
      <ul className="hidden md:flex">
        <li className="p-5">
          <a href="#about">About</a>
        </li>
        
        <li className="p-5">
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div onClick={handleNav} className="block md:hidden mr-6">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div className={nav ? "z-10 fixed h-full left-0 top-0 w-[60%] bg-gray-800 ease-in-out duration-500" : "fixed left-[-100%]"}>
        <h1 className="text-3xl font-bold primary-color m-4">
          M. Heang
        </h1>
        <ul className="text-2xl p-8">
          <li className="p-2">
            <a href="#about">About</a>
          </li>
          
          <li className="p-2">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default navbar;
