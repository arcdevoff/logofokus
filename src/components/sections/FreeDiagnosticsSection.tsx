"use client";
import Image from "next/image";
import Link from "next/link";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";

const FreeDiagnosticsSection = () => {
  const [value, setValue] = useState<string | undefined>();

  return (
    <section
      id="free"
      className="relative pt-40 lg:pt-62 section-wave"
      aria-labelledby="free-diagnostics-title"
    >
      <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-20">
        <div className="block lg:hidden text-center mb-2 text-[38px]/12 font-bold text-blue-950">
          <h2 id="free-diagnostics-title">
            Бесплатная <span className="text-amber-300">диагностика</span>
          </h2>
        </div>

        <Image
          className="rounded-2xl shadow-2xl w-70 lg:w-[400px] h-full"
          alt="Дети занимаются"
          src="/images/kids.jpg"
          width={400}
          height={400}
        />

        <Image
          src="/images/decor-2.png"
          width={70}
          height={70}
          alt="декоративный элемент"
          className="absolute hidden lg:block top-55 right-[-65px] rotate-180"
        />

        <div>
          <div className="hidden lg:block text-[45px]/17 font-bold text-blue-950">
            <h2>
              Бесплатная <span className="text-amber-300">диагностика</span>
            </h2>
          </div>

          <div>
            <p className="text-center lg:text-left my-4 text-xl lg:text-lg font-bold text-stone-800">
              Напишите нам
            </p>

            <div className="flex items-center gap-5 justify-center lg:justify-start">
              <Link
                href="https://www.instagram.com/logoped.irynaostrovskaya/"
                target="_blank"
                aria-label="Instagram"
              >
                <Image
                  quality={100}
                  src="/images/instagram-logo.webp"
                  width={55}
                  height={55}
                  alt="Instagram"
                />
              </Link>

              <Link
                href="https://api.whatsapp.com/send/?phone=375293906842&text&type=phone_number&app_absent=0"
                target="_blank"
                aria-label="WhatsApp"
              >
                <Image
                  quality={100}
                  src="/images/whatsapp-logo.png"
                  width={70}
                  height={70}
                  alt="WhatsApp"
                />
              </Link>

              <Link
                href="https://t.me/irinaos1918"
                target="_blank"
                aria-label="Telegram"
              >
                <Image
                  quality={100}
                  src="/images/telegram-logo.webp"
                  width={56}
                  height={56}
                  alt="Telegram"
                />
              </Link>

              <Link
                href="viber://chat/?number=%2B375%2029%20390%2068%2042"
                target="_blank"
                aria-label="Viber"
              >
                <Image
                  quality={100}
                  src="/images/viber-logo.webp"
                  width={62}
                  height={62}
                  alt="Viber"
                />
              </Link>
            </div>

            <p className="text-center lg:text-left my-4 text-xl lg:text-lg font-bold text-stone-800">
              Или оставьте заявку
            </p>

            <form className="mt-8 lg:mt-0 max-w-md">
              <label className="block">
                <p>Ваше имя</p>
                <input
                  className="py-3 px-5 border border-stone-900 w-full rounded-2xl bg-white focus:outline-none mt-1"
                  type="text"
                  id="name"
                  name="name"
                  required
                />
              </label>

              <label className="mt-4 block">
                <p>Телефон</p>
                <PhoneInput
                  international
                  defaultCountry="RU"
                  value={value}
                  onChange={setValue}
                  className="py-3 px-5 border border-stone-900 w-full rounded-2xl bg-white focus:outline-none mt-1"
                  required
                />
              </label>

              <label className="flex items-start gap-2 mt-6 text-sm text-stone-700">
                <input
                  type="checkbox"
                  required
                  className="mt-1 accent-stone-900 cursor-pointer"
                />
                <span>
                  Нажимая кнопку <strong>«Отправить»</strong>, вы соглашаетесь с{" "}
                  <Link
                    className="underline"
                    href="#"
                    aria-label="Политика конфиденциальности"
                  >
                    политикой конфиденциальности
                  </Link>
                  .
                </span>
              </label>

              <button
                type="submit"
                className="inline-block text-[15px] mt-6 bg-lime-500 px-8 py-3.5 rounded-full text-white font-semibold"
              >
                Записаться
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeDiagnosticsSection;
