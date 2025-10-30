"use client";

import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const reviews = [
  {
    name: "Александр",
    text: `Нашей дочке 7 лет и ей очень нравится игровой стиль занятий. Не успевает устать за время занятия даже после школы и проделанного домашнего задания. Через 4 месяца регулярных занятий был получен желаемый результат, теперь умеем выговаривать звук "Р", а параллельно с этим и другие звуки. Также заметили, что уроки с логопедом положительно сказываются на учебном процессе в школе.`,
  },
  {
    name: "Елена",
    text: `Мой девятилетний сын занимается с Ириной на протяжении нескольких месяцев и мы уже видим результат занятий. Обратились с трудностями в произношении шипящих звуков и звука "р". После того, как звуки были поставлены, сын стал сам обращать внимание на слова с проблемными звуками, пытается себя контролировать и говорить правильно. Будем продолжать работу дальше.`,
  },
  {
    name: "Алена",
    text: `Очень рады, что попробовали онлайн формат занятий. С особенными детками это оптимальный вариант, чтобы не подвергать ребенка лишний раз стрессу. Также благодарим логопеда Ирину Островскую за терпение, внимательность и профессионализм. Благодаря тому, что преподаватель относится к ребенку с любовью и терпением, сын ждет каждое занятие и с урока уходит в хорошем настроении.`,
  },
];

const ReviewsSection = () => {
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
      id="reviews"
      className="relative mt-22 lg:mt-32 bg-white"
      aria-labelledby="reviews-title"
    >
      <h2
        id="reviews-title"
        className="text-[34px]/13 lg:text-[43px]/17 font-bold text-right mr-0 lg:mr-10"
      >
        <span className="text-blue-950">Отзывы</span>{" "}
        <span className="text-fuchsia-500/60">наших учеников</span>
      </h2>

      <Image
        quality={100}
        src="/images/decor-1.png"
        width={200}
        height={200}
        alt="декоративный элемент"
        className="absolute w-[50px] lg:w-[65px] top-0 left-0 lg:left-[-80px]"
      />

      <Image
        src="/images/icons/star.svg"
        width={45}
        height={45}
        className="absolute top-14 lg:top-0 left-25 lg:left-35 opacity-10"
        alt="звезда"
      />

      <div className="mt-17 max-w-3xl mx-auto flex items-center">
        <div className="overflow-hidden" ref={emblaRef}>
          <ul className="flex">
            {reviews.map((r, i) => (
              <li key={i} className="min-w-full px-9 lg:px-6">
                <article className="text-left">
                  <p className="text-[14px] lg:text-[17px] mb-4 font-medium">
                    “{r.text}”
                  </p>
                  <p
                    className="font-semibold text-amber-300"
                    aria-label="Автор отзыва"
                  >
                    {r.name}
                  </p>
                </article>
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={scrollPrev}
          className="absolute left-0 hover:opacity-75"
          aria-label="Предыдущий отзыв"
        >
          <IconChevronLeft className="size-7 lg:size-12" strokeWidth={0.4} />
        </button>

        <button
          onClick={scrollNext}
          className="absolute right-0 hover:opacity-75"
          aria-label="Следующий отзыв"
        >
          <IconChevronRight className="size-7 lg:size-12" strokeWidth={0.4} />
        </button>
      </div>

      <nav
        className="flex justify-center gap-2 mt-8"
        aria-label="Навигация по отзывам"
      >
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-2 h-2 rounded-full ${
              index === selectedIndex ? "bg-stone-900" : "bg-stone-500"
            } transition`}
            aria-label={`Перейти к отзыву ${index + 1}`}
            aria-current={index === selectedIndex ? "true" : "false"}
          />
        ))}
      </nav>
    </section>
  );
};

export default ReviewsSection;
