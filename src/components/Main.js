import React from "react";
import {
  faCalendar,
  faComments,
  faDollarSign,
  faArrowRight,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Main.css";
import Tile from "./Tile";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { PieChart, Pie, Sector } from "recharts";
import Projects from "./Projects";
import ColorTile from "./ColorTile";
import Card from "./Card";

const data1 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";
};
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const developmentAproach = {
  title: "Development Aproach",
  text:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptatum cum hic veritatis voluptatem neque inventore molestiae eos at voluptates",
};
const Illustrations = {
  title: "Illustrations",
  text:
    "Consequatur voluptatum cum hic veritatis voluptatem neque inventore molestiae eos at voluptates Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
  image: {
    src: "/dupa",
    alt: "cycki",
  },
};
const Main = () => {
  return (
    <main className="main">
      <h1 className="main-title">{"Dashboard"}</h1>

      <Tile icon={faCalendar} title={"earnings (monthly)"} value={"$40,000"} />
      <Tile
        border={"green-border"}
        color={"green"}
        icon={faDollarSign}
        title={"earnings (annual)"}
        value={"$215,000"}
      />
      <Tile
        border={"cyan-border"}
        color={"cyan"}
        icon={faTasks}
        title={"tasks"}
        value={"50%"}
        progressBar
      />
      <Tile
        border={"gold-border"}
        color={"gold"}
        icon={faComments}
        title={"pending requests"}
        value={"18"}
      />
      <ResponsiveContainer width="90%" height={400}>
        <LineChart
          // width="80%"
          // height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
      <ResponsiveContainer width="90%" height={400}>
        <PieChart>
          <Pie
            data={data1}
            cx="50%"
            cy={200}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          />
        </PieChart>
      </ResponsiveContainer>
      <Projects />
      <ColorTile color="#4e73df" title="Primary" text="#4d73df" />
      <ColorTile color="#1cc88a" title="Success" text="#1cc88a" />
      <ColorTile color="#36b9cc" title="Info" text="#36b9cc" />
      <ColorTile color="#f6c23e" title="Warning" text="#f6c23e" />
      <ColorTile color="#e74a3b" title="Danger" text="#e74a3b" />
      <ColorTile color="#858796" title="Secondary" text="#858796" />
      <ColorTile color="#f8f9fc" title="Light" text="#f8f9fc" theme="dark" />
      <ColorTile color="#5a5c69" title="Dark" text="#5a5c69" />
      <Card
        title={Illustrations.title}
        text={Illustrations.text}
        image={{ src: Illustrations.image.src, alt: Illustrations.image.alt }}>
        <Link to="/unDraw">
          Browse Illustations on unDraw <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </Card>
      <Card title={developmentAproach.title} text={developmentAproach.text} />
    </main>
  );
};
export default Main;
