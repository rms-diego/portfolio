import styles from "./home.module.scss";

export default function Home() {
  return (
    <main className={styles.mainContainer}>
      <h2>
        Sou um <span>Desenvolvedor fullstack</span> especializado no{" "}
        <span>Back end.</span>
      </h2>
    </main>
  );
}
