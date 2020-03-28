const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

const path = require("path");
app.use(express.static(path.join(__dirname, "client")));

const router = require("./route/routes");
app.use("/api", router);
const port = process.env.PORT || 5000;

// app.get("/", (req, res) => {
//   res.send("home page");
// });

// app.post("/login", (req, res) => {
//   res.send(req.body);
// });

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
