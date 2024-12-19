import { useNavigate } from "react-router-dom";
// Components
import AlanTitle from "@/shared/components/AlanTitle";
import AlanText from "@/shared/components/AlanText";
import AlanLazyLoad from "@/shared/components/AlanLazyLoad";
import AlanButton from "@/shared/components/AlanButton";

function HomeProjects() {
  const navigate = useNavigate();

  function onHandleProjects() {
    navigate("/projects");
  }

  return (
    <>
      <div className="flex flex-col gap-3 px-[30px] py-[30px] xl:px-[220px]">
        <div className="grid justify-items-center">
          <AlanTitle type="title" color="black" size="xxlarge" weight="bold">
            Proyectos.
          </AlanTitle>
        </div>

        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <div className="grid gap-4 sm:mt-2 lg:grid-cols-3 lg:grid-rows-2">
            <a
              href="https://alancoding-crossy-road.vercel.app/"
              target="_blank"
              className="relative cursor-pointer duration-100 hover:scale-105 hover:bg-sky-600/[.1] dark:hover:bg-yellow-400/[.1] lg:row-span-2"
            >
              <div className="absolute inset-px rounded-lg bg-sky-600/[.01] dark:bg-yellow-400/[.01] lg:rounded-l-[2rem]"></div>

              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                  <AlanTitle
                    type="title"
                    color="black"
                    size="medium"
                    weight="bold"
                  >
                    Crossy Road Game
                  </AlanTitle>

                  <div className="mt-2 max-w-lg">
                    <AlanText
                      type="text"
                      color="black"
                      weight="default"
                      size="small"
                    >
                      Desarrollé Crossy Road, un emocionante juego creado con
                      Three.js que ofrece renders en 3D directamente en el
                      navegador web.
                    </AlanText>
                  </div>
                </div>

                <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                  <div className="absolute inset-x-10 bottom-0 top-6 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                    <AlanLazyLoad
                      className="size-full object-cover object-top"
                      src="images/home/crossy-road.webp"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-sky-600/[.6] dark:ring-yellow-400/[.6] lg:rounded-l-[2rem]"></div>
            </a>

            <a
              href="https://snack.expo.dev/@alanmgg/crypto-market"
              target="_blank"
              className="relative cursor-pointer duration-100 hover:scale-105 hover:bg-sky-600/[.1] dark:hover:bg-yellow-400/[.1] max-lg:row-start-1"
            >
              <div className="absolute inset-px rounded-lg bg-sky-600/[.01] dark:bg-yellow-400/[.01] max-lg:rounded-t-[2rem]"></div>

              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <AlanTitle
                    type="title"
                    color="black"
                    size="medium"
                    weight="bold"
                  >
                    Crypto Market
                  </AlanTitle>

                  <div className="mt-2 max-w-lg">
                    <AlanText
                      type="text"
                      color="black"
                      weight="default"
                      size="small"
                    >
                      Aplicación móvil construida con React Native, que ofrece a
                      los usuarios información en tiempo real sobre el valor de
                      todas las criptomonedas.
                    </AlanText>
                  </div>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                  <AlanLazyLoad
                    className="w-full max-lg:max-w-xs"
                    src="images/home/crypto-market.webp"
                    alt=""
                  />
                </div>
              </div>

              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-sky-600/[.6] dark:ring-yellow-400/[.6] max-lg:rounded-t-[2rem]"></div>
            </a>

            <a
              href="https://www.figma.com/file/Qqkt0eyEPcdFn3Esv9XiDZ/Basic-Look?type=design&node-id=2-2&mode=design"
              target="_blank"
              className="relative cursor-pointer duration-100 hover:scale-105 hover:bg-sky-600/[.1] dark:hover:bg-yellow-400/[.1] max-lg:row-start-3 lg:col-start-2 lg:row-start-2"
            >
              <div className="absolute inset-px rounded-lg bg-sky-600/[.01] dark:bg-yellow-400/[.01]"></div>

              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <AlanTitle
                    type="title"
                    color="black"
                    size="medium"
                    weight="bold"
                  >
                    Basic Look
                  </AlanTitle>

                  <div className="mt-2">
                    <AlanText
                      type="text"
                      color="black"
                      weight="default"
                      size="small"
                    >
                      Diseñé la interfaz de usuario en Figma para una aplicación
                      móvil destinada a la tienda de ropa Basic Look.
                    </AlanText>
                  </div>
                </div>

                <div className="flex flex-1 items-center justify-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
                  <AlanLazyLoad
                    className="mt-2 h-[min(158px,40cqw)]"
                    src="images/home/basic-look.webp"
                    alt=""
                  />
                </div>
              </div>

              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-sky-600/[.6] dark:ring-yellow-400/[.6]"></div>
            </a>

            <a
              href="https://alancoding-macos.vercel.app/"
              target="_blank"
              className="relative cursor-pointer duration-100 hover:scale-105 hover:bg-sky-600/[.1] dark:hover:bg-yellow-400/[.1] lg:row-span-2"
            >
              <div className="absolute inset-px rounded-lg bg-sky-600/[.01] dark:bg-yellow-400/[.01] max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>

              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                  <AlanTitle
                    type="title"
                    color="black"
                    size="medium"
                    weight="bold"
                  >
                    Clon de MacOS Big Sur
                  </AlanTitle>

                  <div className="mt-2">
                    <AlanText
                      type="text"
                      color="black"
                      weight="default"
                      size="small"
                    >
                      Esta réplica meticulosa se basó en MacOS Big Sur y
                      funcionó como mi portafolio personal en su momento.
                    </AlanText>
                  </div>
                </div>

                <div className="relative min-h-[20rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm lg:min-h-[30rem]">
                  <div className="absolute bottom-0 left-10 top-6 overflow-hidden">
                    <AlanLazyLoad
                      className="size-full min-h-[20rem] object-cover object-top lg:min-h-[30rem]"
                      src="images/home/macos.webp"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-sky-600/[.6] dark:ring-yellow-400/[.6] max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            </a>
          </div>
        </div>

        <div className="mb-10 mt-4 flex justify-center">
          <AlanButton clickButton={() => onHandleProjects()}>
            <AlanText type="text" color="white" weight="default">
              Ver más
            </AlanText>
          </AlanButton>
        </div>
      </div>
    </>
  );
}

export default HomeProjects;
