import { Metadata } from 'next';
import styles from './home.module.scss';

export const metadata: Metadata = {
  title: 'Home',
};

export default function Home() {
  return (
    <main className={styles.mainContainer}>
      <h2 className="animate__animated animate__backInDown">
        Sou um <span>Desenvolvedor fullstack</span>
      </h2>
    </main>
  );
}
