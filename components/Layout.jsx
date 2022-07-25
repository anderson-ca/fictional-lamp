import styles from "../styles/Layout.module.css";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Head>
        <title>Clean Energy</title>
        <link rel="shortcut icon" href="/headericon.svg" />
        <meta name="description" content="Generated by create next app" />
      </Head>
      {children}
    </div>
  );
};

export default Layout;