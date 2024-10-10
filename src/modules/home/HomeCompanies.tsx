import { useState } from "react";
// Components
import AlanTitle from "@/shared/components/AlanTitle";
import AlanCard from "@/shared/components/AlanCard";
// MagicUI
import Marquee from "@/shared/magicui/Marquee";
// Json
import companiesJson from "@/config/companies.json";

function HomeCompanies() {
  const [companies] = useState(companiesJson);
  const firstRow = companies.slice(0, companies.length / 2);
  const secondRow = companies.slice(companies.length / 2);

  return (
    <>
      <div className="flex flex-col gap-3 px-[30px] py-[30px] xl:px-[220px]">
        <div className="grid justify-items-center">
          <AlanTitle type="title" color="black" size="xxlarge" weight="bold">
            Empresas con las que he trabajado.
          </AlanTitle>
        </div>

        <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((company) => (
              <AlanCard key={company.name} {...company} />
            ))}
          </Marquee>

          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((company) => (
              <AlanCard key={company.name} {...company} />
            ))}
          </Marquee>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-white"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-white"></div>
        </div>
      </div>
    </>
  );
}

export default HomeCompanies;
