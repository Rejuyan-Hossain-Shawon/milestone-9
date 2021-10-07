import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const MyAssigmentMark = () => {
    const data = [
        {
            name: "Milestone 1",
            mark: 59,
            pv: 2400,
            amt: 2400
        },
        {
            name: "Milestone 2",
            mark: 60,
            pv: 1398,
            amt: 2210
        },
        {
            name: "Milestone 3",
            mark: 60,
            pv: 9800,
            amt: 2290
        },
        {
            name: "Milestone 4",
            mark: 50,
            pv: 3908,
            amt: 2000
        },
        {
            name: "Milestone 5",
            mark: 49,
            pv: 4800,
            amt: 2181
        },
        {
            name: "Milestone 6",
            mark: 58,
            pv: 3800,
            amt: 2500
        },
        {
            name: "Milestone 7",
            mark: 59,
            pv: 4300,
            amt: 2100
        }
    ];
    return (
        <BarChart width={850} height={600} data={data}>
            <Bar dataKey="mark" fill="#8884d8" />

            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
        </BarChart>
    );
};

export default MyAssigmentMark;