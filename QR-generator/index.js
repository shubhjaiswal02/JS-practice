import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      name: "URL",
      message: "Enter the url : ",
      type: "input",
    },
  ])
  .then(function (answer) {
    const url = answer.URL;

    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));
   
  });
