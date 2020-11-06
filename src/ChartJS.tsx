import React, { useEffect, useRef } from "react";

function ChartJS({ data }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef();
  useEffect(() => {});
  useEffect(() => {}, [data]);
  return <canvas ref={canvasRef} />;
}

export default ChartJS;
