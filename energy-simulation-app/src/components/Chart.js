import { Line } from 'react-chartjs-2';

const data = {
    labels: ['Heating', 'Cooling', 'Lighting'],
    datasets: [
        {
            label: 'Energy Consumption (kWh)',
            data: [120, 80, 50],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
        },
    ],
};

function EnergyChart() {
    return <Line data={data} />;
}

export default EnergyChart;