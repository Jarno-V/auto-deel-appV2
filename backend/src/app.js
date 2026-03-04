import express from "express";
import cors from "cors";
// import prismaPkg from "@prisma/client";

// const { PrismaClient } = prismaPkg;
// const prisma = new PrismaClient();
const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/api/welkom", (req, res) => {
  res.json({
    bericht: "Hallo vanuit je gloednieuwe Express backend! 🎉",
  });
});

// app.post("/api/users", async (req, res) => {
//   const { email, name } = req.body;

//   if (!email || typeof email !== "string") {
//     return res.status(400).json({ error: "Email is verplicht." });
//   }

//   try {
//     const user = await prisma.user.create({
//       data: {
//         email: email,
//         name: name,
//       },
//     });

//     return res.status(201).json(user);
//   } catch (error) {
//     console.error("Fout bij het aanmaken van gebruiker:", error);
//     return res.status(400).json({ error: "Er is een fout opgetreden." });
//   }
// });

// app.get("/api/users", async (req, res) => {
//   try {
//     const users = await prisma.user.findMany({
//       select: {
//         id: true,
//         email: true,
//         name: true,
//         createdAt: true,
//       },
//       orderBy: {
//         id: "desc",
//       },
//     });

//     return res.json(users);
//   } catch {
//     return res.status(500).json({ error: "Kon users niet ophalen." });
//   }
// });

app.listen(PORT, () => {
  console.log(`🚀 Backend server draait succesvol op http://localhost:${PORT}`);
});
