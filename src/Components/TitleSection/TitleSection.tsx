import styles from "./TitleSection.module.css";
interface titleSectionProps {
  title: string;
  description: string;
}
function TitleSection({ title, description }: titleSectionProps) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
}

export default TitleSection;
