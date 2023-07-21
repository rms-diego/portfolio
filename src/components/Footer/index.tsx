import Link from "next/link";
import styles from "./style.module.scss";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

export function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <Link href="https://github.com/rms-diego" target="_blank">
        <FaGithub width={200} height={200} />
      </Link>

      <Link href="https://www.linkedin.com/in/diego-rbrito/" target="_blank">
        <FaLinkedin width={200} height={200} />
      </Link>

      <Link
        href="mailto:diegorbrito9@gmail.com?Subject=olaMundo"
        target="_blank"
      >
        <FaEnvelope width={200} height={200} />
      </Link>

      <Link href="tel:+55(71)993804648" target="_blank">
        <FaPhone width={200} height={200} />
      </Link>
    </footer>
  );
}
