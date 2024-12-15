// Components
import AlanCardGlobal from "@/shared/components/AlanCardGlobal";
import AlanTitle from "@/shared/components/AlanTitle";
import AlanText from "@/shared/components/AlanText";
import AlanSpan from "@/shared/components/AlanSpan";
import AlanLazyLoad from "@/shared/components/AlanLazyLoad";
// Icons
import {
  FaMapMarkerAlt,
  FaCoffee,
  FaLinkedin,
  FaBehance,
  FaGithub,
} from "react-icons/fa";

function ProjectsMain() {
  return (
    <>
      <div>
        <AlanTitle type="title" color="black" size="xxxlarge" weight="bold">
          Acerca de mí
        </AlanTitle>

        <div className="mt-6">
          <AlanCardGlobal>
            <div className="grid justify-items-center">
              <AlanLazyLoad
                src="/images/memoji/memoji-computer.svg"
                alt="Memoji computadora"
                className="mb-6 w-[250px]"
              />
            </div>

            <AlanText type="text" color="black" weight="default" size="small">
              <AlanSpan weight="bold" color="blue" size="small">
                ¡Hola! Soy Alan
              </AlanSpan>
              , un apasionado{" "}
              <AlanSpan weight="bold" color="blue" size="small">
                Software Solutions Development
              </AlanSpan>{" "}
              con sólida experiencia en{" "}
              <AlanSpan weight="bold" color="blue" size="small">
                desarrollo web
              </AlanSpan>
              . Mi enfoque profesional está en combinar habilidades de
              desarrollo y operaciones (DevOps) para impulsar la{" "}
              <AlanSpan weight="bold" color="blue" size="small">
                automatización
              </AlanSpan>{" "}
              y el{" "}
              <AlanSpan weight="bold" color="blue" size="small">
                despliegue continuo
              </AlanSpan>
              , permitiendo que las aplicaciones lleguen más rápido al usuario
              final y con mayor{" "}
              <AlanSpan weight="bold" color="blue" size="small">
                calidad
              </AlanSpan>
              .
            </AlanText>

            <AlanText
              className="mt-4"
              type="text"
              color="black"
              weight="default"
              size="small"
            >
              Estoy especializado en{" "}
              <AlanSpan weight="bold" color="blue" size="small">
                diseñar y desarrollar
              </AlanSpan>{" "}
              soluciones eficientes y escalables, asegurándome de que los
              sistemas no solo funcionen, sino que{" "}
              <AlanSpan weight="bold" color="blue" size="small">
                crezcan
              </AlanSpan>{" "}
              junto con las necesidades del negocio. Mi conocimiento abarca
              desde la integración de{" "}
              <AlanSpan weight="bold" color="blue" size="small">
                herramientas de automatización
              </AlanSpan>{" "}
              hasta la implementación de{" "}
              <AlanSpan weight="bold" color="blue" size="small">
                pipelines CI/CD robustos
              </AlanSpan>
              , asegurando entregas ágiles y seguras. 💡
            </AlanText>

            <div className="mt-6">
              <div className="flex flex-row items-center">
                <FaMapMarkerAlt className="mr-2 text-base" />

                <AlanText
                  type="text"
                  color="black"
                  weight="default"
                  size="xsmall"
                >
                  México, Ciudad de México
                </AlanText>
              </div>

              <div className="mt-2 flex flex-row items-center">
                <FaCoffee className="mr-2 text-base" />

                <AlanText
                  type="text"
                  color="black"
                  weight="default"
                  size="xsmall"
                >
                  BBVA México
                </AlanText>
              </div>
            </div>

            <div className="mt-6">
              <AlanTitle type="title" color="black" size="medium" weight="bold">
                Redes sociales
              </AlanTitle>

              <div className="mt-2 flex flex-row">
                <a
                  href="https://www.linkedin.com/in/alanmgg/"
                  target="_blank"
                  className="mr-3"
                >
                  <FaLinkedin className="text-lg hover:text-sky-400" />
                </a>

                <a
                  href="https://www.behance.net/alanmgg"
                  target="_blank"
                  className="mr-3"
                >
                  <FaBehance className="text-lg hover:text-sky-400" />
                </a>

                <a href="https://github.com/alanmgg" target="_blank">
                  <FaGithub className="text-lg hover:text-sky-400" />
                </a>
              </div>
            </div>
          </AlanCardGlobal>
        </div>
      </div>
    </>
  );
}

export default ProjectsMain;
