#!/usr/bin/env node
const fs = require("fs");
const { helper } = require("./lib/help");
const { py23, transform } = require("./lib/py23");
const clear = require("clear");
const chalk = require("chalk");
const figlet = require("figlet");
const spinner = require("ora")();
// clear();
console.log(
  chalk.magenta(figlet.textSync("py23", { horizontalLayout: "full" }))
);

helper();

if (process.argv.length < 3) {
  console.error(`Usage: py23 --path <Path Name>`);
  process.exit(1);
}
process.argv.slice(2).forEach(cmd => {
  if (cmd === "--path" || cmd === "-p") {
    try {
      if (fs.existsSync(process.argv[3])) {
        py23
          .then(res => {
            res.forEach(file => {
              spinner.start();
              transform(file);
            });
            spinner.succeed("done");
          })
          .catch(error => {
            process.exit(1);
          });
      } else {
        console.log("");
        console.log("  $ py23 --help");
        process.exit(0);
      }
    } catch (error) {
      console.log("invalid path");
    }
  }
});