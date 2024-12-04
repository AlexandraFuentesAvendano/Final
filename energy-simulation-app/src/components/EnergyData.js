import React from 'react';

function EnergyData({ data }) {
    return (
        <div className="energy-data">
            <h3>Energy Consumption</h3>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>{item.name}: {item.value} kWh</li>
                ))}
            </ul>
        </div>
    );
}

export default EnergyData;