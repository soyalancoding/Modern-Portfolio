import { useContext } from "react";
import { useNavigate } from "react-router-dom";
// Framer Motion
import { motion } from "framer-motion";
// Components
import AlanTitle from "@/shared/components/AlanTitle";
import AlanText from "@/shared/components/AlanText";
import AlanSpan from "@/shared/components/AlanSpan";
import AlanButton from "@/shared/components/AlanButton";
import AlanLazyLoad from "@/shared/components/AlanLazyLoad";
// helpers
import { handleDownload } from "@/shared/helpers/handleDownload";
// Context
import { ThemeContext } from "@/shared/contexts/ThemeContext";

function HomeMain() {
  const navigate = useNavigate();

  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    throw new Error("AlanToggleTheme must be used within a ThemeProvider");
  }

  const { theme } = themeContext;

  function onHandleContact() {
    navigate("/contact");
  }

  function onHandleDownload() {
    handleDownload();
  }

  return (
    <>
      <div className="mb-10 flex flex-col gap-10 bg-white px-[30px] py-[30px] lg:flex-row xl:px-[220px] dark:bg-neutral-950">
        <div className="order-2 grid content-center lg:order-1">
          <AlanTitle
            type="title"
            color="default"
            size="xxxxlarge"
            weight="bold"
          >
            Hablar es barato.
          </AlanTitle>

          <AlanTitle type="title" color="black" size="xxxxlarge" weight="bold">
            Muéstrame el código.
          </AlanTitle>

          <div className="mt-5 mb-7">
            <AlanText type="text" color="gray" weight="default">
              ¡Hola! soy{" "}
              <AlanSpan weight="bold" color="grayDark">
                Alan
              </AlanSpan>
              , un{" "}
              <AlanSpan weight="bold" color="grayDark">
                Software Solutions Development
              </AlanSpan>{" "}
              con experiencia en desarrollo web. Especializado en{" "}
              <AlanSpan weight="bold" color="grayDark">
                automatización y despliegue continuo
              </AlanSpan>
              , combinando habilidades de{" "}
              <AlanSpan weight="bold" color="grayDark">
                DevOps y desarrollo web
              </AlanSpan>{" "}
              para crear soluciones eficientes y escalables. 💡
            </AlanText>
          </div>

          <div className="flex flex-row gap-4">
            <AlanButton clickButton={() => onHandleContact()}>
              <AlanText type="text" color="white" weight="default">
                Contáctame
              </AlanText>
            </AlanButton>

            <AlanButton clickButton={() => onHandleDownload()}>
              <AlanText type="text" color="white" weight="default">
                Descargar CV
              </AlanText>
            </AlanButton>
          </div>
        </div>

        <div className="relative order-1 flex h-full w-full items-center justify-center lg:order-2">
          <div className="absolute w-[250px] lg:w-[450px]">
            <AlanLazyLoad
              src="/images/profile.webp"
              alt="AlanCoding Perfil"
              className="w-[250px] rounded-full lg:w-[450px]"
            />
          </div>

          <motion.svg
            className="m-3 w-[300px] lg:w-[500px]"
            fill="transparent"
            viewBox="0 0 506 506"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.circle
              cx="253"
              cy="253"
              r="250"
              stroke={
                theme === "light" ? "rgb(2, 132, 199)" : "rgb(250, 204, 21)"
              }
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ strokeDasharray: "24 10 0 0" }}
              animate={{
                strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                rotate: [120, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.svg>
        </div>
      </div>
    </>
  );
}

export default HomeMain;
