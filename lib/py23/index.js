const fs = require("fs");
const re_print = /(print)\s+(.*)$/gm; // print "hello";
const raw_input = /(raw_input)(\(?.+\)+)$/gm; // name = raw_input() or name = raw_input("What is your name?")
const exception = /(except\s+)(\w+)(.+)(\s+.*):$/gm //except NameError, err:
const raise = /(raise\s+)(\w+)(.)(.+\")$/gm // raise IOError, "file error"
const assertions_re = /failUnlessEqual|assertEquals|failIfEqual|assertNotEquals|failUnless|assert_|failIf|failUnlessRaises|failUnlessAlmostEqual|assertAlmostEquals|failIfAlmostEqual|assertNotAlmostEquals/gm
const dict_re = /(.+).(has_key)\((.+)\)/gm // dict.has_key(key)
const {methods} = require("./unittests")
const os  = require("os")
const files = [];
basedir = process.argv[3];

let deeper = (dir, filelist) => {
  filelist = filelist || [];

  if (fs.statSync(dir).isFile()) {
    filelist.push(dir);
    return filelist;
  }
  f = fs.readdirSync(dir);
  dir = fs.realpathSync(dir);

  f.forEach(file => {
    if(os.platform !=="win32"){
      file = dir + "\/" + file;

    }else {
      file = dir + "\\" + file;
    }
    if (fs.statSync(file).isDirectory()) {
      filelist = deeper(file, filelist);
    } else {
      if (
        (file.includes(".py")) ||
        file.includes("_bak")
      )
        filelist.push(file);
    }
  });
  return filelist;
};

let py23 = new Promise((resolve, reject) => {
  try {
    if(basedir){
      const allfiles = resolve(deeper(basedir, files));
      resolve(allfiles);
    }
  } catch (error) {
    console.log("path is required: $py23 --path <Path Name>");
    process.exit(1);
  }
});

const transform = file => {
  fs.writeFileSync(
    file,
    fs
      .readFileSync(file, "utf-8")
      .replace(re_print, `print($2)`) // print("hello")
      .replace(raw_input, `input$2`) // name = input() or name = input("what is your name?")
      .replace(exception, `$1 $2 as $4:`) // except NameError as err:
      .replace(raise, `$1 $2($4)`) // raise IOError( "file error"):
      .replace(assertions_re, (matched) => {
        return methods[matched]
      })
      .replace(dict_re, `$3 in $1`) // key in dict
  );
};
module.exports = {
  py23,
  transform
};