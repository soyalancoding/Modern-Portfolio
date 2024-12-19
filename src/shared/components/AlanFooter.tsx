import { useState, useEffect } from "react";

// Components
import AlanTitle from "@/shared/components/AlanTitle";
import AlanText from "@/shared/components/AlanText";
import AlanAnchor from "@/shared/components/AlanAnchor";
import AlanLazyLoad from "@/shared/components/AlanLazyLoad";
// Json
import { menu, socials } from "@/config/menu.json";

function AlanFooter() {
  const [pathsJson, setPathsJson] = useState<{ name: string; link: string }[]>(
    [],
  );
  const [socialsJson, setSocialsJson] = useState<
    { name: string; link: string }[]
  >([]);

  useEffect(() => {
    setPathsJson(menu);
    setSocialsJson(socials);
  }, []);

  return (
    <>
      <footer className="mx-auto bg-black px-[30px] py-[50px] xl:px-[220px]">
        <div className="mb-10">
          <AlanTitle type="title" color="white" size="xxxxlarge" weight="bold">
            ¿Listo para hacer algo increíble?
          </AlanTitle>

          <AlanTitle
            type="title"
            color="default"
            size="xxxxlarge"
            weight="bold"
          >
            Trabajemos juntos. Contáctame.
          </AlanTitle>
        </div>

        <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <AlanLazyLoad
              src="/images/logos/alancoding-logotipo.webp"
              alt="AlanCoding Logotipo"
              className="w-[100px] md:w-[120px] lg:w-[150px]"
            />

            <AlanText type="text" color="gray">
              México, Ciudad de México.
            </AlanText>

            <AlanAnchor
              type="anchor"
              color="gray"
              href="mailto:alanfmorag@gmail.com"
            >
              alanfmorag@gmail.com
            </AlanAnchor>
          </div>

          <div className="grid grid-cols-2">
            <div className="grid content-between gap-y-1">
              {pathsJson !== null
                ? pathsJson.map((path) => (
                    <div key={path.name}>
                      <AlanAnchor type="anchor" color="white" href={path.link}>
                        {path.name}
                      </AlanAnchor>
                    </div>
                  ))
                : null}
            </div>

            <div className="grid content-between gap-y-1">
              {socialsJson !== null
                ? socialsJson.map((path) => (
                    <div key={path.name}>
                      <AlanAnchor
                        type="anchor"
                        color="white"
                        href={path.link}
                        target="_blank"
                      >
                        {path.name}
                      </AlanAnchor>
                    </div>
                  ))
                : null}
            </div>
          </div>
        </div>

        <AlanText type="text" color="white">
          © 2024. Alan Francisco Mora González.
        </AlanText>
      </footer>
    </>
  );
}

export default AlanFooter;
