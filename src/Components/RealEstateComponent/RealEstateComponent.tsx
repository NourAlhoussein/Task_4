import styles from "./RealEstateComponent.module.css";
type Image = {
  photoUrl: string;
}
interface Item {
  category: string;
  images: Image[];
}
interface RealEstateProps {
  item: Item;
}
function RealEstateComponent({ item }: RealEstateProps) {
  return (
    <div className={styles.images}>
      {item.images?.map((photo, index) => {
        return (
          <div className={styles.imageDiv} key={index}>
            <img src={photo.photoUrl} key={index} alt="" />
            <div className={styles.imgAdded}>
              <div className={styles.content1}>Featured</div>
              <div className={styles.content2}>3D</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default RealEstateComponent;
