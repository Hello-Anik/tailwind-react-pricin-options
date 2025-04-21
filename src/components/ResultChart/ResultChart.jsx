import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const ResultChart = () => {
 const resultData = [
    {
      "name": "Aarav",
      "physics": 87,
      "chemistry": 78,
      "math": 92
    },
    {
      "name": "Diya",
      "physics": 76,
      "chemistry": 69,
      "math": 81
    },
    {
      "name": "Kabir",
      "physics": 92,
      "chemistry": 88,
      "math": 95
    },
    {
      "name": "Meera",
      "physics": 68,
      "chemistry": 64,
      "math": 70
    },
    {
      "name": "Rohan",
      "physics": 81,
      "chemistry": 79,
      "math": 85
    },
    {
      "name": "Isha",
      "physics": 74,
      "chemistry": 72,
      "math": 76
    },
    {
      "name": "Yuvraj",
      "physics": 95,
      "chemistry": 91,
      "math": 98
    },
    {
      "name": "Anaya",
      "physics": 59,
      "chemistry": 61,
      "math": 65
    },
    {
      "name": "Vivaan",
      "physics": 88,
      "chemistry": 85,
      "math": 90
    },
    {
      "name": "Tara",
      "physics": 66,
      "chemistry": 70,
      "math": 69
    }
  ] ;

  
    return (
        <div>
            <LineChart width={800} height={500} data={resultData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math"></Line>
                <Line dataKey="chemistry" stroke='red'></Line>
                <Line dataKey="physics" stroke='green'></Line>
            </LineChart>
        </div>
    );
};

export default ResultChart;