const express = require("express");
const cors = require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");
const connectDB = require("./utils/db");
const userRouter = require("./routes/userRoutes");
const productRouter = require("./routes/productRoutes");

const app = express();
const port = process.env.PORT || 9001;

app.use(cors());
app.use(cors({ credentials: true, origin: true, withCredentials: true }));

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
// Database connection
connectDB();
// Router create
app.get("/", (req, res) => {
  res.status(200).send("Success GET Request.");
});

// all controller route
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);

app.listen(port, () => {
  console.log(`Your Port is running http://localahost:${port}`);
});
