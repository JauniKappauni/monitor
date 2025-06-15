const canvas1 = document.getElementById("chart1");
const canvas2 = document.getElementById("chart2");
const canvas3 = document.getElementById("chart3");
const ctx1 = canvas1.getContext("2d");
const ctx2 = canvas2.getContext("2d");
const ctx3 = canvas3.getContext("2d");

const chart1 = new Chart(ctx1, {
  type: "line",
  data: {
    datasets: [
      {
        label: "CPU Load",
        data: [],
      },
    ],
  },
});

const chart2 = new Chart(ctx2, {
  type: "line",
  data: {
    datasets: [
      {
        label: "Memory Usage",
        data: [],
      },
    ],
  },
});

const chart3 = new Chart(ctx3, {
  type: "line",
  data: {
    datasets: [
      {
        label: "Disk Usage",
        data: [],
      },
    ],
  },
});
