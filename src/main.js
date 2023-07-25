//function types //declare,dynamic,anonymous let a=new Function("x","y","return x+y") string,literal expression let a=(){} parse once |
//declare => parse one,hoisted in first of the scope,sort code, | most use
//dynamic => create new function every time on the fly create by user | on fly codePen
//literal without name
//todo self invoking function (function(a){return "hi"+a})("mo") initialization
// ((((((((((((((((((((((variables))))))))))))))))))))))
//? ref,value =>copy value and return it  or copy ref value like array
//new Number(10)=>ref n=10=>value
//inner function can access all local vars not an other inner function can't define in document
// a()=>values of function a=>return function it self
//closure =>kill every task not used in the inner function,have to return the inner function that use data from outer function
//! if i want closure function inner user self invoking ((x)=>clg(x))(i) ... i of array
// ((((((((((((((((((((((arrow function))))))))))))))))))))))
// ?anon function(){} event.target.value | this.value ,arrow ()=>{} not create new context save the same value
//! ...arr spread operator ->spread arr [1,2,3,4] max(...a) max(1,2,3,4,5)
//in index of item
//generation start ,end loops for function
//function* a(s,e){for(i,i<end,+){yield i}}
// 1,2,3,4,5,6
//(((((((((((((((((1)))))))))))))))))
//sum 2 num,path as args self invoke
let sumNumbers = () => (() => {
    let n1 = +prompt("enter first number", "enter first number")
    let n2 = +prompt("enter first number", "enter first number")
    alert(n1 + n2)
})()
//(((((((((((((((((2)))))))))))))))))
// filter 
let returnOddNumber = () => {
    let arr = [1, 2, 3, 4, 5, 6]
    document.getElementById('odd').textContent = arr.filter(n => n % 2 == 1)
}
let returnEvenNumber = () => {
    const numbers = [7, 10, 15, 8, 13, 18, 6];

    const evens = [];
    numbers.forEach((num) => {
        if (num % 2 === 0) {
            evens.push(num);
        }
    });
    document.getElementById('even').textContent = evens.join(' ')

    // document.getElementById('even').textContent = `the even numbers ${a}`
}
let spread = () => {
    function sum(x, y, z) {
        return x + y + z;
    }

    const numbers = [1, 2, 3];

    document.getElementById('spread').textContent = sum(...numbers);
}
let object = { name: "mostafa", university: "cairo", faculty: "eng", finalGrade: 99 }
let literal = () => {
    document.getElementById('literal').textContent = `
        name : ${object.name}
        university : ${object.university}
        faculty : ${object.faculty}
        finalGrade : ${object.finalGrade}
    `
}
console.log(`
name : ${object.name}
university : ${object.university}
faculty : ${object.faculty}
finalGrade : ${object.finalGrade}
`)





