import { useEffect, useState, useRef } from "react";
import styles from "../styles/Dashboard.module.css";
import { ClimbingBoxLoader } from "react-spinners";
import ChartContainer from "../components/ChartContainer";

export const getStaticProps = async () => {
  const res = await fetch(process.env.API_URI);
  console.log(process.env.API_URI);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

const Dashboard = ({ data }) => {
  return (
    <div className={styles.dashboard}>
      {/* <ClimbingBoxLoader color={"#FF4C7A"} loading={true} size={"100%"} /> */}
      <ChartContainer data={data} />
    </div>
  );
};

export default Dashboard;
