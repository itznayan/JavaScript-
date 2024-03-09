// // document.getElementById(`myH1`).textContent=`Namste`
// // document.getElementById(`myP`).textContent=`This is Pragraph`

// let age=20
// let price = 15
// let gpa = 6.8
// console.log(`You are ${age} at #${ price } your grade is ${gpa}`)
// let fullName=`Oreki Engineer`
// let age=`20`
// let isStudent = true

// document.getElementById(`p1`).textContent = `Your Name is ${ fullName }`
// document.getElementById(`p2`).textContent=age
// document.getElementById(`p3`).textContent=`Enrolled: ${isStudent}`

// let userName;
// userName = window.prompt(`What is Your Username?`);
// console.log(userName)
// let userName;
// document.getElementById(`mySubmit`).onclick = function () {
//     userName = document.getElementById("myText").value
//     document.getElementById(`myH1`).textContent=`Namste ${userName}`
//     console.log(userName)
// }

// let age = window.prompt(`how old are you`)


// console.log(age,typeof age)
// age =Number(age)
// age += 1
// console.log(age,typeof age)

// let x="1"
// let y="1"
// let z="0"

// x = Number(x)

// y=String(y)

// z = Boolean(z)

// console.log(`${x}  ${y} ${z}`)

// const pi=3.14
// let radius
// let circumference

// radius=window.prompt(`Enter The radius`)
// circumference = 2 * pi * radius
// console.log(circumference)
const PI=3.14
document.getElementById(`submit`).onclick = function () {
    radius = document.getElementById("myText").value;
    radius=Number(radius)
    circum = 2 * PI * radius
    document.getElementById(`myH3`).textContent=circum +" cm"

}