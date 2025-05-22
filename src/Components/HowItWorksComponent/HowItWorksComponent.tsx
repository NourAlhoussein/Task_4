import styles from "./HowItWorksComponent.module.css";
import { BsHouse } from "react-icons/bs";
import type { ReactNode } from "react";
interface Item {
  icon: ReactNode;
  title: string;
  description: string;
}
interface ItemProp {
  item: Item;
  cardActive: string;
  setCardActiveFunction: (titleItem: string) => void;
}
function HowItWorksComponent({
  item,
  cardActive,
  setCardActiveFunction,
}: ItemProp) {
  return (
    <div
      className={`${styles.card} ${
        cardActive === item.title ? styles.activrCard : styles.card
      }`}
      onClick={() => setCardActiveFunction(item.title)}
    >
      <div className={styles.iconDiv}>
        <BsHouse className={styles.homeIcon} />
        <div className={styles.itemIcon}>{item.icon}</div>
      </div>
      <div className={styles.cardTitle}>{item.title}</div>
      <div className={styles.cardDescription}>{item.description}</div>
    </div>
  );
}

export default HowItWorksComponent;
