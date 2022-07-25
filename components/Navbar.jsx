import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [activeMobileItem, setActiveMobileItem] = useState(null);
  const mobileMenuRef = useRef(null);
  const navbarRef = useRef([]);

  useEffect(() => {
    // console.log("my click event here ==> ", click);

    if (click) {
      // console.log("open mobile menu");
      mobileMenuRef.current.className = `${styles.navbarContainer} ${styles.activeMobileMenu}`;
    } else if (!click) {
      // console.log("close mobile menu");
      mobileMenuRef.current.className = `${styles.navbarContainer}`;
    }
  }, [click]);

  useEffect(() => {
    switch (activeMobileItem) {
      case "dashboard":
        navbarRef.current[1].classList.add(`${styles.active}`);
        navbarRef.current[0].classList.remove(`${styles.active}`);
        navbarRef.current[2].classList.remove(`${styles.active}`);
        console.log("switch to => ", navbarRef.current[2].classList);
        break;
      case "about":
        navbarRef.current[2].classList.add(`${styles.active}`);
        navbarRef.current[0].classList.remove(`${styles.active}`);
        navbarRef.current[1].classList.remove(`${styles.active}`);
        console.log("switch to => ", navbarRef.current[1].classList);
        break;
      default:
        // console.log("switch to => ", e.target);
        break;
    }
  }, [activeMobileItem]);

  return (
    <div ref={mobileMenuRef} className={styles.navbarContainer}>
      <ul className={`${styles.ul} fade-in`}>
        <li className={`${styles.li}`} id={styles.logo}>
          <a onClick={() => setClick(!click)} className={styles.navLink}>
            <span className={`${styles.linkText}`} id={styles.logoText}>
              WIND TURBINE DATA
            </span>
            <span className={`${styles.arrow} ${styles.linkIcon}`}>
              <Image
                src="/logo.svg"
                alt="logo icon - dog house"
                width={"70%"}
                height={"70%"}
              />
            </span>
          </a>
        </li>
        <li className={styles.li}>
          <Link href="/Dashboard" passHref>
            <a
              ref={(element) => {
                navbarRef.current[1] = element;
              }}
              onTouchStart={() => setActiveMobileItem("dashboard")}
              onClick={() => setClick(false)}
              className={styles.navLink}
            >
              <span className={`${styles.linkIcon}`}>
                <Image
                  src="/dashboard.svg"
                  alt="dashboard icon"
                  width={"50%"}
                  height={"50%"}
                />
              </span>
              <span className={`${styles.linkText} ${styles.btnStyle}`}>
                DASHBOARD
              </span>
            </a>
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/About" passHref>
            <a
              ref={(element) => {
                navbarRef.current[2] = element;
              }}
              onTouchStart={() => setActiveMobileItem("about")}
              onClick={() => setClick(false)}
              className={styles.navLink}
            >
              <span className={`${styles.linkIcon}`}>
                <Image
                  src="/about.svg"
                  alt="about icon"
                  width={"30%"}
                  height={"30%"}
                />
              </span>
              <span className={`${styles.linkText} ${styles.btnStyle}`}>
                ABOUT
              </span>
            </a>
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/" passHref>
            <a
              ref={(element) => {
                navbarRef.current[2] = element;
              }}
              onTouchStart={() => setActiveMobileItem("about")}
              onClick={() => setClick(false)}
              className={styles.navLink}
            >
              <span className={`${styles.linkIcon}`}>
                <Image
                  src="/logout.svg"
                  alt="about icon"
                  width={"30%"}
                  height={"30%"}
                />
              </span>
              <span className={`${styles.linkText} ${styles.btnStyle}`}>
                LOG OUT
              </span>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
