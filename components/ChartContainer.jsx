import Script from "next/script";
import Highcharts from "highcharts";
import { useEffect, useState, useRef } from "react";
import styles from "../styles/ChartContainer.module.css";

const ChartContainer = ({ data }) => {
  const chartRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    // get timestamp
    let timestamp = data.data.map((dataPoint) => new Date(dataPoint.timestamp));
    timestamp = timestamp.map(
      (dataPoint) =>
        `${dataPoint.getDate()}/${dataPoint.getMonth()}/${dataPoint.getFullYear()}`
    );

    // get wind speed
    const wind_speed = data.data.map(
      (dataPoint) =>
        Math.round((dataPoint.wind_speed + Number.EPSILON) * 100) / 100
    );

    // get power output
    const power = data.data.map(
      (dataPoint) => Math.round((dataPoint.power + Number.EPSILON) * 100) / 100
    );

    // highcharts - build chart
    if (chartRef.current) {
      console.log("ref here --> ", chartRef);
    }

    Highcharts.chart(chartRef.current, {
      chart: {
        zoomType: "xy",
      },
      boost: {
        useGPUTranslations: true,
        seriesThreshold: 5,
      },
      title: {
        text: "Wind Turbine Data",
      },
      subtitle: {
        text: "Power generated using wind turbines.",
      },
      xAxis: [
        {
          categories: timestamp,
          crosshair: true,
        },
      ],
      yAxis: [
        {
          // Primary yAxis
          labels: {
            format: "{value} mps",
            style: {
              color: "red",
            },
          },
          title: {
            text: "Wind Speed",
            style: {
              color: "red",
            },
          },
        },
        {
          // Secondary yAxis
          title: {
            text: "Power Output",
            style: {
              color: "blue",
            },
          },
          labels: {
            format: "{value} watts",
            style: {
              color: "blue",
            },
          },
          opposite: true,
        },
      ],
      tooltip: {
        shared: true,
      },
      legend: {
        layout: "vertical",
        align: "left",
        x: 120,
        verticalAlign: "top",
        y: 0,
        floating: true,
        backgroundColor:
          Highcharts.defaultOptions.legend.backgroundColor || // theme
          "rgba(255,255,255,0.25)",
      },
      series: [
        {
          name: "Power",
          dataGrouping: {
            //enabled: false,
            forced: true,
            units: [["day", [1]]],
          },
          type: "area",
          yAxis: 1,
          data: power,
          tooltip: {
            valueSuffix: " watts",
          },
        },
        {
          name: "Wind Speed",
          type: "area",
          data: wind_speed,
          tooltip: {
            valueSuffix: " mps",
          },
        },
      ],
      // -------------------- //
    });
  }, []);

  return (
    <div>
      <Script src="https://code.highcharts.com/highcharts.js" />
      <Script src="https://code.highcharts.com/modules/exporting.js" />
      <Script src="https://code.highcharts.com/modules/export-data.js" />
      <Script src="https://code.highcharts.com/modules/accessibility.js" />

      <div ref={chartRef} className={styles.chart}></div>
    </div>
  );
};

export default ChartContainer;
