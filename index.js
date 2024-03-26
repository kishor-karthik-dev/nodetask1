const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(express.static("timestamps"));

let dateString = new Date().toString().slice(0, -3);

const folderName = '/Users/win/Desktop/nodetask1/timestamp';
try {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
  }
} catch (err) {
  console.error(err);
}

 fs.writeFileSync("timestamp/date-time.txt", dateString )

 const fileName = path.join('/timestamp','date-time.html')

app.get("/", function (req, res) {
  res.send(`he date and time shold be in ${fileName} : folder go to localhost 3007/static to view the updated time`);
});

app.get("/static", (req, res) => {

  res.send(`Last created timestamp ${dateString}`);
});

app.listen(3007);
