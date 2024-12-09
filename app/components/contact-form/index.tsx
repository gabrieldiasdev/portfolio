"use client";

import { HiArrowNarrowRight } from "react-icons/hi";
import { Button } from "../button";
import { SectionTitle } from "../section-title";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { fadeUpAnimation } from "@/app/lib/animations";

const contactFormSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  message: z.string().min(1).max(500),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export const ContactForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: any) => {
    try {
      await axios.post("/api/contact", data);
      toast.success("Mensagem enviada com sucesso!");
      reset();
    } catch {
      toast.error("Ocorreu um erro ao enviar a mensagem. Tente novamente.");
    }
  };

  return (
    <section
      id="contact"
      className="flex items-center justify-center bg-gray-950 px-6 py-16 md:py-32"
    >
      <div className="mx-auto w-full max-w-[420px]">
        <SectionTitle
          subtitle="contato"
          title="Vamos trabalhar juntos? Entre em contato"
          className="items-center text-center"
        />

        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-12 flex w-full flex-col gap-4"
          {...fadeUpAnimation}
        >
          <input
            type="text"
            placeholder="Nome"
            {...register("name")}
            className="h-14 w-full rounded-lg bg-gray-800 p-4 text-gray-50 ring-sky-600 placeholder:text-gray-400 focus:outline-none focus:ring-2"
          />
          <input
            type="email"
            placeholder="E-mail"
            {...register("email")}
            className="h-14 w-full rounded-lg bg-gray-800 p-4 text-gray-50 ring-sky-600 placeholder:text-gray-400 focus:outline-none focus:ring-2"
          />
          <textarea
            placeholder="Mensagem"
            maxLength={500}
            {...register("message")}
            className="h-[138px] w-full resize-none rounded-lg bg-gray-800 p-4 text-gray-50 ring-sky-600 placeholder:text-gray-400 focus:outline-none focus:ring-2"
          />

          <div className="mx-auto mt-6">
            <Button className="shadow-button" disabled={isSubmitting}>
              Enviar mensagem
              <HiArrowNarrowRight size={18} />
            </Button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};
