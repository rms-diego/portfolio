import styles from "./styles.module.scss";
import { StackCard } from "@/components/stackCard";

import html from "@/assets/html.svg";
import css from "@/assets/css.svg";
import sass from "@/assets/sass.svg";
import next from "@/assets/nextjs.svg";
import node from "@/assets/nodejs.svg";

export default function Techs() {
  return (
    <main className={styles.mainContainer}>
      <h2>Tecnologias</h2>
      <div className={styles.stacksContainer}>
        <StackCard imageRef={html} stackName="HTML 5" />

        <StackCard imageRef={css} stackName="CSS 4" />

        <StackCard imageRef={sass} stackName="SASS" />

        <StackCard imageRef={next} stackName="Next.js" />

        <StackCard imageRef={node} stackName="Node.js" />
      </div>
    </main>
  );
}
