import ChartBar from "./ChartBar";
import "./Chart.css";

let Chart = (props) => {
  let dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.Value);

  let totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;