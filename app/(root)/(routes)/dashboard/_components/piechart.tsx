'use client'
import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
  { name: "Jan", value: 100 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 200 },
  { name: "Apr", value: 400 },
  { name: "May", value: 200 },
  { name: "Jun", value: 200 },
  { name: "Jul", value: 200 },
  { name: "Aug", value: 50 },
  { name: "Sep", value: 100 },
  { name: "Oct", value: 200 },
  { name: "Nov", value: 100 },
  { name: "Dec", value: 100 }
  
];

const COLORS = [
    "#0088FE", "#00C49F", "#FFBB28", "#FF8042", 
    "#A28CDB", "#FF6B6B", "#4CAF50", "#FF9800", 
    "#795548", "#9E9E9E", "#3F51B5", "#F44336"
  ];

export default function Piechart() {
  return (
    <div className='bg-white/20 shadow flex w-full flex-col gap-3 rounded-[5px] p-5 text-black'>
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        outerRadius={100}
        fill="#8884d8"
        dataKey="value"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
    </div>
  );
}
