const express = require("express");
const cors = require("cors");
const si = require("systeminformation");
const port = 3000;

const app = express();

app.use(express.json());
app.use(cors());

app.get("/data", async (req, res) => {
  const [load, mem, disk] = await Promise.all([
    si.currentLoad(),
    si.mem(),
    si.fsSize(),
  ]);
  res.json({
    cpuLoad: load.currentLoad.toFixed(2),
    usedMem: (mem.used / 1024 ** 3).toFixed(2),
    totalMem: (mem.total / 1024 ** 3).toFixed(2),
    usedDisk: (disk[0].used / 1024 ** 3).toFixed(2),
    totalDisk: (disk[0].size / 1024 ** 3).toFixed(2),
  });
});

app.listen(port, () => {
  console.log(`Server läuft unter http://localhost:${port}`);
});
