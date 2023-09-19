import { Metadata } from "next";

import styles from "./styles.module.scss";
import { StackCard } from "@/components/StackCard";

import html from "@/assets/html.svg";
import css from "@/assets/css.svg";
import sass from "@/assets/sass.svg";
import next from "@/assets/nextjs.svg";
import node from "@/assets/nodejs.svg";
import react from "@/assets/react.svg";

export const metadata: Metadata = {
  title: "Tecnologias",
};

export default function Techs() {
  return (
    <main
      className={`${styles.mainContainer} animate__animated animate__fadeInDown`}
    >
      <h2>Tecnologias</h2>
      <div className={styles.stacksContainer}>
        <StackCard imageRef={html} stackName="HTML" />

        <StackCard imageRef={css} stackName="Css" />

        <StackCard imageRef={sass} stackName="Sass" />

        <StackCard imageRef={react} stackName="React" />

        <StackCard imageRef={next} stackName="Next.js" />

        <StackCard imageRef={node} stackName="Node.js" />
      </div>
    </main>
  );
}
