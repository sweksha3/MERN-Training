const fs=require('fs')

const data1=fs.readFileSync('hii.txt')
const data=fs.readFileSync('hii.txt','utf-8') //utf-8 is for converting the data in human readable form

console.log(data1)
console.log(data)




// const fs=require('fs')
// console.log("good morning")
// setTimeout(()=>{
//     console.log("good night")
// },1000)
// const data=fs.readFileSync('hii.txt','utf-8')
// console.log(data)



//-----------Async-----------------
// const fs=require('fs').promises
// console.log("good morning")

// async function readData(){
//     try{
//    const info= await fs.readFile('hii.txt','utf-8')
//    console.log(info)
//     }catch(err){
//         console.error("error reading file",err)
//     }

// }


// // // fs.readFile('hii.txt','utf-8',(err,data)=>{
// // //     if(err){
// // //         console.error("error reading file",err)
// // //         return 
// // //     }
// // //     console.log(data)
// // // })

// setTimeout(()=>{
//     console.log("good night")
// },1000)

// readData()