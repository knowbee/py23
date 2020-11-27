const cli = require("commander");
const py23 = new cli.Command();

module.exports = {
  helper: () => {
    py23
      .name("py23")
      .description(
        `
        **py23** is a cli tool program that reads Python 2.x source code and applies a series of fixers to transform it into valid Python 3.x code.
        `
      )
      .version("0.0.2")
      .option("--path, -p", "provide a path in which py23 should run")
      .parse(process.argv);
    py23.on("--help", () => {
      console.log("How to use py23:");
      console.log("  $ py23 --help");
      console.log("  $ py23 --path ./src/");
      console.log("  $ py23 --path index.js");
    });
  }
};