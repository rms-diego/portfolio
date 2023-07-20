import Image from "next/image";
import styles from "./styles.module.scss";

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
          I am a UI/UX designer who is passionate about creating beautiful and
          joyful digital experiences. Besides design, I love music, games and
          travelling.
        </p>
      </div>
    </main>
  );
}
