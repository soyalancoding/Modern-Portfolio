import { useNavigate } from "react-router-dom";
// Framer Motion
import { motion } from "framer-motion";
// Components
import AlanTitle from "../../shared/components/AlanTitle";
import AlanText from "../../shared/components/AlanText";
import AlanButton from "../../shared/components/AlanButton";
import AlanLazyLoad from "../../shared/components/AlanLazyLoad";
// helpers
import { handleDownload } from "@/shared/helpers/handleDownload";

function HomeMain() {
  const navigate = useNavigate();

  function onHandleContact() {
    navigate("/contact");
  }

  function onHandleDownload() {
    handleDownload();
  }

  return (
    <>
      <div className="mb-10 flex flex-col gap-10 px-[30px] py-[30px] lg:flex-row xl:px-[220px]">
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

          <div className="mb-7 mt-5">
            <AlanText type="text" color="gray" weight="default">
              ¡Hola! soy <span className="font-bold text-gray-600">Alan</span>,
              un{" "}
              <span className="font-bold text-gray-600">
                Software Solutions Development
              </span>{" "}
              con experiencia en desarrollo web. Especializado en{" "}
              <span className="font-bold text-gray-600">
                automatización y despliegue continuo
              </span>
              , combinando habilidades de{" "}
              <span className="font-bold text-gray-600">
                DevOps y desarrollo web
              </span>{" "}
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
              stroke="rgb(56 189 248)"
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
