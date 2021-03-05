import React from "react";
import "./Charts.css";
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
import Card from "../Card";
import { data1, data, Illustration, developmentAproach } from "../DummyData";
const Charts = () => {
  return (
    <div className="Charts hero">
      <Card title="Earing Overview" dots="true" classes="">
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
      <Card title="Revenue Sources" dots="true" classes="">
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
      <Card title="Revenue Sources" dots="true" classes="">
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
    </div>
  );
};
export default Charts;
