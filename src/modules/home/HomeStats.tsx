import CountUp from "react-countup";
// Icons

function HomeStats() {
  const stats = [
    { text: "Años de experiencia", value: 3 },
    { text: "Proyectos completados", value: 15 },
    { text: "Tecnologías de completo dominio", value: 15 },
    { text: "Colaboraciones con diferentes empresas", value: 8 },
  ];

  return (
    <>
      <section className="mb-8 mt-6 px-[30px] py-[30px] lg:mb-16 lg:mt-20 xl:px-[220px]">
        <div className="container mx-auto">
          <div className="mx-auto flex max-w-[80vw] flex-wrap gap-6 lg:max-w-none">
            {stats.map((stat, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-1 flex-col lg:justify-start"
                >
                  <p className="font-montserrat text-base font-bold text-gray-600 md:text-lg lg:text-xl">
                    Más de
                  </p>

                  <div className="flex items-center justify-center gap-6 lg:justify-start">
                    <CountUp
                      end={stat.value}
                      duration={4}
                      delay={1}
                      className="bg-gradient-to-r from-sky-400 to-amber-500 bg-clip-text font-montserrat text-2xl font-bold text-transparent md:text-4xl lg:text-5xl"
                    />
                    <p
                      className={`${stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} font-roboto`}
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
