import type { ReactNode } from "react";
import { BsSearch } from "react-icons/bs";
import { TbHandFinger } from "react-icons/tb";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
interface Items {
  icon: ReactNode;
  title: string;
  description: string;
}
const items: Items[] = [
  {
    icon: <BsSearch />,
    title: "Search Apartment",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.",
  },
  {
    icon: <TbHandFinger />,
    title: "Select Apartment",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.",
  },
  {
    icon: <IoIosCheckmarkCircleOutline />,
    title: "Confirm Apartment",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.",
  },
];
export default items;
