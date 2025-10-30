import Image from "next/image";
import { IconHeartFilled, IconCircleFilled } from "@tabler/icons-react";

export default function BenefitsSection() {
  const benefits: [string, string][] = [
    [
      "book",
      "На уроках используются только современные учебные материалы и интерактивные игры",
    ],
    ["car", "Вы не тратите время на дорогу, пробки и другие неприятности"],
    [
      "thunderstorm",
      "Не придется отменять занятие из-за плохой погоды или легкой простуды",
    ],
    [
      "face",
      "Быстрая адаптация ребенка к логопеду, поскольку занятия проходят в привычной обстановке",
    ],
    [
      "filelock",
      "Расширенный доступ к квалифицированным специалистам независимо от места проживания",
    ],
    [
      "monitor",
      "Логопед-онлайн подходит для детей с особыми потребностями, такими как ДЦП и РАС",
    ],
  ];

  return (
    <section
      aria-labelledby="benefits-title"
      className="mt-45 sm:mt-32 relative"
    >
      <h2
        id="benefits-title"
        className="text-[38px]/13 lg:text-[49px]/17 font-bold text-blue-950"
      >
        Актуальная
        <br />
        <span className="text-lime-500">логопедия</span>
      </h2>

      <div
        className="absolute top-[-140px] left-0 sm:top-0 sm:left-100 lg:left-129 flex items-center justify-center"
        aria-hidden="true"
      >
        <Image
          src="/images/benefits.png"
          width={165}
          height={165}
          quality={100}
          alt=""
          className="spin-slow w-[135px] sm:w-[150px] lg:w-[165px]"
        />
        <IconHeartFilled
          className="absolute text-purple-400 size-7 sm:size-8"
          aria-hidden="true"
        />
      </div>

      <Image
        src="/images/decor-2.png"
        width={65}
        height={65}
        alt=""
        className="-z-1 absolute top-[-10%] sm:top-0 right-[0px] sm:right-[-65px] rotate-180"
        aria-hidden="true"
      />

      <ul className="mt-20 grid gap-10 grid-cols-[1fr] sm:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] font-medium">
        {benefits.map(([icon, text], i) => (
          <li key={i} className="flex items-start gap-4">
            <Image
              src={`/images/icons/${icon}.png`}
              width={30}
              height={30}
              alt={icon}
            />
            <span className="mt-[-6px]">{text}</span>
          </li>
        ))}
      </ul>

      <Image
        src="/images/icons/star.svg"
        width={45}
        height={45}
        className="absolute bottom-[-75px] left-[250px] lg:left-[-30px] opacity-10"
        alt=""
        aria-hidden="true"
      />
      <IconCircleFilled
        className="absolute right-10 lg:right-35 bottom-[-165px] opacity-10"
        aria-hidden="true"
      />
    </section>
  );
}
