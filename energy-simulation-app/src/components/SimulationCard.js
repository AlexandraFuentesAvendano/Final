import React, { useState } from 'react';

function SimulationCard({ title, initialValue }) {
    const [value, setValue] = useState(initialValue);

    return (
        <div className="simulation-card">
            <h3>{title}</h3>
            <p>Energy Consumption: {value} kWh</p>
            <button onClick={() => setValue(value + 10)}>Increase</button>
            <button onClick={() => setValue(value - 10)}>Decrease</button>
        </div>
    );
}

export default SimulationCard;