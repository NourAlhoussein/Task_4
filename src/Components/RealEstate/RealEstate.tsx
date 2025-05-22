import styles from "./RealEstate.module.css";
import items from "../../Data/RealEstate";
import TitleSection from "../TitleSection/TitleSection";
import RealEstateComponent from "../RealEstateComponent/RealEstateComponent";
import { useState } from "react";
function RealEstate() {
  const [activeCategory, setActiveCategory] = useState<string>(
    "Residential Property"
  );
  const activeCategoryFunction = (category: string) => {
    setActiveCategory(category);
  };
  return (
    <div className={styles.container}>
      <TitleSection
        title="Best Real Estate Deals"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing eli"
      />
      <div className={styles.subContainer}>
        <div className={styles.categoryDiv}>
          {items?.map((item, index) => {
            return (
              <div
                key={index}
                className={`${styles.category} ${
                  item.category === activeCategory ? styles.activeCategory : ""
                }`}
                onClick={() => activeCategoryFunction(item.category)}
              >
                {item.category}
              </div>
            );
          })}
        </div>
        <div>
          {items?.map((item, index) => {
            if (activeCategory === item.category) {
              return <RealEstateComponent item={item} key={index} />;
            }
          })}
        </div>{" "}
      </div>
    </div>
  );
}

export default RealEstate;
