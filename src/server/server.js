const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3001;
const DATA_FILE = path.join(__dirname, "guests.json");

app.use(cors());
app.use(express.json());

app.post("/guests", (req, res) => {
  const newGuest = req.body;

  fs.readFile(DATA_FILE, "utf8", (err, data) => {
    let guests = [];
    if (!err && data) {
      guests = JSON.parse(data);
    }

    guests.push({ ...newGuest, date: new Date().toISOString() });

    fs.writeFile(DATA_FILE, JSON.stringify(guests, null, 2), (err) => {
      if (err) {
        res.status(500).json({ message: "Չհաջողվեց պահպանել տվյալները" });
      } else {
        res.status(200).json({ message: "Հաջողությամբ պահպանվեց" });
      }
    });
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Սերվերը պատրաստ է՝ http://localhost:${PORT}`);
});
