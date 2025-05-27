import Chart from 'chart.js/auto'

const output = document.getElementById("graph")
        
const temps = []
setInterval(async ()=>{
    const response = await fetch("/data")
    const data = await response.text()
    const text = data.substring(5,data.length-3)
    if (temps.length>=50) {
        temps.shift()
    }
    temps.push(text)
}, 1000)

const chartData = {
    labels: chartLabels,
    datasets: [{
        label: "CPU temp",
        data: temps,
        borderColor: "rgb(255, 180, 90)",
        borderWidth: 2,
        tension: 0.5
    }]
}

const tempChart = new Chart(output, {
    type: 'line',
    data: chartData,
})