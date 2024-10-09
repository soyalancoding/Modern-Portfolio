import { useState, useEffect } from "react";
// Components
import AlanLazyLoad from "./AlanLazyLoad";
import AlanAnchor from "./AlanAnchor";
import AlanMenu from "./AlanMenu";
// Icons
import { FaBars, FaChevronUp } from "react-icons/fa";
// Json
import { menu } from "./../../config/menu.json";

function AlanHeader() {
  const [header, setHeader] = useState<{ name: string; link: string }[]>([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    setHeader(menu);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <>
      <header className="z-20 bg-white px-[30px] py-[20px] xl:px-[220px]">
        <div className="grid grid-cols-2 gap-8">
          <a href="/" className="max-w-fit">
            <AlanLazyLoad
              src="/images/logos/alancoding-logotipo-black.webp"
              alt="AlanCoding Logotipo"
              className="w-[80px] lg:w-[110px]"
            />
          </a>

          {windowWidth >= 820 ? (
            <div className="flex items-center justify-end gap-6">
              {header !== null
                ? header.map((item) => (
                    <div key={item.name}>
                      <AlanAnchor
                        type="anchor"
                        color="black"
                        size="xlarge"
                        weight="bold"
                        href={item.link}
                      >
                        {item.name}
                      </AlanAnchor>
                    </div>
                  ))
                : null}
            </div>
          ) : (
            <div className="flex items-center justify-end gap-6">
              {openMenu === false ? (
                <FaBars
                  className="text-2xl"
                  onClick={() => setOpenMenu(true)}
                />
              ) : (
                <FaChevronUp
                  className="text-2xl"
                  onClick={() => setOpenMenu(false)}
                />
              )}
            </div>
          )}
        </div>
      </header>

      <AlanMenu openMenu={openMenu} />
    </>
  );
}

export default AlanHeader;
