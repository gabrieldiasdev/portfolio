"use client";

import { motion } from "framer-motion";
import type { ComponentProps } from "react";

type TechBadgeProps = ComponentProps<typeof motion.span> & {
  name: string;
};

export const TechBadge = ({ name, ...props }: TechBadgeProps) => {
  return (
    <motion.span
      className="rounded-lg bg-sky-900/80 px-3 py-1 text-sm text-sky-400"
      {...props}
    >
      {name}
    </motion.span>
  );
};
