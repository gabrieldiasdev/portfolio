import { PageIntroduction } from "../components/pages/projects/page-introduction";
import { ProjectsList } from "../components/pages/projects/projects-list";
import type { ProjectsPageData } from "../types/page-info";
import { fetchHygraphQuery } from "../utils/fetch-hygraph-query";

export const metadata = {
  title: "Projetos",
};

const getPageData = async (): Promise<ProjectsPageData> => {
  const query = `
    query ProjectsQuery {
      projects {
        shortDescription
        slug
        title
        thumbnail {
          url
        }
        technologies {
          name
        }
      }
    }
    `;

  const { data } = await fetchHygraphQuery<{ data: ProjectsPageData }>(
    query,
    1000 * 60 * 60 * 24, // 1 day
  );

  return data;
};

export default async function Projects() {
  const { projects } = await getPageData();

  return (
    <>
      <PageIntroduction />
      <ProjectsList projects={projects} />
    </>
  );
}
