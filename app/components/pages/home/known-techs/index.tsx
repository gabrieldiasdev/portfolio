"use client";

import { SectionTitle } from "@/app/components/section-title";
import { KnownTech } from "./known-tech";
import type { KnownTech as IKnownTech } from "@/app/types/projects";
import { motion } from "framer-motion";

type KnownTechsProps = {
  techs: IKnownTech[];
};

export const KnownTechs = ({ techs }: KnownTechsProps) => {
  return (
    <section className="container py-16">
      <SectionTitle title="Conhecimentos" subtitle="competências" />

      <div className="mt-[60px] grid w-full grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3">
        {techs.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.15, delay: index * 0.1 }}
          >
            <KnownTech tech={tech} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
