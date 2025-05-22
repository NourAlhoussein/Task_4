import { useState } from "react";
import styles from "./HowItWorks.module.css";
import items from "../../Data/HowItWorks";
import HowItWorksComponent from "../HowItWorksComponent/HowItWorksComponent";
import TitleSection from "../TitleSection/TitleSection";
function HowItWorks() {
  const [cardActive, setCardActive] = useState<string>("Select Apartment");
  const setCardActiveFunction = (titleItem: string) => {
    setCardActive(titleItem);
  };
  return (
    <div className={styles.container}>
      <TitleSection
        title="How it Works"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing eli"
      />
      <div className={styles.cards}>
        {items?.map((item, index) => {
          return (
            <HowItWorksComponent
              key={index}
              item={item}
              cardActive={cardActive}
              setCardActiveFunction={setCardActiveFunction}
            />
          );
        })}
      </div>
    </div>
  );
}

export default HowItWorks;
