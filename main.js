async function generateChart() {
    const res = await fetch("/data.json");
    const data = await res.json();
    console.log(data);
    const info = {
        labels: data.map((chart) => chart.day ),
        datasets: [
            {
                data: data.map((chart) => chart.amount),
                backgroundColor: "hsl(10, 79%, 65%)",
                borderRadius: 3,
                hoverBackgroundColor: "hsl(186, 34%, 60%)"
            }
        ],


    };

    const titleTooltip = (e) => `$${e[0].formattedValue}`;
    const labelTooltip = (e) => " "
    const options = {
        scales: {
            y: {
                ticks: {
                    display: false
                },
                grid : {
                    display: false,
                    drawTicks : false,
                    drawBorder :false
                }
            },

            x : {
                grid : {
                    display: false,
                    drawBorder :false
                }
            }




        },
        plugins : {
            legend : {display : false},
            tooltip : {yAlign : "bottom"},
            displayColors : false ,
            callbacks : {
                title: titleTooltip ,
                label :labelTooltip
            }
        },
    }
   
   
   
   
   
   
    const config = {
        type: 'bar',
        data: info,
        options
      };

      const myChart = new Chart(document.getElementById("myChart") , config )
}
generateChart();
