// Event hnadling

let btn=document.querySelector("button");
console.log(btn)

// btn.onclick=()=>{
//     alert("button clicked")
// }

// btn.onkeyup=()=>{
//     alert("button clicked using key")
// }

// let input=document.querySelector("input");
// console.log(input)

// input.onchange=(e)=>{
//     console.log("input value is ",e.target.value)
// }

// document.querySelector("a").addEventListener("click",(e)=>{
//     e.preventDefault()
// })





let butt=document.querySelector("form button");

// to store the data in the local storage
butt.addEventListener("click",()=>{
   let input= document.querySelector("form input");
   console.log(input.value)

   localStorage.setItem("name",input.value);
})

// to fetch the data from the local storage
document.querySelector("#fetchData").addEventListener("click",()=>{
    let name=localStorage.getItem("name");
    console.log(name)
})

document.querySelector("form").addEventListener("submit",(e)=>{
    e.preventDefault()
})


// create a element

let div=document.querySelector("#box");


let p=document.createElement("p");
p.innerText="this is child paragraph";
console.log(p)


div.appendChild(p)
