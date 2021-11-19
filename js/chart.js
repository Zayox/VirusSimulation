const ctx = document.getElementById("myChart").getContext("2d");


const labels = [
  "1",
  "2",
  "3",
  "4",
];

setTimeout(() =>   labels.push("5"), 2000);
//nb de personnes infectés / population totale

const data = {
  labels,
  datasets:[
    {
    data:[10,20,10,40],
    label: "Safe Person",
      fill: true,
      backgroundColor: "#abf389",

    },
  ],
};

data.datasets[0].data.push(30);

const config = {
  type: "line",
  data: data,
  options: {
    responsive: true,
    scales:{
      y:{
        ticks:{
          callback: function (value){
            return "$" + value + "m";
          }
        }
      }
    }
  },
};


const myChart = new Chart(ctx, config);
