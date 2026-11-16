import { useEffect } from "react";
// Components
import AboutMain from "@/modules/about/AboutMain";
import AboutExperience from "@/modules/about/AboutExperience";
import AboutEducation from "@/modules/about/AboutEducation";
import AboutTechnologies from "@/modules/about/AboutTechnologies";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 gap-0 bg-white px-[30px] py-[30px] xl:grid-cols-6 xl:gap-8 xl:px-[220px] dark:bg-neutral-950">
        <div className="col-span-2">
          <AboutMain />
        </div>

        <div className="col-span-4 mb-6">
          <AboutExperience />
          <AboutEducation />
          <AboutTechnologies />
        </div>
      </div>
    </>
  );
}

export default About;
