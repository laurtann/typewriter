const sentence = "That's what she said";
let timer = 0;

for (const char of sentence) {
  setTimeout(() => process.stdout.write(char), timer);
  timer += 50;
}

setTimeout(() => console.log("\n"), timer);