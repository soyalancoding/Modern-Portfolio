import { twMerge } from "tailwind-merge";
import CountUpModule from "react-countup";

// react-countup is CJS: depending on interop the default import may be the module object
const CountUp: typeof CountUpModule =
  (CountUpModule as unknown as { default?: typeof CountUpModule }).default ??
  CountUpModule;

function HomeStats() {
  const stats = [
    { text: "Años de experiencia", value: 3 },
    { text: "Proyectos completados", value: 15 },
    { text: "Tecnologías de completo dominio", value: 15 },
    { text: "Colaboraciones con diferentes empresas", value: 8 },
  ];

  return (
    <>
      <section className="mt-6 mb-8 bg-white px-[30px] py-[30px] lg:mt-20 lg:mb-16 xl:px-[220px] dark:bg-neutral-950">
        <div className="container mx-auto">
          <div className="mx-auto flex max-w-[80vw] flex-wrap gap-6 lg:max-w-none">
            {stats.map((stat, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-1 flex-col lg:justify-start"
                >
                  <p className="font-montserrat text-base font-bold text-gray-600 md:text-lg lg:text-xl dark:text-white">
                    Más de
                  </p>

                  <div className="flex items-center justify-center gap-6 lg:justify-start">
                    <CountUp
                      end={stat.value}
                      duration={4}
                      delay={1}
                      className="font-montserrat bg-gradient-to-r from-sky-600 to-yellow-400 bg-clip-text text-2xl font-bold text-transparent md:text-4xl lg:text-5xl"
                    />
                    <p
                      className={twMerge(
                        "font-roboto text-black dark:text-white",
                        stat.text.length < 15
                          ? "max-w-[100px]"
                          : "max-w-[150px]",
                      )}
                    >
                      {stat.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeStats;
