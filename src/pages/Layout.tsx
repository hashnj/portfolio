import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Layout: React.FC = () => {
  return (
    <div className=" w-full overflow-x-hidden min-h-screen h-full flex flex-col items-center p-2 md:p-0 bg-zinc-200 text-zinc-950 dark:bg-zinc-950 dark:text-white">
      <Navbar />
      <main className="flex-grow max-w-2xl w-full  py-4 ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
