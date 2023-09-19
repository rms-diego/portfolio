import { ProjectsCards } from "@/components/ProjectCards";
import styles from "./styles.module.scss";
import axios from "axios";

type ReposType = {
  owner: string;
  repo: string;
  link: string;
  description: string;
  image: string;
  website: string;
  language: string;
  languageColor: string;
  stars: number;
  forks: number;
};

export default async function Projetos() {
  const { data: repos } = await axios.get<ReposType[]>(
    "https://gh-pinned-repos.egoist.dev/?username=rms-diego"
  );

  return (
    <main className={styles.mainContainer}>
      <section className={styles.contentContainer}>
        {repos.map((project, index) => (
          <ProjectsCards
            key={index}
            alt="react"
            title={project.repo}
            imageLink={project.image}
            repoLink={project.link}
          />
        ))}
      </section>
    </main>
  );
}
