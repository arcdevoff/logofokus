"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface SocialsMenuProps {
  showMessengers: boolean;
  setShowMessengers: React.Dispatch<React.SetStateAction<boolean>>;
}

const SocialsMenu: React.FC<SocialsMenuProps> = ({
  showMessengers,
  setShowMessengers,
}) => {
  return (
    <>
      <div className="fixed bottom-20 lg:bottom-29 lg:right-16.5 right-4.5 z-[99] flex flex-col items-end">
        <AnimatePresence>
          {showMessengers && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="mb-3 flex flex-col gap-2.5"
            >
              <Link
                href="viber://chat/?number=%2B375293906842"
                target="_blank"
                aria-label="Viber"
              >
                <Image
                  src="/images/viber-logo-circle.png"
                  width={512}
                  height={512}
                  className="size-12.5"
                  alt="Viber"
                />
              </Link>

              <Link
                href="https://api.whatsapp.com/send/?phone=375293906842&text&type=phone_number&app_absent=0"
                target="_blank"
                aria-label="WhatsApp"
              >
                <Image
                  src="/images/whatsapp-logo-circle.png"
                  width={512}
                  height={512}
                  className="size-12.5"
                  alt="WhatsApp"
                />
              </Link>

              <Link
                href="https://www.instagram.com/logoped.irynaostrovskaya/"
                target="_blank"
                aria-label="Instagram"
              >
                <Image
                  src="/images/instagram-logo-circle.png"
                  width={512}
                  height={512}
                  className="size-12.5"
                  alt="Instagram"
                />
              </Link>

              <Link
                href="https://t.me/irinaos1918"
                target="_blank"
                aria-label="Telegram"
              >
                <Image
                  src="/images/telegram-logo-circle.png"
                  width={512}
                  height={512}
                  className="size-12.5"
                  alt="Telegram"
                />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.button
        onBlur={() => setShowMessengers(false)}
        onClick={() => setShowMessengers((prev) => !prev)}
        whileTap={{ scale: 0.9 }}
        animate={{
          backgroundColor: showMessengers ? "#ffffff" : "#f991db",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`z-40 fixed bottom-3 lg:bottom-13 right-3 lg:right-15 flex justify-center items-center w-15 h-15 shadow-[0px_0px_6px_5px_rgba(152,152,152,0.2)]  rounded-full transition-all duration-300 ${
          showMessengers ? "text-pinkCustom" : "text-white"
        }`}
        aria-label="Открыть чат"
      >
        <AnimatePresence mode="wait">
          {showMessengers ? (
            <motion.svg
              key="close"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </motion.svg>
          ) : (
            <motion.svg
              key="chat"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              role="presentation"
              width="35"
              height="32"
              viewBox="0 0 35 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.2667 12.6981H23.3667M11.2667 16.4717H23.3667M4.8104 23.5777C2.4311 21.1909 1 18.1215 1 14.7736C1 7.16679 8.38723 1 17.5 1C26.6128 1 34 7.16679 34 14.7736C34 22.3804 26.6128 28.5472 17.5 28.5472C15.6278 28.5472 13.8286 28.2868 12.1511 27.8072L12 27.7925L5.03333 31V23.8219L4.8104 23.5777Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
};

export default SocialsMenu;
