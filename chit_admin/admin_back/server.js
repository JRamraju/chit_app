const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const getchitroute = require("./route/getchitroute");

const app = express();
const port = 3002;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/uploads1", express.static("uploads1"));

// Routes
app.use("/api/admin", getchitroute);

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
