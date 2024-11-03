import React from "react";
import Navbarcomp from "./Navbar";
import "../pages/styles/globals.css";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <>
      <div className="bg-gradient-to-br from-white to-pink-200 items-center text-center justify-center h-full uk-scrollspy">
        <Navbarcomp />
        {children}
        <footer className="bg-pink-100 bg-opacity-80 backdrop-filter backdrop-blur-lg text-center font-semibold py-4 mt-4">
          <div className="container mx-auto">
            <p className="text-gray-600 text-sm">
              &copy; {new Date().getFullYear()} Sugarsense. All rights reserved.
            </p>
            <div className="flex justify-center mt-4">
              <a href="#" className="text-gray-600 hover:text-gray-800 mx-3">
                Terms of Service
              </a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-600 hover:text-gray-800 mx-3">
                Privacy Policy
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}