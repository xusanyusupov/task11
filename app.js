
// let arr = [1,2,3,4,5]

// function centerNum(number){
//     let numLen = arr.length
//     if(numLen % 2 === 0){
//         let result = number[numLen / 2 - 1 ]
//         let res2 = number[numLen / 2]
//         return (result + res2) / 2
//     }else{  
//         return number[Math.floor(numLen / 2 )]
//     }
// }
// console.log(centerNum(arr));


// const tubSon = (number) => {
//     let result = 0
//     for(let i = 1; i <= number; i++){
//         if(number % i == 0)result ++
//     }
//     if (result == 2) {
//         console.log(`Tub son ${number}`);
//     }else(console.log(`Tub emas son ${number}`))
// }   

// tubSon(6)


// {
// const tubSon = (number) => {
//     let result = 0
//     for(let i = 1; i <= number; i++){
//         if(number % i == 0)result ++
//     }
//     if (result == 2) {
//         console.log(`Tub son ${number}`);
//     }else(console.log(`Mukammal son ${number}`))
// }   
// tubSon(6)
// }


// function countNumber(num) {
//     let n =  num.toString().length;
//     return `${n} ta xonali son `
// }

// console.log(countNumber(123456));


// function searchA(str) {
//     let res = str.split('').filter(x => x === 'a' || x === 'A').join('').length
//     return `${res} ta A harflari  bor`
// }
// console.log(searchA("assalomu aleykum"));


// function searchNS(item){
//     if(typeof item === 'string'){
//         return "STRING"
//     }else if( typeof item === 'number'){
//         return 'NUMBER'
//     }else{
//         return 0
//     }
// }

// console.log(searchNS(true));


// function revereseSTR(str) {
//     return Array.from(str).reverse().join('')
// }
// console.log(revereseSTR('Assalomu aleykum '));


// function searchNUM(str) {
//     let numbers = str.split('').filter(char => !isNaN(char) && char !== ' ');
//     return numbers.length;
// }

// console.log(searchNUM("Salom 123"));        // 3

