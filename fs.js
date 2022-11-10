const fs = require("fs");

fs.open("./asd/.enva", "w", (err, length) => {
  process.stdin.on("data", (data) => {
    fs.write(length, data.toString(), (err) => {
      if (err) console.log(err);
    });
  });
});