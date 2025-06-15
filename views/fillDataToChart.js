async function updateCharts() {
  const response = await fetch("http://localhost:3000/data");
  const json = await response.json();

  const now = new Date();
  const timeLabel = now.toLocaleTimeString();

  chart1.data.labels.push(timeLabel);
  chart1.data.datasets[0].data.push(json.cpuLoad);
  if (chart1.data.labels.length > 10) {
    chart1.data.labels.shift();
    chart1.data.datasets[0].data.shift();
  }
  chart1.update();

  chart2.data.labels.push(timeLabel);
  chart2.data.datasets[0].data.push(json.usedMem);
  if (chart2.data.labels.length > 10) {
    chart2.data.labels.shift();
    chart2.data.datasets[0].data.shift();
  }
  chart2.update();

  chart3.data.labels.push(timeLabel);
  chart3.data.datasets[0].data.push(json.usedDisk);
  if (chart3.data.labels.length > 10) {
    chart3.data.labels.shift();
    chart3.data.datasets[0].data.shift();
  }
  chart3.update();
}
setInterval(updateCharts, 1000);
