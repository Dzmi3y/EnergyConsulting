import Menu from "@/components/Menu";
import MainInfo from "./home/MainInfo";
import AreasExpertise from "./home/AreasExpertise";
import DetailedInfo from "./home/DetailedInfo";
//import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Menu isDark />
      <main>
        <MainInfo />
        <AreasExpertise />
        <DetailedInfo />
      </main>
    </div>
  );
}
