interface NavbarItem {
  name: string;
  link: string;
}
const items: NavbarItem[] = [
  { name: "Home", link: "/" },
  { name: "About", link: "/About" },
  { name: "Services", link: "/Services" },
  { name: "New Property", link: "/New Property" },
  { name: "Contact", link: "/Contact" },
];
export default items;
