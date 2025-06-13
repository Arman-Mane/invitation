import express from "express";
import fs from "fs/promises";
import path from "path";
import cors from "cors";
const corsOptions = {
  origin: ["http://localhost:5173"],
};
const app = express();
const PORT = 5000;
app.use(cors(corsOptions));
const DATA_FILE = path.resolve("DB/guests.json");
app.use(express.json());

app.get("/guests", async (req, res) => {
  try {
    const data = await fs.readFile(DATA_FILE, "utf-8");
    const guests = JSON.parse(data); // Տեքստը դարձնում ենք array
    res.json(guests); // Ուղարկում ենք որպես JSON
  } catch (err) {
    console.error(err);
    res.status(500).send("Սերվերի սխալ");
  }
});
app.get("/tables", async (req, res) => {
  try {
    const data = await fs.readFile(DATA_FILE, "utf-8");
    const guests = JSON.parse(data); // Տեքստը դարձնում ենք array
    res.json(guests); // Ուղարկում ենք որպես JSON
  } catch (err) {
    console.error(err);
    res.status(500).send("Սերվերի սխալ");
  }
});


app.post("/addGuests", async (req, res) => {
  const newGuest = req.body;
  console.log('newGuest:', newGuest)

  if (!newGuest.name || !newGuest.coming) {
    return res.status(400).json({ message: "Բոլոր դաշտերը պարտադիր են" });
  }

  try {
    let guests = [];

    try {
      const data = await fs.readFile(DATA_FILE, "utf8");
      guests = JSON.parse(data);
    } catch (readErr) {
      // եթե ֆայլը չգտնվի կամ դատարկ լինի, թող guests դատարկ լինի
    }

    guests.guests.push({ ...newGuest, date: new Date().toISOString() });

    await fs.writeFile(DATA_FILE, JSON.stringify(guests, null, 2));
    res.status(200).json({ message: "Հաջողությամբ պահպանվեց" });
  } catch (err) {
    console.error("Save error:", err);
    res.status(500).json({ message: "Չհաջողվեց պահպանել տվյալները" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Սերվերը պատրաստ է՝ http://localhost:${PORT}`);
});
