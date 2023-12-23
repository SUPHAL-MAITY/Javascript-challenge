// let a =[2,4,5,6]

// let b=a.pop()

// console.log(b)//6
// console.log(a)//[ 2, 4, 5 ]

// console.log(a.push(9))//////lenght of modified array=5
// console.log(a)///[ 2, 4, 5, 6, 9 ]


// console.log(a.shift())///2
// console.log(a.unshift(7))////the length of modified array=5



/////create an array and take input and add to the array, if input is 0 then stop adding and give output




// let a= []

// let input=1

// while(input !==0){
//     input=Number(prompt("ente a number (0 to stop)"))
//     if(input !==0){
//         a.push(input)
//     }
// }

// console.log("The new array is :",a)


///filter for number divisible by 10 from a given array
// let array=[30,25,56,70,130,46]

// let filteredArray=array.filter((number)=>
// number%10===0 )

// console.log(filteredArray)


//// create an array of   square of given array




// let a= [5,7,2]

// let c=a.map((n)=>n*n
// )

// console.log(c)

// Write a JavaScript program that creates a button and add a click event listener to log a message when it's clicked.

let button=document.createElement("button")

button.textContent="click me"

button.addEventListener("click",()=>{
    console.log("button was clicked")


})
document.body.appendChild("button")


///Write a JavaScript program to create a dropdown menu that shows and hides its options when clicked.


