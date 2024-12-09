import { SectionTitle } from "@/app/components/section-title";
import { ExperienceItem } from "./experience-item";
import type { WorkExperience as IWorkExperiences } from "@/app/types/work-experience";

type WorkExperienceProps = {
  experiences: IWorkExperiences[];
};

export const WorkExperience = ({ experiences }: WorkExperienceProps) => {
  return (
    <section className="container flex flex-col gap-10 py-16 md:flex-row md:gap-4 lg:gap-16">
      <div className="max-w-[420px]">
        <SectionTitle
          subtitle="experiências"
          title="Experiência Profissional"
        />
        <p>
          Estou sempre aberto a novos desafios e projetos emocionantes. Vamos
          trabalhar juntos para criar soluções incríveis para sua empresa!
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {experiences.map((experience) => (
          <ExperienceItem
            key={`${experience.companyName}-${experience.role}`}
            experience={experience}
          />
        ))}
      </div>
    </section>
  );
};
