const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const URL = process.env.DATABASE_URL;
const mongoose = require("mongoose");
const petsRoutes = require("./routes/petsRoutes");
const usersRoutes = require("./routes/usersRoutes");

mongoose.set("strictQuery", false);
mongoose.connect(URL);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));


app.use(express.json());
app.use(cors());

app.use("/pets", petsRoutes)
app.use("/login", usersRoutes)

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
