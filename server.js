const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 8080;
const petsRoutes = require("./routes/petsRoutes");

app.use(express.json());
app.use(cors());

app.get("/pets", petsRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
