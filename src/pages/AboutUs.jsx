import React from "react";
import { Navbar } from "../components/Navbar";
import profile from "../assets/img/profile.jpg";

export const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div className="w-3/5 2xl:w-1/2 text-center mx-auto mt-8 border shadow-xl px-16 py-9 mb-16">
        <img
          src={profile}
          alt=""
          className="w-40 h-40 mx-auto rounded-full object-cover mb-7"
        />
        <div className="font-bold text-2xl italic text-purple-600 mb-1">
          TO DO LIST APP
        </div>
        <div className="text-sm italic text-yellow-500 mb-5">
          <span className="underline">First project</span>
          <span className="text-purple-700"> | </span>
          <span className="font-semibold text-purple-500 underline">
            ReactJs
          </span>
        </div>
        <div className="px-20 2xl:px-28 text-sm text-left">
          <div className="mb-4">
            <div className="mb-1 font-semibold flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
              Tentang Projek :
            </div>
            <div className="indent-6 text-justify">
              <span className="italic">To Do List App</span> merupakan projek
              untuk challenge Chapter 3 Studi Independen{" "}
              <span className="text-purple-600 italic">
                Binar Academy Batch 5
              </span>
              . Tech-Stack yang digunakan adalah <span className="text-sky-400">ReactJS & Tailwind</span>. Pada aplikasi ini, user bisa <span className="text-sky-400">menambah, mengedit & menghapus</span> task To Do List. Pada aplikasi ini juga ada beberepa Button sebagai filter To Do List, yaitu <span className="text-sky-400">Button All, Done, ToDo, Delete done tasks & Delete all tasks</span>. Karena ini projek ReactJS pertama saya, saya belum benar - benar paham terkait structure folder ReactJS yang baik & benar. Dari projek ini, saya benar - benar belajar terkait penggunaan <span className="text-sky-400">props, useState(), Router, destructuring & styling menggunakan framework pada ReactJS</span>. Untuk routernya, saya menggunakannya pada bagian navbar, yang mana terdapat 2 page, yaitu <span className="text-sky-400">Home & About Us</span>.
            </div>
          </div>

          <div>
            <div className="mb-1 font-semibold flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
              Ketentuan / Kriteria :
            </div>
            <div className="indent-6">
              <ul>
                <li>
                  1. Menggunakan React.js untuk membuat tampilan dan routing
                  To-Do List.
                </li>
                <li>
                  2. Melakukan styling pada React.js sesuai design yang
                  disediakan.
                </li>
                <li>3. Mengimplementasikan code structure dalam React.js.</li>
                <li>4. Penggunaan framework CSS.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
