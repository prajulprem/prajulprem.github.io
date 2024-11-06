import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Piecomp = () => {
  const data = [
    { name: 'Basic Tees', value: 55 },
    { name: 'Custom Short Pants', value: 31 },
    { name: 'Super Hoodies', value: 14 },
  ];

  // Calculate the total value of all items in the data
  const totalValue = data.reduce((sum, entry) => sum + entry.value, 0);

  // Define colors for each slice
  const COLORS = ['#98D79E', '#F8DB78', '#EE8484'];

  // Custom legend items with percentage calculations
  const customLegend = data.map(entry => {
    const percentage = ((entry.value / totalValue) * 100).toFixed(1);
    return {
      ...entry,
      percentage: `${percentage}%`
    };
  });

  return (
    <div style={{ width: '496px', height: '250px', borderRadius: '8px', padding: '16px',  }}>
      {/* Heading and Subheading */}
      <div style={{ marginBottom: '12px' ,display: 'flex', justifyContent: 'space-between'}}>
        <h2 style={{ fontSize: '18px', fontWeight: '900', color: '#333' }}>Top Charts</h2>
        <p style={{ fontSize: '12px', color: '#888', marginTop: '4px' }}>Data for the last 12 months</p>
      </div>

      {/* Responsive Pie Chart */}
      <ResponsiveContainer width="100%" height={180}>
        <PieChart>
          <Pie 
            data={data} 
            dataKey="value" 
            nameKey="name" 
            cx="40%"  // Adjust the x-position to fit better in the card
            cy="50%"  // Keep the y-position in the middle
            outerRadius={60}  // The outer radius of the pie chart
            innerRadius={40}  // The inner radius creates the hole (tyre effect)
            fill="#8884d8"
          >
            {/* Coloring the slices using the COLORS array */}
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>

          {/* Tooltip */}
          <Tooltip />
          
          {/* Manually custom legend with percentage */}
          <Legend
            layout="vertical"  // Arrange the legend vertically
            align="right"       // Align legend to the right
            verticalAlign="middle"  // Position the legend in the middle of the pie chart
            iconType="circle"   // Use circles for the legend indicator instead of squares
            iconSize={10}       // Adjust size of the circle indicator
            formatter={(value, entry) => {
              const matchingData = customLegend.find(item => item.name === value);
              return `${matchingData.name} (${matchingData.percentage})`;  // Add percentage in legend
            }}
            wrapperStyle={{
              fontSize: '14px',   // Font size of legend text
              fontWeight: '400',  // Font weight (optional)
              color: '#000',      // Set color of the legend text to black
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Piecomp;
