import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const chartData = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]

    return (
        <div className='flex'>
            <div className='m-10'>
                <h3 className="text-2xl text-center mb-5">
                    Month Wise Sell</h3>
                <LineChart width={550} height={350} data={chartData}>
                    <Line type="monotone" dataKey="sell" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <XAxis dataKey="month" />
                    <YAxis dataKey="sell" />
                    <Tooltip />
                </LineChart>
            </div>
            <div className='m-10'>
                <h3 className="text-2xl text-center mb-5">
                    Invesment vs Revenue
                </h3>
                <BarChart width={550} height={400} data={chartData}>
                    <XAxis dataKey="month" />
                    <YAxis dataKey="sell" />
                    <Tooltip />
                    <Legend
                        width={100}
                        wrapperStyle={{
                            top: 40,
                            right: 20,
                            backgroundColor: "#f5f5f5",
                            border: "1px solid #d5d5d5",
                            borderRadius: 3,
                            lineHeight: "40px",
                        }}
                    />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <Bar dataKey="sell" fill="#8884d8" barSize={30} />
                </BarChart>
            </div>
        </div>
    );
};

export default Dashboard;