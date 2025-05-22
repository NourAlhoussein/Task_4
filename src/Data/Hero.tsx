import type { ReactNode } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { CgDollar } from "react-icons/cg";
import { IoHome } from "react-icons/io5";
interface Items {
  icon: ReactNode;
  type: string;
  content: string;
}
const items: Items[] = [
  { icon: <FaLocationDot />, type: "Location", content: "Ahmedabad, India" },
  { icon: <CgDollar />, type: "Price", content: "$1000 - $10,000" },
  { icon: <IoHome />, type: "Type of Property", content: "Apartment" },
];

export default items;
