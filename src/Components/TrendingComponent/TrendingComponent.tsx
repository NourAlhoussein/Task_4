import styles from "./TrendingComponent.module.css";
import { CiLocationOn } from "react-icons/ci";
interface Card {
  photoUrl: string;
  price: number;
  title: string;
  location: string;
}
interface trendingProps {
  card: Card;
}
function TrendingComponent({ card }: trendingProps) {
  const backgroundImageStyle = {
    backgroundImage: `url(${card.photoUrl})`,
    backgroundSize: "cover",
    backgroundPositionX: "center",
    backgroundPositionY: "center",
    width: "100%",
    height: "243px",
    borderRadius: "10px",
    margin: "auto",
  };
  return (
    <div className={styles.card}>
      <div style={backgroundImageStyle}></div>
      <div className={styles.price}>${card.price}</div>
      <div className={styles.title}>{card.title}</div>
      <div className={styles.location}>
        <div className={styles.icon}>
          <CiLocationOn />
        </div>
        {card.location}
      </div>
    </div>
  );
}

export default TrendingComponent;
