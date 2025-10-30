import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative mt-12 lg:mt-32 pb-10 overflow-hidden">
      <div className="grid grid-cols-[1fr] lg:grid-cols-[1fr_0.45fr]">
        <div className="mt-5 break-words">
          <div className="text-[30px]/12 lg:text-[50px]/17 font-bold mr-10">
            Не нашли своего <span className="text-pinkCustom">вопроса?</span>
            <br />
            <span className="text-pinkCustom">Спрашивайте,</span> и мы ответим
          </div>

          <nav
            aria-label="Социальные сети"
            className="my-12 flex items-center gap-7 lg:gap-14"
          >
            <Link
              href="https://www.instagram.com/logoped.irynaostrovskaya/"
              target="_blank"
              aria-label="Instagram"
            >
              <Image
                className="max-w-15 lg:max-w-full"
                quality={100}
                src="/images/instagram-logo.webp"
                width={100}
                height={100}
                alt="Instagram"
              />
            </Link>

            <Link
              href="https://api.whatsapp.com/send/?phone=375293906842&text&type=phone_number&app_absent=0"
              target="_blank"
              aria-label="WhatsApp"
            >
              <Image
                className="max-w-19 lg:max-w-full"
                quality={100}
                src="/images/whatsapp-logo.png"
                width={120}
                height={120}
                alt="WhatsApp"
              />
            </Link>

            <Link
              href="https://t.me/irinaos1918"
              target="_blank"
              aria-label="Telegram"
            >
              <Image
                className="max-w-16 lg:max-w-full"
                quality={100}
                src="/images/telegram-logo.webp"
                width={100}
                height={100}
                alt="Telegram"
              />
            </Link>

            <Link
              href="viber://chat/?number=%2B375%2029%20390%2068%2042"
              target="_blank"
              aria-label="Viber"
            >
              <Image
                className="max-w-17 lg:max-w-full"
                quality={100}
                src="/images/viber-logo.webp"
                width={110}
                height={110}
                alt="Viber"
              />
            </Link>
          </nav>
        </div>

        <Image
          src="/images/footer-image.png"
          width={500}
          height={500}
          quality={100}
          className="-z-1 w-100 lg:w-full"
          alt="footer image"
        />

        <Image
          className="z-[-1] absolute right-[-170] bottom-60 lg:bottom-0 rotate-75 opacity-20"
          src="/images/circle-logo.png"
          width={600}
          height={600}
          quality={100}
          alt="decorative logo"
        />
      </div>

      <nav
        aria-label="Документы и политика конфиденциальности"
        className="flex flex-wrap items-center text-lg gap-5 underline font-medium"
      >
        <Link
          href="https://docs.google.com/document/d/1jQRRKy-nzJxIRdysy-jH6TG7PZAFd-ji8M7wunObxwY/edit?usp=sharing"
          target="_blank"
        >
          Условия
        </Link>
        <Link
          href="https://docs.google.com/document/d/1jQRRKy-nzJxIRdysy-jH6TG7PZAFd-ji8M7wunObxwY/edit?usp=sharing"
          target="_blank"
        >
          Публичной оферты
        </Link>
        <Link href="https://logofokus.com/privecy-police" target="_blank">
          Политика конфиденциальности
        </Link>
      </nav>

      <address className="text-lg font-medium not-italic mt-8">
        <p className="text-lime-500">Островская Ирина Николаевна</p>
        <p>УНП МА 4837613</p>
        <p>ИМНС 716</p>
        <p className="mt-4">
          Телефон:{" "}
          <Link
            className="text-amber-300 font-bold underline"
            href="tel:+375293906842"
          >
            +375 29 390 68 42
          </Link>
        </p>
        <p>
          Email:{" "}
          <Link
            className="text-amber-300 font-bold underline"
            href="mailto:ostrowskayairina@gmail.com"
          >
            ostrowskayairina@gmail.com
          </Link>
        </p>
      </address>
    </footer>
  );
};

export default Footer;
