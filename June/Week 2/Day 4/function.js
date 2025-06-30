

// declaration of function
// named function
function Myfunction(){
    console.log("this is my function")
}

// calling a function
Myfunction()

// types of function
// 1.named function
// 2.expression function
// 3.arrow function
// 4.call back function
// 5.higher order function


// expression function
let expressionFunction=function(){
    console.log("this is expression function")
}

expressionFunction()

// arrow function
let arrowFunction=()=>{
    console.log("this is my arrow function");
}

arrowFunction()

// passing parameter
let printValue=(a)=>{
  console.log("value is :",a)
}

printValue(20)


// higher order function
function higherOrderFunction(fun){
  fun()
// console.log(fun)
}

higherOrderFunction(()=>{
    console.log("this is higher order function")
})


// Array function
// 1.forEach()
// 2.map()
// 3.filter()
// 4.reduce()

let arr=[1,2,3,4,5,6];
// for(let ele of arr){
//     console.log(ele)
// }

// forEach
arr.forEach((v)=>{
 console.log(v)
})

// map
let UpdateArray=arr.map((v)=>{
   return v+2;
})

console.log(UpdateArray)

// filter
let filterValue=arr.filter((v)=>{
  return v%2==0;
})
console.log(filterValue)

// reduce()

// let sum=0;
// for(let v of arr){
//     sum+=v;
// }
// console.log(sum)

let summation=arr.reduce((sum,curr)=>{
 return sum+curr;
})

console.log(summation)



// Dom Manipulation
let obj={
    name:"xyz"
}

console.log(obj.name)

// getElementById()
// getElementsByClassName()
// getElementsByTagNames()
// querySelector()
// querySelectorAll()

let p=document.getElementById("para");
console.log(p)
console.log(p.innerText)

let pList=document.getElementsByClassName("para1");
console.log(pList[1])

let Tags=document.getElementsByTagName("p");
console.log(Tags)

let pId=document.querySelectorAll(".para1");
console.log(pId)

console.log(pId[0])
// pId[0].innerText="para"
// console.log(pId[0])

pId[0].innerHTML="<i> itallic </i>"
console.log(pId[0].innerHTML)

console.log(pId[0].getAttribute("class"))

pId[0].setAttribute("class","paragraph");
console.log(pId[0].getAttribute("class"))



let inputs=document.querySelectorAll("input");

document.querySelector("button").addEventListener("click",()=>{
    console.log(inputs[0].value)
    console.log(inputs[1].value)

    
    let obj={
        name:inputs[0].value,
        age:inputs[1].value
    }

    localStorage.setItem("userData",obj)
})




document.querySelector("form").addEventListener("submit",(e)=>{
    e.preventDefault();
})






