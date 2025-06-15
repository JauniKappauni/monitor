const api = "http://localhost:3000/data";

async function getData() {
  const response = await fetch(api);
  const json = await response.json();

  document.getElementById("cpuLoad").textContent = `CPU Load: ${json.cpuLoad}%`;
  document.getElementById(
    "usedMem"
  ).textContent = `Used Mem: ${json.usedMem} GiB`;
  document.getElementById(
    "totalMem"
  ).textContent = `Total Mem: ${json.totalMem} GiB`;
  document.getElementById(
    "usedDisk"
  ).textContent = `Used Disk: ${json.usedDisk} GiB`;
  document.getElementById(
    "totalDisk"
  ).textContent = `Total Disk: ${json.totalDisk} GiB`;
}
setInterval(getData, 1000);
