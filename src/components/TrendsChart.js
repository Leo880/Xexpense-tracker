
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const TrendsChart = ({ expenses }) => {
  const data = expenses.reduce((acc, exp) => {
    const existing = acc.find((d) => d.category === exp.category);
    if (existing) {
      existing.amount += Number(exp.price);
    } else {
      acc.push({ category: exp.category, amount: Number(exp.price) });
    }
    return acc;
  }, []);

  if (!data.length) return <p>No expense trends to show</p>;

  return (
    <div>
      <h2>Expense Trends</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="amount" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TrendsChart;
