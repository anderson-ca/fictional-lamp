import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  const formRef = useRef(null);

  const validateFunc = (e) => {
 
    if (formRef) {
      let password = formRef.current.querySelector("#password");
      let errorMsg = formRef.current.querySelector("#err");
      if (password.value !== process.env.PASSWD) {
        e.preventDefault();
        errorMsg.classList.remove(`${styles.noshow}`);
      }
    }
  };

  

  return (
    <div className={styles.container}>
      <form
        onSubmit={validateFunc}
        ref={formRef}
        className={styles.logInForm}
        action="/About"
        method="get"
      >
        <div className={styles.logoWrapper}>
          <Image
            src="/formicon.svg"
            alt="about icon"
            width={"100%"}
            height={"100%"}
          />
        </div>
        <input
          className={styles.input}
          type="password"
          id="password"
          placeholder="Enter Password"
          required
        />
        <span id="err" className={`${styles.noshow} ${styles.err}`}>
          <small>wrong password</small>
        </span>
        <button className={styles.btn} type="submit">
          Log In
        </button>
      </form>
    </div>
  );
}