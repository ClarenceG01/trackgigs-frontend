import { VictoryPie, VictoryTheme } from "victory";

const ProgressChart = ({ percentage, width, height }) => {
  // Smaller size for table row display
  const size = width || 40;
  const radius = 14;
  const strokeWidth = 4;
  const center = size / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = Math.max(0, Math.min(percentage, 100));
  const offset = circumference - (progress / 100) * circumference;
  let stroke;
  switch (true) {
	case progress < 50:
	  stroke = "red";
	  break;
	case progress === 100:
	  stroke = "green";
	  break;
	default:
	  stroke = "orange";
	  break;
  }

  return (
    <svg width={size} height={size}>
      <circle
        r={radius}
        cx={center}
        cy={center}
        fill="transparent"
        stroke="lightgrey"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={0}
      />
      <circle
        r={radius}
        cx={center}
        cy={center}
        fill="transparent"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        style={{ transition: "stroke-dashoffset 0.5s" }}
      />
      <text
        x={center}
        y={center}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={size * 0.2}
        fill="black"
      >
        {`${progress}%`}
      </text>
    </svg>
  );
};

export default ProgressChart;
