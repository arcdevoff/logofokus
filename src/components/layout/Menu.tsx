"use client";

import { motion, AnimatePresence } from "framer-motion";

type MenuItem = {
  text: string;
  href: string;
};

type MenuProps = {
  onClose: () => void;
};

const Menu = ({ onClose }: MenuProps) => {
  const items: MenuItem[] = [
    { text: "Цены", href: "#price" },
    { text: "Обо мне", href: "#about" },
    { text: "Отзывы", href: "#reviews" },
    { text: "Бесплатная диагностика", href: "#free" },
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed inset-0 bg-stone-200 flex flex-col items-center justify-center z-50"
      >
        <div className="flex flex-col text-center text-2xl gap-6">
          {items.map((item, i) => (
            <motion.a
              key={item.href}
              href={item.href}
              onClick={onClose}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.3 }}
              className="hover:text-stone-500 transition-colors"
            >
              {item.text}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Menu;
