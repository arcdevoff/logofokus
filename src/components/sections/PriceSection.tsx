import Image from "next/image";
import Link from "next/link";

const plans = [
  {
    title: "Абонемент на 10 занятий",
    price: "12 € / 40 BYN / 1050 RUB",
    transform: "rotate(-6deg) translateY(-5px)",
  },
  {
    title: "Абонемент на 20 занятий",
    price: "11 € / 35 BYN / 950 RUB",
    extraText: "Экономия 20€",
    transform: "rotate(6deg) translateY(-5px)",
  },
  {
    title: "Абонемент на 40 занятий",
    price: "10 € / 33 BYN / 850 RUB",
    extraText: "Экономия 80€",
    transform: "rotate(-6deg) translateY(-5px)",
  },
];

const PriceSection = () => {
  return (
    <section
      id="price"
      className="relative mt-20 lg:mt-32"
      aria-labelledby="price-title"
    >
      <div className="grid grid-cols-[1fr_0.06fr] lg:grid-cols-[1fr_0.1fr_1fr] items-center gap-5 lg:gap-10 mt-5">
        <h2
          id="price-title"
          className="text-[32px]/11 sm:text-[38px]/13 lg:text-[51px]/17 font-bold text-blue-950"
        >
          Стоимость уроков <br />
          <span className="text-amber-300">и абонементов</span>
        </h2>

        <Image
          src="/images/icons/chevrons-right.svg"
          width={30}
          height={30}
          alt="chevrons-right"
        />

        <p className="text-lg font-medium">
          Продолжительность занятия 40 минут. Ребенок сохраняет интерес и
          внимание в течение этого времени.
        </p>
      </div>

      <Image
        src="/images/icons/star.svg"
        width={58}
        height={58}
        className="absolute top-38 left-87 opacity-8"
        alt="star"
      />

      <ul className="flex flex-wrap items-stretch mt-15 gap-10 justify-between">
        {plans.map((plan, index) => (
          <li
            key={index}
            className="relative border-1 border-stone-200 w-full mb-5 lg:mb-0 lg:w-72 p-6 pb-22 bg-white rounded-2xl text-center font-medium shadow-2xl"
          >
            <div
              className="absolute inset-0 bg-black/10 lg:bg-black/20 blur-[1px] rounded-3xl -z-10"
              style={{ transform: plan.transform }}
            ></div>

            <article>
              <h3 className="text-xl mb-4 text-blue-950 font-bold">
                {plan.title}
              </h3>
              <p>{plan.price}</p>
              <span className="text-amber-300 block text-right font-bold! mr-8">
                за урок
              </span>
              {plan.extraText && (
                <span className="block mt-2 text-pinkCustom text-[17px]">
                  {plan.extraText}
                </span>
              )}
            </article>

            <Link
              href="#free"
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-5 bg-lime-500 px-8 py-2.5 rounded-full text-white font-semibold text-[15px]"
            >
              Записаться
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PriceSection;
