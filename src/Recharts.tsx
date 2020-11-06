import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  Area,
  YAxis,
  ComposedChart,
} from "recharts";

function Recharts({ data }) {
  return (
    <ResponsiveContainer>
      <ComposedChart data={data}>
        <CartesianGrid horizontal={false} strokeDasharray="3 3" />
        <XAxis dataKey="x" />
        <YAxis
          type="number"
          domain={[20000, 60000]}
          tickFormatter={(t) => `$${t / 1000}k`}
          minTickGap={50}
        />
        <Area
          type="linear"
          dataKey="y"
          stroke="#333"
          fill="#ccc"
          dot={{ stroke: "white", strokeWidth: 3, r: 6, fill: "blue" }}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
}

export default Recharts;
