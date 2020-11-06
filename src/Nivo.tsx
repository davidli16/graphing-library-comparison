// @ts-nocheck
import { ResponsiveLine } from "@nivo/line";
import React from "react";

function Tooltip({ point }) {
  <div
    style={{
      background: "white",
      padding: "9px 12px",
      border: "1px solid #ccc",
    }}
  >
    <div>x: {point.x}</div>
    <div>y: {point.y}</div>
  </div>;
}

const theme = {
  grid: {
    line: {
      strokeDasharray: "5 3",
    },
  },
};
function Nivo({ data }) {
  data = [{ id: "main", data }];
  return (
    <ResponsiveLine
      theme={theme}
      data={data}
      margin={{ top: 40, left: 100, bottom: 20, right: 20 }}
      pointSize={12}
      pointBorderWidth={3}
      pointBorderColor={"#fff"}
      lineWidth={4}
      enableGridY={false}
      enableArea={true}
      xFormat={(x) => {
        console.log(x);
        return `Week of ${x}`;
      }}
      areaBaselineValue={20000}
      tooltip={Tooltip}
      axisLeft={{ orient: "left", tickSize: 5 }}
      axisBottom={{ tickPadding: 10, tickSize: 0 }}
      yScale={{ type: "linear", min: 20000, max: 60000 }}
    />
  );
}

export default Nivo;
