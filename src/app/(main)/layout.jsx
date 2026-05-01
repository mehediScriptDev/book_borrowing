import Footer from "@/app/components/shared/Footer";
import Navbar from "@/app/components/shared/Navbar";
import Image from "next/image";
import { Children } from "react";

const layout = ({ children }) => {
    return (
        <div className="">
      <Navbar/>
      <main className="">
       {children}
      </main>
      <Footer/>
    </div>
    );
};

export default layout;