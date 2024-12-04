import React from 'react';
import { Pie, PieChart, Tooltip } from 'recharts';

const data = [
    { name: 'Paredes', value: 300 },
    { name: 'Ventanas', value: 150 },
    { name: 'Techo', value: 200 },
];

function EnergyChart() {
    return (
        <PieChart width={400} height={400}>
            <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={150} fill="#8884d8" />
            <Tooltip />
        </PieChart>
    );
}

export default EnergyChart;