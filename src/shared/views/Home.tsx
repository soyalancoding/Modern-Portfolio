import { useEffect } from "react";
// Components
import HomeMain from "@/modules/home/HomeMain";
import HomeStats from "@/modules/home/HomeStats";
import HomeProjects from "@/modules/home/HomeProjects";
import HomeCompanies from "@/modules/home/HomeCompanies";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HomeMain />
      <HomeStats />
      <HomeProjects />
      <HomeCompanies />
    </>
  );
}

export default Home;
