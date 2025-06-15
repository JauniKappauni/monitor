const api = "http://localhost:3000/data";

async function getData() {
  const response = await fetch(api);
  const json = await response.json();

  document.getElementById("cpu").textContent = `CPU Usage: ${json.cpuLoad}%`;

  document.getElementById(
    "mem"
  ).textContent = `Used: ${json.usedMem} GiB / Total: ${json.totalMem} GiB`;

  document.getElementById(
    "disk"
  ).textContent = `Used: ${json.usedDisk} GiB / Total: ${json.totalDisk} GiB`;
}
setInterval(getData, 1000);
