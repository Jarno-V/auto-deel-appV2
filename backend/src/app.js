const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/api/welkom", (req, res) => {
  res.json({
    bericht: "Hallo vanuit je gloednieuwe Express backend! 🎉",
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Backend server draait succesvol op http://localhost:${PORT}`);
});
