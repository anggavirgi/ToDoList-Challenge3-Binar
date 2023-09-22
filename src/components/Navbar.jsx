import React from "react";
import logo from "../assets/img/logo.png";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="shadow">
      <div className="w-1/2 mx-auto flex justify-between items-center py-5">
        <div className="flex items-center gap-4 font-semibold">
          <img src={logo} alt="" className="w-8" />
          <span className="italic text-yellow-500">Todo List Angga</span>
        </div>
        <div className="flex gap-12 font-semibold">
          <div onClick={() => navigate("/")} className="cursor-pointer text-purple-500 hover:text-purple-700">Home</div>
          <div onClick={() => navigate("/aboutus")} className="cursor-pointer text-purple-500 hover:text-purple-700">About Us</div>
        </div>
      </div>
    </div>
  );
};
