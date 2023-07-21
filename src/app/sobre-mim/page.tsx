import Image from "next/image";
import { Metadata } from "next";

import styles from "./styles.module.scss";

export const metadata: Metadata = {
  title: "Sobre mim",
};

export default function About() {
  return (
    <main className={styles.mainContainer}>
      <Image
        src="/foto-perfil.jpg"
        alt="Foto de perfil"
        width={250}
        height={250}
        className={styles.image}
      />

      <div className={styles.mainContainerContent}>
        <h2>Bem vindo</h2>

        <p>
          Sou desenvolvedor full stack, apaixonado por aprender e por
          tecnologia, estar procurando novos desafios são o que me motiva,
          principalmente se for necessário aprender algo novo para
          solucioná-los.
        </p>
      </div>
    </main>
  );
}
