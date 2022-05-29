const {readFile,writeFile} = require('fs')
console.log('start');
readFile ('./content/first.txt', 'utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/subfolder/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = result;
        writeFile(
            './content/result-async.txt',
            `Here is the result : ${first}, and ${second}`
            ,(err, result)=>{
                if(err){
                    console.log(err);
                    return;
                }
                console.log('done task');
            }
        )
    })
})
console.log('start next one');