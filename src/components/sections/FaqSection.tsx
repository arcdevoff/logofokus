"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconPlus } from "@tabler/icons-react";

type Question = {
  question: string;
  answer: string;
};

const FAQItem = ({ question, answer }: Question) => {
  const [open, setOpen] = useState(false);

  return (
    <article className="border-b border-gray-200 py-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left"
        aria-expanded={open}
        aria-controls={question}
      >
        <span className="text-lg font-medium">{question}</span>

        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="bg-amber-300 p-2 rounded-full"
        >
          <IconPlus size={27} stroke={2} className="text-white" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            id={question}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden mt-2"
          >
            <div
              className="text-gray-600"
              dangerouslySetInnerHTML={{ __html: answer }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
};

const FaqSection = () => {
  const faqs: Question[] = [
    {
      question: "В каком возрасте идти к логопеду?",
      answer:
        "Раньше было принято приводить ребенка к логопеду ближе к школе в лет 5. На самом деле к этому возрасту речь ребенка должны быть сформирована, а наиболее благоприятным периодом для развития речи является возраст с 3-3,5 года.",
    },
    {
      question: "Какой должна быть речь ребенка в 3 года?",
      answer:
        "К трем годам ребенок должен уметь говорить фразами. Отсутствие фразовой речи говорит о задержке речевого развития, а отсутствие слов в 3 года – о грубых нарушениях общего развития. Конечно, жесты дополняют нашу речь, но если малыш используют их вместо речи, не пытайтесь понимать его без слов, а обратитесь к специалисту.",
    },
    {
      question: "Для чего мы приглашаем на бесплатную диагностику?",
      answer:
        "Если Вы заметили трудности с произношением слов, нарушения в развитии речи, советуем продиагностироваться у специалиста. На первом занятии логопед проводит обследование ребенка, определяет дефекты в произношении звуков, пытается оценить его словарный запас и связность речи, умение обобщать, логически мыслить, запоминать.",
    },
    {
      question:
        "Почему ребенку билингву лучше начать изучение русского языка с занятий с логопедом?",
      answer:
        "Диагностика с логопедом позволит определить уровень владения русским языком (лексика, грамматика, связная речь, звукопроношение), а также наличие или отсутствие речевых нарушений. Когда ребенок отдан во власть случайной смеси языковых систем и детское двуязычие развивается стихийно, в развитии речи ребенка могут возникнуть различного рода затруднения.",
    },
    {
      question: "Как часто нужно заниматься с логопедом?",
      answer:
        "Периодичность занятий устанавливает логопед в зависимости от нарушений, Вашего запроса и занятости. Как правило, требуется не менее 2ух занятий в неделю для достижения поставленных целей и выполнение рекомендаций логопеда.",
    },
    {
      question:
        "Логопед дает домашнее задание или достаточно двух занятий в неделю?",
      answer: `
        Да, логопед всегда дает материалы для закрепления результата. По возможности их нужно выполнять регулярно. Задания могут быть следующей направленности:
        <br />
        <ul class="list-disc ml-7">
          <li>на развитие направленной струи воздуха</li>
          <li>на развитие мышц артикуляционного аппарата</li>
          <li>на автоматизацию звуков</li>
          <li>лексико-грамматические игры и упражнения</li>
          <li>на развитие связной речи</li>
          <li>на развитие мелкой моторики</li>
        </ul>
      `,
    },
  ];

  return (
    <section aria-labelledby="faq-title" className="mt-20 lg:mt-32 p-4">
      <h2
        id="faq-title"
        className="text-[34px]/12 sm:text-[38px]/13 lg:text-[49px]/17 font-bold text-lime-500 text-center mb-10"
      >
        Вопрос-ответ
      </h2>

      {faqs.map((faq, i) => (
        <FAQItem key={i} {...faq} />
      ))}
    </section>
  );
};

export default FaqSection;
