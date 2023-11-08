const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt', 'utf8'); 
const second = readFileSync('./content/second.txt', 'utf8'); 

console.log(first,second);

//The flag is how you are appending to the end of the text file 
writeFileSync(
  './content/result-sync.txt', `Here is the result: ${first},${second}`,
   {flag: 'a' }
); 
