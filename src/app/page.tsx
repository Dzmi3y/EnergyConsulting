import Menu from "@/components/Menu";
import MainInfo from "./home/MainInfo";
import AreasExpertise from "./home/AreasExpertise";
//import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Menu isDark />
      <main>
        <MainInfo />
        <AreasExpertise />
      </main>
      {/* <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            /> */}
    </div>
  );
}
