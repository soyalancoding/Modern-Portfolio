import { useNavigate } from "react-router-dom";
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
              ¡Hola! soy Alan, un Software Solutions Development con experiencia
              en desarrollo web. Especializado en automatización y despliegue
              continuo, combinando habilidades de DevOps y desarrollo web para
              crear soluciones eficientes y escalables. 💡
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

        <div className="order-1 flex h-full w-full justify-center lg:order-2 lg:justify-end">
          <AlanLazyLoad
            src="/images/profile.webp"
            alt="AlanCoding Perfil"
            className="w-[250px] rounded-full lg:w-[450px]"
          />
        </div>
      </div>
    </>
  );
}

export default HomeMain;
