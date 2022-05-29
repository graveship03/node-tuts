const {readFileSync,writeFileSync} = require('fs')
console.log('start');
const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/subfolder/second.txt','utf8');

writeFileSync(
    './content/result-sync.txt',
    `Here is the result ${first}, and ${second}`,{flag: 'a'}
)
console.log('done task');
console.log('next one');