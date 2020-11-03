let sentence = "That's what she said";

// add new line
sentence += "\n";

// // this holds numbers equal to sentence.length - 1
let iArr = [];

for (let i = 0; i < sentence.length; i++) {
  iArr.push(i);
}

for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => process.stdout.write(sentence[i]), iArr[i] * 50);
}




