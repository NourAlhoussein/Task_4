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
      { photoUrl: "/images/image1.jpg" },
      { photoUrl: "/images/image2.jpg" },
      { photoUrl: "/images/image3.jpg" },
    ],
  },
  {
    category: "Commercial Property",
    images: [
      { photoUrl: "/images/image3.jpg" },
      { photoUrl: "/images/image2.jpg" },
      { photoUrl: "/images/image1.jpg" },
    ],
  },
  {
    category: "Agriculture Property",
    images: [
      { photoUrl: "/images/image2.jpg" },
      { photoUrl: "/images/image3.jpg" },
      { photoUrl: "/images/image2.jpg" },
    ],
  },
  {
    category: "Industrial Property",
    images: [
      { photoUrl: "/images/image1.jpg" },
      { photoUrl: "/images/image2.jpg" },
      { photoUrl: "/images/image1.jpg" },
    ],
  },
];

export default items;
