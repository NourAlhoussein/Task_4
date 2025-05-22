import styles from "./DreamHome.module.css";
function DreamHome() {
  return (
    <div className={styles.container}>
      <div className={styles.main}></div>
      <div className={styles.mainBlur}></div>
      <div className={styles.content}>
        <div className={styles.title}>Find Dream Home</div>
        <div className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing eli
        </div>
      </div>
    </div>
  );
}

export default DreamHome;
