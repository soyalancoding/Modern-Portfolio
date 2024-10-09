import { useState, useEffect } from "react";

// Components
import AlanTitle from "./AlanTitle";
import AlanText from "./AlanText";
import AlanAnchor from "./AlanAnchor";
import AlanLazyLoad from "./AlanLazyLoad";
// Icons
import { FaCommentAlt } from "react-icons/fa";
// Json
import { paths, socials } from "./../../config/footer.json";

function AlanFooter() {
  const [pathsJson, setPathsJson] = useState(null);
  const [socialsJson, setSocialsJson] = useState(null);

  useEffect(() => {
    setPathsJson(paths);
    setSocialsJson(socials);
  }, []);

  return (
    <>
      <footer className="mx-auto bg-black px-[30px] py-[50px] lg:px-[180px]">
        <div className="mb-10">
          <AlanTitle type="title" color="white">
            ¿Listo para hacer algo increíble?
          </AlanTitle>

          <AlanTitle type="title" color="gradient">
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
              <div className="flex max-w-fit items-center gap-2">
                <FaCommentAlt />
                alanfmorag@gmail.com
              </div>
            </AlanAnchor>
          </div>

          <div className="grid grid-cols-2">
            <div className="grid content-between gap-y-1">
              {pathsJson !== null
                ? pathsJson.map((path) => (
                    <div key={path.name}>
                      <AlanAnchor type="anchor" color="white" href={path.path}>
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
                      <AlanAnchor type="anchor" color="white" href={path.path}>
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
