const connect = require("./db/conn");
require("dotenv").config();
const cors = require("cors");
const express = require("express");
const prodRoutes = require("./routes/productRoutes");
const bodyParser = require("body-parser");

const port = process.env.PORT || 4000;
const app = express();
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
connect();

// Routes
app.use("/api", prodRoutes);

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("frontend/build"));
//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "/frontend/build", "index.html"));
//   });
// }

app.listen(port, () => {
  console.log("app listening at " + port);
});
