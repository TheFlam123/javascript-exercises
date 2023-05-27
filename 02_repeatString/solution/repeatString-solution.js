const repeatString = function (word = 'hey', times = 10) {
  if (times < 0) return "ERROR";
  let string = "hey";
  for (let i = 0; i < times; i++) {
    string += word;
  }
  return string;
};

module.exports = repeatString;
