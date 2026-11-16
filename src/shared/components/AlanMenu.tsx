import { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
// Components
import AlanAnchor from "@/shared/components/AlanAnchor";
import AlanToggleTheme from "@/shared/components/AlanToggleTheme";
// Json
import { menu } from "@/config/menu.json";

function AlanMenu({ openMenu }: { openMenu: boolean }) {
  const [menuJson] = useState(menu);
  const [openMenuState, setOpenMenuState] = useState(openMenu);

  useEffect(() => {
    if (openMenu) {
      setOpenMenuState(true);
    } else if (!openMenu) {
      setOpenMenuState(false);
    }
  }, [openMenu]);

  return (
    <>
      <div
        className={twMerge(
          "fixed top-0 left-0 z-10 mx-auto w-full transform bg-white/90 px-[30px] py-[30px] backdrop-blur-sm transition-all duration-500 ease-in-out xl:px-[220px] dark:bg-neutral-950/80",
          openMenuState ? "translate-y-20" : "-translate-y-full",
        )}
      >
        {menuJson !== null
          ? menuJson.map((item) => (
              <div key={item.name} className="mb-3">
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

        <div className="flex justify-start">
          <AlanToggleTheme />
        </div>
      </div>
    </>
  );
}

export default AlanMenu;
