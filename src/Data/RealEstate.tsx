type Image = {
  photoUrl: string;
};
interface RealEstateItem {
  category: string;
  images: Image[];
}
const items: RealEstateItem[] = [
  {
    category: "Residential Property",
    images: [
      { photoUrl: "/Task_4/images/image1.jpg" },
      { photoUrl: "/Task_4/images/image2.jpg" },
      { photoUrl: "/Task_4/images/image3.jpg" },
    ],
  },
  {
    category: "Commercial Property",
    images: [
      { photoUrl: "/Task_4/images/image3.jpg" },
      { photoUrl: "/Task_4/images/image2.jpg" },
      { photoUrl: "/Task_4/images/image1.jpg" },
    ],
  },
  {
    category: "Agriculture Property",
    images: [
      { photoUrl: "/Task_4/images/image2.jpg" },
      { photoUrl: "/Task_4/images/image3.jpg" },
      { photoUrl: "/Task_4/images/image2.jpg" },
    ],
  },
  {
    category: "Industrial Property",
    images: [
      { photoUrl: "/Task_4/images/image1.jpg" },
      { photoUrl: "/Task_4/images/image2.jpg" },
      { photoUrl: "/Task_4/images/image1.jpg" },
    ],
  },
];

export default items;
