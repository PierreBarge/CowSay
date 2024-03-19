const info = require("./information.js");

const cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: `Hello, I'm ${info.firstname} from ${info.campus} Campus!`,
  })
);
