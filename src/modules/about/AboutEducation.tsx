import { useState } from "react";
// Components
import AlanTitle from "@/shared/components/AlanTitle";
import AlanText from "@/shared/components/AlanText";
// Json
import educationJson from "@/config/education.json";

function AboutEducation() {
  const [education] = useState(educationJson);

  return (
    <>
      <div className="mt-6">
        <AlanTitle type="title" color="black" size="xxxlarge" weight="bold">
          Educación
        </AlanTitle>

        <div className="mt-6">
          <ol className="relative border-s border-sky-600 dark:border-yellow-400">
            {education.map((item) => (
              <li
                key={item.grade}
                className="ms-4 mb-5 rounded-lg border border-sky-600/[.6] bg-sky-600/[.01] p-3 dark:border-yellow-400/[.6] dark:bg-yellow-400/[.01]"
              >
                <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-neutral-400 bg-sky-600 dark:bg-yellow-400"></div>

                <AlanTitle type="title" color="blue" size="small" weight="bold">
                  {item.date}
                </AlanTitle>

                <AlanTitle
                  className="mt-1"
                  type="title"
                  color="black"
                  size="small"
                  weight="bold"
                >
                  {item.grade}
                </AlanTitle>

                <AlanText
                  className="mt-2"
                  type="text"
                  color="black"
                  weight="default"
                  size="small"
                >
                  {item.description}
                </AlanText>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}

export default AboutEducation;
