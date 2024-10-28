import RootLayout from "../layout";
import styles from "./testpage.module.css";
import Menu from "@/components/Menu";

const Page = () => {
  return (
    <>
      <Menu isDark />
      <div>g2111111</div>
    </>
  );
};

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const theme = "dark";
//   return {
//     props: { theme },
//   };
// };

export default Page;
