const languages = ["C is fun", "Python is cool", "JavaScript is amazing"];
let result = "";

for (let i = 0; i < languages.length; i++) {
  result += languages[i];
  if (i < languages.length - 1) {
    result += "\n";
  }
}

console.log(result);
