import * as fs from 'fs';
fs.readFile('test.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err)
    }
    else
        if (data == null||data=='') {

            fs.writeFile('test.txt', "Written Successfully", (err) => {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log("write successfull");
                }
            }
            );
        
        }
        
});
console.log("ABCD");
