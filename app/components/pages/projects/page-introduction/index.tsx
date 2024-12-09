"use client";

import { Link } from "@/app/components/link";
import { SectionTitle } from "@/app/components/section-title";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { motion } from "framer-motion";

export const PageIntroduction = () => {
  return (
    <section className="flex h-[450px] w-full flex-col items-center justify-center bg-hero-image bg-cover bg-center bg-no-repeat px-2 lg:h-[630px]">
      <SectionTitle
        subtitle="projetos"
        title="Meus Projetos"
        className="items-center text-center [&>h3]:text-4xl"
      />

      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.6 }}
      >
        <p className="my-6 max-w-[640px] text-center text-sm text-gray-400 sm:text-base">
          Aqui você poderá ver alguns dos trabalhos que eu desenvolvi. Navegue à
          vontade e explore os projetos para ver como foram criados, as
          tecnologias utilizadas e as funcionalidades implementadas.
        </p>
        <Link href="/">
          <HiArrowNarrowLeft size={20} />
          Voltar para Home
        </Link>
      </motion.div>
    </section>
  );
};
