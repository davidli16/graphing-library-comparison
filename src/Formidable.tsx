import React from "react";
import {
  VictoryAxis,
  VictoryChart,
  VictoryLine,
  VictoryTooltip,
} from "victory";

const theme = {
  chart: {
    padding: 10,
  },
  line: {
    style: {
      data: {
        fill: "transparent",
        stroke: "#cccccc",
        strokeWidth: 2,
      },
      padding: 10,
    },
  },
  dependentAxis: {
    style: {
      width: 580,
      height: 200,
      axis: {
        fill: "none",
        stroke: "none",
      },
      grid: {
        fill: "none",
        stroke: "none",
      },
      tickLabels: {
        padding: 10,
      },
    },
  },
  independentAxis: {
    style: {
      width: 580,
      height: 200,
      grid: {
        fill: "none",
        stroke: "#eeeeee",
        strokeDasharray: "5 3",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1,
      },
    },
  },
} as const;

function Formidable({ data }) {
  return (
    <VictoryChart width={780} height={400} theme={theme}>
      <VictoryLine data={data} labelComponent={<VictoryTooltip />} />
      <VictoryAxis />
      <VictoryAxis
        dependentAxis
        domain={[20000, 60000]}
        tickFormat={(t) => `$${t / 1000}k`}
      />
    </VictoryChart>
  );
}

export default Formidable;
