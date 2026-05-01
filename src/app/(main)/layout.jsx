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
    </div>
    );
};

export default layout;