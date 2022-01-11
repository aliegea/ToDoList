const express = require("express");
const bodyParser = require("body-parser");

const app = express();
let toDos = ["cook", "clean", "learn"];
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.get("/", (req, res) => {
  let today = new Date();
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  let day = today.toLocaleDateString("en-US", options);
  res.render("list", { kindOfDay: day, newItems: toDos });
});

app.post("/", function (req, res) {
  let toDo = req.body.newItems;
  toDos.push(toDo);
  res.redirect("/");
});
app.listen(3000, () => {
  console.log("listen to port 3000");
});
