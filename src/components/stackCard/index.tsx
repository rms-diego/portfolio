import Image from "next/image";
import styles from "./styles.module.scss";

type StackCardProps = {
  imageRef: string;
  stackName: string;
};

export function StackCard({ imageRef, stackName }: StackCardProps) {
  return (
    <div className={styles.cardContainer}>
      <p>{stackName}</p>
      <Image src={imageRef} alt={stackName} height={150} width={150} />
    </div>
  );
}
