"use client";
import {
  IconChevronLeft,
  IconChevronRight,
  IconCircleFilled,
  IconHeartFilled,
} from "@tabler/icons-react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const certificates = Array.from({ length: 8 }, (_, i) => i + 1);

const CreatorSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );
  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <section
      id="about"
      aria-labelledby="creator-title"
      className="relative mt-38 lg:mt-45"
    >
      <h2 id="creator-title" className="sr-only">
        Создатель LogoFokus
      </h2>

      <Image
        src="/images/icons/star.svg"
        width={53}
        height={53}
        className="absolute top-16 left-155 opacity-10"
        alt="декоративная звезда"
      />
      <IconCircleFilled
        width={19}
        height={19}
        className="absolute right-[-12] top-83 opacity-10"
        aria-hidden="true"
      />

      <div className="grid grid-cols-[1fr] lg:grid-cols-[0.62fr_0.5fr] xl:grid-cols-[0.55fr_0.4fr] lg:gap-10 xl:gap-25">
        <div>
          <h3 className="text-[38px]/13 lg:text-[46px]/17 font-bold text-blue-950">
            <span className="text-amber-300">Создатель </span>
            LogoFokus
          </h3>

          <div className="mt-7 text-[16px] sm:text-lg">
            <p>
              Впервые я столкнулась с проблемой речевого расстройства у детей в
              23 года, когда стала мамой.
              <br />У дочери выявили{" "}
              <span className="text-lime-500">стертую форму дизартрии</span>,
              для которой характерны нечеткая артикуляция, искажение звуков и
              невыразительная речь. С 3-х лет мы начали заниматься с логопедом.
              Я лично присутствовала на занятиях и видела, как раскрывается мой
              ребенок, приобретая возможность выражать свои мысли и общаться с
              окружающими.
            </p>

            <div className="block lg:hidden mx-auto w-[100%] sm:w-[80%] mt-9 relative">
              <Image
                className="w-full rounded-3xl shadow-2xl"
                src="/images/creator.jpg"
                width={400}
                height={400}
                alt="Ирина Островская"
              />

              <div className="text-center font-bold text-lg bg-white w-[95%] p-4 shadow-xl rounded-3xl left-1/2 transform -translate-x-1/2 relative bottom-[25px]">
                <p className="text-blue-950">
                  <span className="text-lime-500">Ирина Островская</span> –
                  Логопед-дефектолог высшей квалификационной категории
                </p>
                <p className="mt-2 text-pinkCustom">
                  20 лет в профессии, 15 лет в частной практике
                </p>
              </div>
            </div>

            <p className="flex gap-4 font-medium mt-5">
              <IconHeartFilled className="text-purple-400 w-6 h-6" />
              <span>
                В тот момент я поняла, что хочу делать счастливее детей и их
                родителей.
              </span>
            </p>

            <p className="flex gap-4 font-medium mt-5">
              <IconHeartFilled className="text-purple-400 w-6 h-6" />
              <div>
                <p>
                  <span className="text-lime-500 font-semibold">
                    Образование
                  </span>
                  : УО &quot;МГУ&quot; им. А.А. Кулешова
                </p>
                <p>
                  <span className="text-lime-500 font-semibold">
                    По специальности
                  </span>
                  : интегрированное обучение и воспитание
                </p>
                <p>
                  <span className="text-lime-500 font-semibold">
                    Квалификация
                  </span>
                  : учитель-дефектолог
                </p>
              </div>
            </p>

            <ul className="list-disc mt-8 ml-5">
              <li>
                C 2010 года работала в общеобразовательной школе в пункте
                коррекционно-педагогической помощи.
              </li>
              <li>С 2013 года веду частную логопедическую практику.</li>
              <li>С 2020 года в онлайн-логопедии.</li>
            </ul>

            <p className="mt-7 font-bold">
              Теперь я помогаю детям со всего мира сохранить и развить русскую
              речь, а русскоговорящим ученикам устранить речевые нарушения,
              чтобы быть успешными в учебе.
            </p>

            <button className="block lg:hidden mt-10 bg-lime-500 px-6 py-3.5 sm:px-7 sm:py-4 rounded-full text-white font-semibold">
              Присоединиться к команде
            </button>
          </div>
        </div>

        <div className="hidden lg:block relative text-center">
          <Image
            className="w-full rounded-3xl shadow-2xl"
            src="/images/creator.jpg"
            width={400}
            height={400}
            alt="Ирина Островская"
          />

          <div className="font-medium text-lg bg-white w-[95%] p-4 shadow-xl rounded-3xl left-1/2 transform -translate-x-1/2 absolute lg:top-57 xl:top-63">
            <p className="text-blue-950">
              <span className="text-lime-500">Ирина Островская</span> –
              Логопед-дефектолог высшей квалификационной категории
            </p>
            <p className="mt-2 text-pinkCustom">
              20 лет в профессии, 15 лет в частной практике
            </p>
          </div>

          <button className="inline-block mt-50 bg-lime-500 px-7 py-4 rounded-full text-white font-semibold">
            Присоединиться к команде
          </button>
        </div>
      </div>

      <div
        className="mt-25 max-w-full mx-auto flex items-center"
        aria-label="Сертификаты"
      >
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {certificates.map((i) => (
              <div
                key={i}
                className="flex-shrink-0 relative w-[350px] sm:w-[430px] aspect-[4/3] overflow-hidden flex items-center justify-center"
              >
                <Image
                  src={`/images/certificates/${i}.jpg`}
                  alt={`Сертификат ${i}`}
                  fill
                  className={`object-contain p-2 ${
                    selectedIndex + 1 !== i ? "opacity-40" : ""
                  }`}
                  quality={100}
                />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={scrollPrev}
          className="absolute bg-stone-200 rounded-full left-0 hover:opacity-75"
          aria-label="Предыдущий сертификат"
        >
          <IconChevronLeft size={40} strokeWidth={0.4} />
        </button>
        <button
          onClick={scrollNext}
          className="absolute bg-stone-200 right-0 rounded-full hover:opacity-75"
          aria-label="Следующий сертификат"
        >
          <IconChevronRight size={40} strokeWidth={0.4} />
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-5">
        {certificates.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-2 h-2 rounded-full ${
              index === selectedIndex ? "bg-stone-900" : "bg-stone-500"
            } transition`}
            aria-label={`Перейти к сертификату ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default CreatorSection;
