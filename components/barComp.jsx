import React from 'react'
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Legend, Tooltip} from 'recharts';
const Barcomp = () => {
  const data = [
    { week: 'Week 1', guest: 400, user: 200 },
    { week: 'Week 2', guest: 300, user: 220 },
    { week: 'Week 3', guest: 200, user: 320 },
    { week: 'Week 4', guest: 278, user: 250 },
  ];

const customTooltip = ({active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className='p-4 rounded-sm bg-slate-50 flex flex-col gap-4'>
          <p className='text-sm'>{label}</p>
          <p className='text-sm text-blue-400 '>
            product 1 : 
            <span className='ml-2'>${payload[0].value}</span>
          </p>

        </div>
      );
      
    }
  }

  return (
    
    <div>
      {/* Heading and Subheading */}
      <div style={{ marginBottom: '12px' }}>
        <h2 style={{ fontSize: '16px', fontWeight: '900', color: '#333' }}>Activi</h2>
        <p style={{ fontSize: '12px', color: '#888', marginTop: '4px' }}>Data for the last 12 months</p>
      </div>

        <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{right: 30}}>
        <XAxis dataKey="week" />
        <YAxis axisLine={false} />
        <Legend layout="horizontal" align="right" verticalAlign="top" iconType="circle" iconSize={10} />
        <Tooltip content={customTooltip} />
        <CartesianGrid vertical={false} />
        <Bar type="monotone" dataKey="guest" barSize={30} radius={[5, 5, 0, 0]} fill="#98D79E" />
        <Bar type="monotone" dataKey="user" barSize={30} radius={[5, 5, 0, 0]} fill="#EE8484" />
  </BarChart>
</ResponsiveContainer>


      </div>
    
  )

  
}

export default Barcomp;