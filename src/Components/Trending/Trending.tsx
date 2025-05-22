import TitleSection from "../TitleSection/TitleSection";
import styles from "./Trending.module.css";
import items from "../../Data/Trending";
import TrendingComponent from "../TrendingComponent/TrendingComponent";

function Trending() {
  return (
    <div className={styles.container}>
      <TitleSection
        title="Most Trending"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing eli"
      />
      <div className={styles.cards}>
        {items?.map((card, index) => {
          return <TrendingComponent card={card} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Trending;
