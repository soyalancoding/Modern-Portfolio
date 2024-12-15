import { useState } from "react";
// Components
import AlanCardGlobal from "@/shared/components/AlanCardGlobal";
import AlanTitle from "@/shared/components/AlanTitle";
import AlanLazyLoad from "@/shared/components/AlanLazyLoad";
// Json
import technologiesJson from "@/config/technologies.json";

function AboutTechnologies() {
  const [technologies] = useState(technologiesJson);

  return (
    <>
      <div className="mt-6">
        <AlanTitle type="title" color="black" size="xxxlarge" weight="bold">
          Habilidades y tecnologías
        </AlanTitle>

        <div className="mt-6 grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-4">
          {technologies.map((item) => (
            <div className="mb-2">
              <AlanCardGlobal
                key={item.name}
                className="transform cursor-pointer transition duration-100 hover:scale-105 hover:bg-sky-400/[.1]"
              >
                <div className="flex h-6 items-center">
                  <AlanLazyLoad
                    src={"/images/technologies/" + item.image}
                    alt={item.name}
                    className="mr-3 h-7 w-7"
                  ></AlanLazyLoad>

                  <AlanTitle
                    type="title"
                    color="black"
                    size="small"
                    weight="bold"
                  >
                    {item.name}
                  </AlanTitle>
                </div>
              </AlanCardGlobal>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AboutTechnologies;
