import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ProductPieChart = () => {
  const data = [
    { name: 'Basic Tees', value: 55 },
    { name: 'Custom Short Pants', value: 31 },
    { name: 'Super Hoodies', value: 14 },
  ];

  const colors = ['#F8DA7F', '#F8DB78', '#EE8484'];

  return (
    <div className="flex items-center justify-center bg-white p-4 rounded-lg shadow-md h-48">
      <h3 className="text-lg font-semibold mb-4">Top Products</h3>

      {/* Flex container for Pie Chart and Legend */}
      <div className="flex items-start justify-between h-full space-x-4">
        {/* Pie Chart */}
        <div className="flex-1 h-[10rem]
         max-w-[60%]"> {/* Limiting max width */}
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={data} dataKey="value" nameKey="name" outerRadius="80%" label>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="flex-shrink-0 max-w-[35%]">
          <Legend verticalAlign="top" align="left" layout="vertical" />
        </div>
      </div>
    </div>
  );
};

export default ProductPieChart;
