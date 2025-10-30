import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="pb-0 md:pb-80 lg:pb-0 relative grid lg:grid-cols-[0.5fr_0.5fr] grid-cols-[1fr]"
      aria-labelledby="hero-title"
    >
      <div className="mt-7 sm:mt-12">
        <h1
          id="hero-title"
          className="xl:text-[50px]/20 pr-10 sm:pr-0 max-w-screen text-[33px]/12 lg:text-[35px]/12 md:text-[45px]/15 lg:text-[40px]/15 font-bold"
        >
          <span className="text-amber-300">Логопед онлайн для</span> <br />{" "}
          <span className="text-blue-950">детей от 3,5 лет</span>
        </h1>

        <ul className="list-disc xl:text-lg/9 pr-10 sm:pr-0 max-w-screen text-[14.5px]/6 md:text-lg/9 lg:text-sm/8 mt-5 ml-5 md:ml-6 text-blue-950 font-medium">
          <li>Диагностика речи и выявление речевых нарушений</li>
          <li>Исправление звукопроношения у детей с 3,5 лет</li>
          <li>Коррекция письменной и устной речи у школьников</li>
          <li>Развитие русской речи у детей билингвов</li>
          <li>Обучение чтению, скорочтению, письму</li>
        </ul>

        <Link
          href="#free"
          className="max-w-screen inline-block text-[16px] lg:text-[14px] xl:text-[16px] xl:px-6 xl:py-3.5 mt-6 bg-lime-500 px-5 py-3 rounded-full text-white font-semibold"
        >
          Бесплатная диагностика речи
        </Link>
      </div>

      <Image
        quality={100}
        className="absolute w-10.5 top-30 left-[-100px] hidden xl:block"
        src="/images/decor-1.png"
        width={200}
        height={200}
        alt="декоративный элемент"
      />

      <Image
        quality={100}
        src="/images/hero-image.png"
        width={1500}
        height={1500}
        alt="Дети занимаются с логопедом онлайн"
        className="hidden -z-1 w-[1000px] absolute left-[46%] top-[-90px] lg:block"
      />

      <Image
        quality={100}
        src="/images/hero-image-lg.png"
        width={1500}
        height={1500}
        alt="Логопед онлайн с детьми"
        className="hidden md:block -z-1 md:w-[750px] absolute -right-45 -top-28 lg:hidden"
      />

      <div className="md:hidden -z-1 lg:hidden bottom-10 relative w-150 h-120 overflow-hidden">
        <Image
          src="/images/hero-image-mob.png"
          alt="Дети занимаются онлайн с логопедом"
          quality={100}
          fill
          className="object-cover object-left -z-10 md:hidden"
        />
      </div>
    </section>
  );
}
