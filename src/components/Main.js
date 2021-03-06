import React, { useState } from "react";
import {
  faCalendar,
  faComments,
  faDollarSign,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";

import "./Main.css";
import Illustrations from "./Illustrations";
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
import { PieChart, Pie } from "recharts";
import Projects from "./Projects";
import ColorTile from "./ColorTile";
import Card from "./Card";
import Summary from "./Summary";
import { data1, data, Illustration, developmentAproach } from "./DummyData";

// const renderActiveShape = (props) => {
//   const RADIAN = Math.PI / 180;
//   const {
//     cx,
//     cy,
//     midAngle,
//     innerRadius,
//     outerRadius,
//     startAngle,
//     endAngle,
//     fill,
//     payload,
//     percent,
//     value,
//   } = props;
//   const sin = Math.sin(-RADIAN * midAngle);
//   const cos = Math.cos(-RADIAN * midAngle);
//   const sx = cx + (outerRadius + 10) * cos;
//   const sy = cy + (outerRadius + 10) * sin;
//   const mx = cx + (outerRadius + 30) * cos;
//   const my = cy + (outerRadius + 30) * sin;
//   const ex = mx + (cos >= 0 ? 1 : -1) * 22;
//   const ey = my;
//   const textAnchor = cos >= 0 ? "start" : "end";
// };

const Main = (props) => {
  return (
    <main className="main" style={{ marginLeft: props.setMarginLeft }}>
      <div className="main-dashboard">
        <h1 className="main-title">{"Dashboard"}</h1>

        <Tile
          border={"border-left"}
          icon={faCalendar}
          title={"earnings (monthly)"}
          value={"$40,000"}
        />
        <Tile
          border={"green-border border-left"}
          titleClasses={"green"}
          icon={faDollarSign}
          title={"earnings (annual)"}
          value={"$215,000"}
        />
        <Tile
          border={"cyan-border  border-left"}
          titleClasses={"cyan"}
          icon={faTasks}
          title={"tasks"}
          value={"50%"}
          progressBar
        />
        <Tile
          border={"gold-border  border-left"}
          titleClasses={"gold"}
          icon={faComments}
          title={"pending requests"}
          value={"18"}
        />
      </div>

      <Card title="Earing Overview" dots="true" classes="col-8">
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
      </Card>
      <Card title="Revenue Sources" dots="true" classes="col-4">
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
      </Card>
      <div className="left-sided">
        <Projects />
        <div className="colors">
          <ColorTile color="#4e73df" title="Primary" text="#4d73df" />
          <ColorTile color="#1cc88a" title="Success" text="#1cc88a" />
          <ColorTile color="#36b9cc" title="Info" text="#36b9cc" />
          <ColorTile color="#f6c23e" title="Warning" text="#f6c23e" />
          <ColorTile color="#e74a3b" title="Danger" text="#e74a3b" />
          <ColorTile color="#858796" title="Secondary" text="#858796" />
          <ColorTile
            color="#f8f9fc"
            title="Light"
            text="#f8f9fc"
            theme="dark"
          />
          <ColorTile color="#5a5c69" title="Dark" text="#5a5c69" />
        </div>
      </div>
      <div className="right-sided">
        <Illustrations
          title={Illustration.title}
          image={{ src: Illustration.image.src, alt: Illustration.image.alt }}
          text={Illustration.text}
        />
        <Summary
          title={developmentAproach.title}
          text={developmentAproach.text}
        />
      </div>
    </main>
  );
};
export default Main;
