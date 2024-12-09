"use client";

import { Button } from "@/app/components/button";
import { CMSIcon } from "@/app/components/cms-icon";
import { RichText } from "@/app/components/rich-text";
import { TechBadge } from "@/app/components/tech-badge";
import type { HomePageInfo } from "@/app/types/page-info";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import { techBadgeAnimation } from "@/app/lib/animations";

type HeroSectionProps = {
  homeInfo: HomePageInfo;
};

export const HeroSection = ({ homeInfo }: HeroSectionProps) => {
  const handleContact = () => {
    const contactSession = document.querySelector("#contact");

    if (contactSession) {
      contactSession.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="flex w-full flex-col justify-end bg-hero-image bg-cover bg-center bg-no-repeat py-32 pb-10 sm:pb-32 lg:h-[700px] lg:pb-[110px]">
      <div className="container flex flex-col-reverse items-start justify-between lg:flex-row">
        <motion.div
          className="w-full lg:max-w-[530px]"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-sky-400">Olá, meu nome é</p>
          <h2 className="mt-2 text-4xl font-medium">Gabriel Catarin</h2>

          <div className="my-6 text-sm text-gray-400 sm:text-base">
            <RichText content={homeInfo.introduction.raw} />
          </div>

          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {homeInfo.introTechnologies.map((tech, index) => (
              <TechBadge
                name={tech.name}
                key={`intro-tech-${tech.name}`}
                {...techBadgeAnimation}
                transition={{ duration: 0.2, delay: index * 0.1 }}
              />
            ))}
          </div>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-5 lg:mt-10">
            <Button className="w-max shadow-button" onClick={handleContact}>
              Entre em contato
              <HiArrowNarrowRight size={18} />
            </Button>

            <div className="flex h-20 items-center gap-3 text-2xl text-gray-600">
              {homeInfo.socials.map((social, index) => (
                <a
                  href={social.url}
                  key={`contact-${index}`}
                  target="_blank"
                  className="transition-colors hover:text-gray-100"
                  rel="noreferrer"
                >
                  <CMSIcon icon={social.iconSvg} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 200, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 200, scale: 0.5 }}
          transition={{ duration: 0.5 }}
          className="origin-center"
        >
          <Image
            width={420}
            height={404}
            src={homeInfo.profilePicture.url}
            alt="Foto de perfil do Gabriel Dias"
            className="mb-6 h-[300px] w-[300px] rounded-lg object-cover shadow-2xl lg:mb-0 lg:h-[404px] lg:w-[420px]"
          />
        </motion.div>
      </div>
    </section>
  );
};
