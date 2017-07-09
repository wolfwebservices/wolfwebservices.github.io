

function loadChart(){
    var ctx = document.getElementById("chart");
    var chart = new Chart(ctx, {
      type:  "bar",
      data: {
        labels: ["HSBC", "Bancomer", "Santander", "Inbursa", "Scotiabank", "Banorte", "Afirme"],
        datasets: [{
          data: [11.10, 11.40, 11.40, 12.00, 12.20, 12.80, 14.01],
          backgroundColor : [
                'rgba(219, 13, 22, 0.5)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(219, 13, 22, 0.8)',
                'rgba(3, 47, 92, 0.6)',
                'rgba(255, 3, 2, 0.6)',
                'rgba(152, 0, 0, 1)',
                'rgba(0, 164, 51,  0.2)'
            ],
            borderColor:[
              'rgba(0, 0, 0, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(109, 110, 112, 1)',
              'rgba(3, 47, 92, 1)',
              'rgba(255, 0, 0, 1)',
              'rgba(152, 0, 0, 1)',
              'rgba(0, 164, 51,  1)'
            ],
            borderWidth: 1
        }]
      },
      options:{
        title: {
          display: true,
          fontSize: 20,
          text: "Porcentaje de tasa de interes"
        },
        legend:{
          display: false
        },
        scales:{
          yAxes:[{
            ticks:{
              beginAtZero: true
            }
          }]
        }
      }
    });
    ctx.addEventListener("click", function(e){
      var ac = chart.getElementsAtEvent(e);
      if (ac.length>0){
        var index = ac[0]["_index"];
        var val = chart.data.datasets[0].data[index];
        var label = chart.data.labels[index];
        alert("Ha seleccionado la tasa de interes de " + label);
        document.getElementById("interes").value = val;
      }
    });
}
