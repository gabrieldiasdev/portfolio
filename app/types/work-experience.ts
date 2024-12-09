import type { KnownTech } from "./projects";
import type { RichTextContent } from "@graphcms/rich-text-types";

export type WorkExperience = {
  companyName: string;
  companyUrl: string;
  companyLogo: {
    url: string;
  };
  role: string;
  startDate: string;
  endDate: string;
  technologies: KnownTech[];
  description: {
    raw: RichTextContent;
  };
};
