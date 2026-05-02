import Featured from "@/app/(main)/components/home/Featured";
import Hero from "@/app/(main)/components/home/Hero";
import Marqueeee from "@/app/(main)/components/home/Marqueeee";
import ManagementTeam from "@/app/(main)/components/home/ManagementTeam";
import BorrowBook from "@/app/(main)/components/home/BorrowBook";


export default function Home() {
  return (
    <div>
      <Hero/>
      <Marqueeee/>
      <Featured/>
      <ManagementTeam/>
      <BorrowBook/>
    </div>
  );
}
