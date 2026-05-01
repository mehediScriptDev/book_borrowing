import Featured from "@/app/(main)/components/home/Featured";
import Hero from "@/app/(main)/components/home/Hero";
import Marqueeee from "@/app/(main)/components/home/Marqueeee";


export default function Home() {
  return (
    <div>
      <Hero/>
      <Marqueeee/>
      <Featured/>
    </div>
  );
}
