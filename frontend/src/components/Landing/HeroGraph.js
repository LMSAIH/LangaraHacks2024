import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { useEffect, useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const HeroGraph = () => {
  const [data, setData] = useState();
  const [january, setJanuary] = useState(100);
  const [february, setFebruary] = useState(150);
  const [march, setMarch] = useState(175);
  const [april, setApril] = useState(150);
  const [may, setMay] = useState(200);
  const [june, setJune] = useState(210);
  const [july, setJuly] = useState(230);
  const [august, setAugust] = useState(215);
  const [september, setSeptember] = useState(290);
  const [october, setOctober] = useState(310);
  const [november, setNovember] = useState(305);
  const [december, setDecember] = useState(320);

  useEffect(() => {
    const labels = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    setData({
      labels: labels,
      datasets: [
        {
          label: "Your income with us",
          data: [
            500, 700, 650, 740, 800, 900, 1100, 1050, 1250, 1300, 1250, 1500,
          ],
          borderColor: "#4AC0F5",
          backgroundColor: "#4AC0F5",
          fill: {
            target: "origin", // 3. Set the fill options
            above: "rgba(74,192,245,0.6)",
          },
        },
        {
          label: "Your income without us",
          data: [
            january,
            february,
            march,
            april,
            may,
            june,
            july,
            august,
            september,
            october,
            november,
            december,
          ],
          borderColor: "rgb(0,255,0)",
          backgroundColor: "rgb(0,255,0)",
          fill: {
            target: "origin", // 3. Set the fill options
            above: "rgba(0, 255, 0, 0.6)",
          },
        },
      ],
    });
  }, [
    january,
    february,
    march,
    april,
    may,
    june,
    july,
    august,
    september,
    october,
    november,
    december,
  ]);

  const options = {
    responsive: true,
    tension: 0.1,
    color: "#33333",
    pointHoverBorderWidth: "6",
    pointHoverBorderColor: "origin",
    interaction: {
      mode: "index", // Ensures that the hover effect is triggered by the x-axis
      intersect: false, // This makes the line appear even if the cursor isn't directly on a data point
    },
    plugins: {
      tooltip: {
        mode: "index", // Shows the tooltip based on the x-axis index
        intersect: false, // Tooltip shows up even when not directly over a point
      },
    },
    scales: {
      x: {
        // Changed from xAxes to x
        grid: {
          // Changed from gridLines to grid
          color: "#A29E9E",
        },
        ticks: {
          color: "#33333",
        },
      },
      y: {
        // Changed from yAxes to y
        grid: {
          // Changed from gridLines to grid
          color: "#A29E9E",
        },
        ticks: {
          color: "rgb(255,255,255)",
        },
      },
    },
  };

  return (
    <div className="HeroGraph">
      <h3>
        {" "}
        We care about <span className="you">you</span>
      </h3>
      {data ? <Line options={options} data={data} /> : <p>Loading chart...</p>}
      <div className="inputs">
        <input
          type="range"
          value={january}
          onChange={(e) => {
            setJanuary(e.target.value);
          }}
          max="500"
        ></input>
        <input
          type="range"
          value={february}
          onChange={(e) => {
            setFebruary(e.target.value);
          }}
          max="600"
        ></input>
        <input
          type="range"
          value={march}
          onChange={(e) => {
            setMarch(e.target.value);
          }}
          max="600"
        ></input>
        <input
          type="range"
          value={april}
          onChange={(e) => {
            setApril(e.target.value);
          }}
          max="700"
        ></input>
        <input
          type="range"
          value={may}
          onChange={(e) => {
            setMay(e.target.value);
          }}
          max="700"
        ></input>
        <input
          type="range"
          value={june}
          onChange={(e) => {
            setJune(e.target.value);
          }}
          max="700"
        ></input>
        <input
          type="range"
          value={july}
          onChange={(e) => {
            setJuly(e.target.value);
          }}
          max="800"
        ></input>
        <input
          type="range"
          value={august}
          onChange={(e) => {
            setAugust(e.target.value);
          }}
          max="800"
        ></input>
        <input
          type="range"
          value={september}
          onChange={(e) => {
            setSeptember(e.target.value);
          }}
          max="800"
        ></input>
        <input
          type="range"
          value={october}
          onChange={(e) => {
            setOctober(e.target.value);
          }}
          max="900"
        ></input>
        <input
          type="range"
          value={november}
          onChange={(e) => {
            setNovember(e.target.value);
          }}
          max="1100"
        ></input>
        <input
          type="range"
          value={december}
          onChange={(e) => {
            setDecember(e.target.value);
          }}
          max="1100"
        ></input>
      </div>
    </div>
  );
};

export default HeroGraph;
