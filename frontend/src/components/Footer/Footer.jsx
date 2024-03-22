import styles from "./Footer.module.css";
import socailMediaImg from "../../assets/social.svg";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.top}>
        <p>Gallons</p>
        <span>Enhance the visualization</span>
        <div>
          <img
            src={socailMediaImg}
            className={styles.socialImg}
            alt="social media Sample images"
          />
        </div>
      </div>
      <div className={styles.bottom}>
        <p>Copyright 2023 Gallons AI Private Limited. All rights reserved.</p>
        <div className={styles.links}>
          <p>Privacy Policy</p>
          <p> | </p>
          <p>Terms of Service</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
