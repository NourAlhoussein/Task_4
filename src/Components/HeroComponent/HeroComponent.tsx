import styles from "./HeroComponent.module.css";
import items from "../../Data/Hero";
function HeroComponent() {
  return (
    <div className={styles.hero}>
      <div className={styles.contentDiv}>
        <div className={styles.title}>
          Discover a place you will love to live
        </div>
        <div className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
          tempus felis vitae sit est quisque.
        </div>
        <div className={styles.items}>
          {items?.map((item, index) => {
            return (
              <div key={index} className={styles.item}>
                <div className={styles.icon}>{item.icon}</div>
                <div className={styles.itemDiv2}>
                  <div className={styles.itemType}>{item.type}</div>
                  <div className={styles.itemContent}>{item.content}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.imgDiv}>
        <img src="/images/hero.png" alt="" />
      </div>
    </div>
  );
}

export default HeroComponent;
