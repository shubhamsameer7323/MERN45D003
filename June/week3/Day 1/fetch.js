console.log("today we are going to study fetch method");


// function getData(userId,next){
//     setTimeout(()=>{
//         console.log("User Id is :",userId)
//         next()
//     },2000)
// }

// // call back hell
// getData(1,()=>getData(2,()=>getData(3,()=>getData(4))));

// promises

// state
// pending
// resolve
// reject

// let promise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("promise exexuted")
//         // resolve("resolve")
//         reject("reject ")
//     },2000)
// })

// console.log(promise)


//promise chain
// function getUserData(userId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("User Id is :",userId)
//             resolve("success")
//             // reject("cansel")
//         },2000)
//     })
// }
// getUserData(1).then(()=>{
//     return getUserData(2).then(()=>{
//         return getUserData(3)
//     })
// })


// return from the  MUD
// async  &  await

// fetch method

async function fetchMethod() {

    let option = {
        method: 'DELETE',
        
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1",option);
    console.log(response)

    let data = await response.json()
    console.log(data)


}

fetchMethod()

// request
// CRUD
//  get Type
// post type
// put type
// delete type
