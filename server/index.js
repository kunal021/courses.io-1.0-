const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = process.env.PORT || 3000;
// const path = require("path");
const rootRouter = require("./routes/root.route");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.DB_URI, {})
  .then(() => console.log("DB is connected"));

app.use("/api/v1", rootRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
