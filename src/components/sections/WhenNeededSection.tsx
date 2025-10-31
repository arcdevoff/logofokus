import Image from "next/image";

export default function WhenNeedLogopedSection() {
  return (
    <section
      className="mt-15 lg:mt-28 relative"
      aria-labelledby="when-need-logoped-title"
    >
      <h2
        id="when-need-logoped-title"
        className="text-[32px]/12 sm:text-[42px]/17 font-bold text-blue-950"
      >
        Когда ребенку{" "}
        <span className="text-lime-500">
          нужен <br /> логопед
        </span>
      </h2>

      <main className="mt-5 lg:mt-10 max-w-165">
        <p>
          Невнятная речь, при которой ребенок не выговаривает определенные
          звуки, заменяет их другими, переставляет местами слоги или
          недоговаривает окончания слов.
        </p>

        <p className="mt-4 font-bold text-blue-950">
          Искаженные звуки воспринимаются ребенком как нормальные.
        </p>

        <p className="mt-4">
          <strong className="text-amber-300 font-semibold">
            Возможные причины:
          </strong>{" "}
          дислалия, дизартрия, ринолалия.
        </p>
      </main>

      <ul className="grid grid-cols-[1fr] lg:grid-cols-[1fr_1fr_1fr] gap-5 mt-10 text-[15px]">
        {[
          {
            title: "Общее недоразвитие речи (ОНР)",
            text: `Нарушено формирование всех речевых аспектов.
                    Недостаточный словарный запас для определенного возраста, отсутствие фразовой речи, общение жестами вместо слов.
                    Возможные нарушения: алалия, общее недоразвитие речи, осложненное дизартрией или ринололией, нерезко-выраженное общее недоразвитие речи.`,
          },
          {
            title: "Дислексия",
            text: `Трудности в овладении навыками чтения, проявляющиеся в замедленном, послоговом или побуквенном чтении. Ребенок часто додумывает написанное, меняет слова и переставляет их местами, а также не понимает смысл прочитанного.`,
          },
          {
            title: "Дисграфия",
            text: `Нарушения письма, выражающиеся в замене и пропуске букв, искажении структуры слова, а также в слитном или раздельном написании слов в предложении.`,
          },
        ].map((item, i) => (
          <li
            key={i}
            className="flex items-start bg-white px-6 py-7 rounded-4xl gap-4 shadow-[0px_0px_6px_5px_rgba(152,152,152,0.2)]"
          >
            <Image
              src="/images/icons/pointer.png"
              width={30}
              height={30}
              alt="указатель"
            />
            <article>
              <h3 className="font-bold">{item.title}</h3>
              <p>{item.text}</p>
            </article>
          </li>
        ))}
      </ul>

      <Image
        className="z-[-1] absolute right-[-170] top-22 rotate-75 opacity-20"
        src="/images/circle-logo.png"
        width={600}
        height={600}
        quality={100}
        alt="логотип"
      />
    </section>
  );
}
