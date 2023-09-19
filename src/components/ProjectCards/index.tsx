import Image from "next/image";
import styles from "./styles.module.scss";
import Link from "next/link";

type Props = {
  title: string;
  imageLink: string;
  alt: string;
  repoLink: string;
};

export function ProjectsCards({ title, imageLink, alt, repoLink }: Props) {
  return (
    <div className={styles.card}>
      <p>{title}</p>
      <Image src={imageLink} alt={alt} width={250} height={150} />
      <Link href={repoLink} target="_blank">
        Link
      </Link>
    </div>
  );
}
