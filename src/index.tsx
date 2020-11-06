import React from "react";
import ReactDOM from "react-dom";
import Nivo from "./Nivo";
import Recharts from "./Recharts";
import Formidable from "./Formidable";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import ChartJS from "./ChartJS";

const data = [
  {
    x: "9/20",
    y: 55000,
  },
  {
    x: "9/27",
    y: 40000,
  },
  {
    x: "10/4",
    y: 30000,
  },
  {
    x: "10/11",
    y: 35000,
  },
  {
    x: "10/18",
    y: 56000,
  },
  {
    x: "10/25",
    y: 55500,
  },
  {
    x: "11/1",
    y: 58000,
    projected: true,
  },
];

ReactDOM.render(
  <React.StrictMode>
    <div style={{ width: 580, height: 200 }}>
      <h1>Nivo</h1>
      <div className="chart">
        <Nivo data={data} />
      </div>
      <h1>Recharts</h1>
      <div className="chart">
        <Recharts data={data} />
      </div>
      <h1>Formidable</h1>
      <div className="chart">
        <Formidable data={data} />
      </div>
      <h1>ChartJS</h1>
      <div className="chart">
        <ChartJS data={data} />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
