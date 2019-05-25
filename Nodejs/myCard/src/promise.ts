//Using promise object
import * as fs from 'fs';
function write(){
return new Promise(function(resolve,reject){
    fs.writeFile("test.txt","Thank you for writing us1",function(err){
        if(err){
        reject(err)
        }
        else{
            resolve("Write successull");
        }
    } )
})
}

// write().then((data)=>{
//     console.log(data)
// }).catch((err)=>
// {
//     console.log("error occured ");
//     console.log(err)
// })

function read()
{
    return new Promise(function(resolve,reject)
    {
        fs.readFile("test1.txt",'utf-8',(err,data)=>
        {
            if(err)
            {
                console.log()
                reject(err)
            }
            else
            {
                resolve(data)
            }
        })
    })
}


read()
.then((data)=>{
    console.log("read successful--->data: ",data)
    return write()
}).then((data)=>
{
    console.log("Call back from write")
    console.log(data)
})
.catch((err)=>
{
    console.log("error occured");
    console.log(err)
})

 