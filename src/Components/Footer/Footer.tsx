import styles from "./Footer.module.css";
import { IoLogoTwitter } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerDiv1}>
        <div className={styles.div1}>
          <img className={styles.logo} src="/Task_4/images/logo.png" alt="" />
          <div className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
            tempus felis vitae sit est quisque.
          </div>
        </div>
        <div className={styles.div2}>
          <div className={styles.title}>Service</div>
          <div className={styles.item}>Payment & Tax</div>
          <div className={styles.item}>Features</div>
          <div className={styles.item}>View Booking</div>
          <div className={styles.item}>Support</div>
        </div>
        <div className={styles.div3}>
          <div className={styles.title}>About</div>
          <div className={styles.item}>About us</div>
          <div className={styles.item}>News</div>
          <div className={styles.item}>Pricing</div>
          <div className={styles.item}>New Property</div>
        </div>
        <div className={styles.div4}>
          <div className={styles.title}>Our Location</div>
          <div className={styles.item}>
            2972 Westheimer Rd. Santa Ana, Illinois 85486
          </div>
          <div className={styles.div5}>
            <div className={styles.footerIcon}>
              <IoLogoTwitter />
            </div>
            <div className={styles.footerIcon}>
              <FaFacebookF />
            </div>
            <div className={styles.footerIcon}>
              <FaLinkedinIn />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.footerDiv2}>
        <div>Copyright 2024 flora. All Rights Reserved</div>
        <div className={styles.div6}>
          <div>Terms & Conditions</div>
          <div>Privacy Policy</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
