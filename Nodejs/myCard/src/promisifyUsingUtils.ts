// import * as fs from 'fs'
// import * as util from 'util'

// const readPromise= util.promisify(fs.readFile)
// readPromise("test.txt",'utf-8').then((data)=>
// {
//     console.log(data);
// })
// .catch((err)=>
// {
//     console.log(err);
// })



//Using Async await and other way of promising as per node 10

import {promises } from 'fs'
async function AsyncOperations()
{
    try{
        let readData=await promises.readFile("test.txt",'utf-8')
        console.log(readData)
        let newcontent:string=readData+". Please wait till we reach you"
        await promises.writeFile("test.txt",newcontent)
        console.log("write Successfull")
        readData=await promises.readFile("test.txt",'utf-8')
        console.log(readData)
    }
    catch(err){
        console.log(err)
    }
}
AsyncOperations()