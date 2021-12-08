import React, {useState} from 'react';
import Chart from 'chart.js/auto';
import {healthyCount} from '../js/main';



const ChartC = () => {

    const[value, setValue] = useState(10);
    const[value2, setValue2] = useState(20);
    const[value3, setValue3] = useState(10);
    const[value4, setValue4] = useState(40);


    const ctx = document.getElementById("myChart").getContext("2d");


    let labels = [];


//nb de personnes infectés / population totale

    const data = {
        labels,
        datasets:[
            {
                data:[],
                label: "Safe Person",
                fill: true,
                backgroundColor: "#abf389",

            },
        ],
    };


    const config = {
        type: "line",
        data: data,
        options: {
            responsive: true,
            scales:{
                y:{
                    title: {
                        display: true,
                        text: 'Person'
                    },
                    ticks:{
                        callback: function (value){
                            return value;
                        }
                    }
                },
                x:{
                    title: {
                        display: true,
                        text: 'Time (s)'
                    }
                }
            }
        },
    };


    let zoz = new Chart(ctx, config);

    let i = 2;



    setInterval(() => {

        zoz.destroy();
        labels.push(i);
        i+=2;
        data.datasets[0].data.push(healthyCount);
        zoz = new Chart(ctx, config);


    }, 2000);


    return (
        <div>

        </div>
    );
};

export default ChartC;