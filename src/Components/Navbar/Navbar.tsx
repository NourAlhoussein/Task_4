import styles from "./Navbar.module.css";
import items from "../../Data/Navbar";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router";
function Navbar() {
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);
  const openSmallMenu = () => {
    setIsMenuActive(!isMenuActive);
  };
  return (
    <nav className={styles.navbar}>
      <div>
        <img className={styles.logoStyle} src="/Task_4/images/logo.png" alt="logo" />
      </div>
      <div className={styles.items}>
        {items?.map((item, index) => {
          return (
            <NavLink
              key={index}
              to={item.link}
              className={({ isActive, isPending }) => {
                return isPending
                  ? styles.largPending
                  : isActive
                  ? styles.largActive
                  : styles.largPending;
              }}
            >
              {item.name}
            </NavLink>
          );
        })}
      </div>
      <div className={styles.loginDiv}>
        <button className={styles.login}>Login</button>
      </div>
      <div className={styles.menuIcon} onClick={openSmallMenu}>
        <IoMenu />
      </div>
      <div
        className={`${styles.smallNav}  ${
          isMenuActive === true ? styles.menuOpen : styles.menuClose
        }`}
      >
        <div className={styles.headerSmallNav}>
          <img src="/Task_4/images/logo.png" width="60px" alt="logo" />
          <IoMdClose onClick={openSmallMenu} />
        </div>
        <div className={styles.smallItemsDiv}>
          {items?.map((item, index) => {
            return (
              <NavLink
                key={index}
                to={item.link}
                className={({ isActive, isPending }) => {
                  return isPending
                    ? styles.pending
                    : isActive
                    ? styles.active
                    : styles.pending;
                }}
              >
                {item.name}
              </NavLink>
            );
          })}
        </div>
        <div className={styles.loginSmallDiv}>
          <button className={styles.loginSmall}>Login</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
