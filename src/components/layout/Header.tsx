"use client";
import { useEffect, useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed w-full z-[100] flex items-center justify-between px-2 sm:px-10 py-3 mx-auto transition-all duration-300 backdrop-blur-sm ${
          scrolled ? "bg-white" : "bg-white/50"
        } ${isMenuOpen && "!bg-stone-200"}`}
      >
        <Link href="/" aria-label="На главную">
          <Image
            src="/images/logo.png"
            width={450}
            height={450}
            quality={100}
            alt="Logo"
            className="h-auto w-[270px] sm:w-[285px]"
          />
        </Link>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="relative w-10 h-10 flex items-center justify-center"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
        >
          <AnimatePresence mode="wait">
            {isMenuOpen ? (
              <motion.div
                key="close"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute"
              >
                <IconX size={32} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 10, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute"
              >
                <IconMenu2 size={32} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </header>

      <AnimatePresence>
        {isMenuOpen && <Menu onClose={() => setIsMenuOpen(false)} />}
      </AnimatePresence>
    </>
  );
};

export default Header;
