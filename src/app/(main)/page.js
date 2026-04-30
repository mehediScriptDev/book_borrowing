import Navbar from "@/app/components/shared/Navbar";
import Image from "next/image";
import { Children } from "react";

export default function Home({ children }) {
  return (
    <div className="">
      <Navbar/>
      <main className="w-11/12 mx-auto">
       {children}
      </main>
    </div>
  );
}
