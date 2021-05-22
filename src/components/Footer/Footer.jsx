import React from "react";
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'

 const Footer = () => (
    <footer className={styles.footer}>
      <p>Design & code with <FontAwesomeIcon className="icon" color="#E65150;"icon={faHeart} /> by <a href="https://github.com/Pawid-prianto27"><span>pawid</span></a></p>
    </footer>
  );
  
  export default Footer;
