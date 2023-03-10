const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8080;
const URL = process.env.DATABASE_URL;
const signupRoute = require("./routes/signupRoute");
const loginRoute = require("./routes/loginRoute");
const petsRoutes = require("./routes/petsRoutes");
const userRoutes = require("./routes/userRoutes");

mongoose.set("strictQuery", false);
mongoose.connect(URL);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(express.json());
app.use(cors());

app.use("/signup", signupRoute);
app.use("/login", loginRoute);
app.use("/pets", petsRoutes);
app.use("/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
