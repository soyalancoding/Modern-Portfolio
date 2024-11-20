import { useNavigate } from "react-router-dom";
// Components
import AlanLazyLoad from "../components/AlanLazyLoad";
import AlanTitle from "../components/AlanTitle";
import AlanText from "../components/AlanText";
import AlanButton from "../components/AlanButton";

function NotFound() {
  const navigate = useNavigate();

  function onHandleHome() {
    navigate("/");
  }

  return (
    <>
      <div className="mb-10 flex flex-col gap-20 px-[30px] py-[20px] lg:flex-row xl:px-[220px]">
        <AlanLazyLoad
          className="w-[460px] md:w-[490px] lg:w-[500px]"
          src="images/not-found.webp"
          alt=""
        />

        <div className="flex flex-col justify-center">
          <AlanTitle
            type="title"
            color="default"
            size="xxxxlarge"
            weight="bold"
          >
            404
          </AlanTitle>

          <AlanTitle type="title" color="black" size="xxxlarge" weight="bold">
            ¡Ups! Parece que te perdiste.
          </AlanTitle>

          <AlanText type="text" color="black" size="medium" weight="default">
            La página que buscas no existe o ha sido movida.
          </AlanText>

          <div className="mt-5">
            <AlanButton clickButton={() => onHandleHome()}>
              <AlanText type="text" color="white" weight="default">
                Volver al inicio
              </AlanText>
            </AlanButton>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;
