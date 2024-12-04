import React from 'react';
import EnergyChart from './EnergyChart';
import SimulationCard from './SimulationCard';


function Dashboard() {
    return (
        <div className="dashboard">
            <h2>Dashboard</h2>
            <SimulationCard title="Heating" initialValue={120} />
            <SimulationCard title="Cooling" initialValue={80} />
            <SimulationCard title="Lighting" initialValue={50} />
            <EnergyChart />
        </div>
    );
}


export default Dashboard;