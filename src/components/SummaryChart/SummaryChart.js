import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const SummaryChart = ({ expenses }) => {
  const data = expenses.reduce((acc, exp) => {
    const existing = acc.find((d) => d.name === exp.category);
    if (existing) {
      existing.value += Number(exp.price);
    } else {
      acc.push({ name: exp.category, value: Number(exp.price) });
    }
    return acc;
  }, []);

  if (!data.length) return <p>No expenses to summarize</p>;

  return (
    <div>
      <h2>Expense Summary</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" outerRadius={100} dataKey="value" label>
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SummaryChart;
