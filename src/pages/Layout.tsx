import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Layout: React.FC = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-zinc-200 text-zinc-950 dark:bg-zinc-950 dark:text-white">
      <Navbar />

      <main className="flex-grow max-w-2xl w-full py-4 px-2 md:px-0">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
