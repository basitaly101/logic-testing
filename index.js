// function num (){
//     let arr = [10, 20, 50, 100, 500, 1000 , 5000];
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//          sum += arr[i];
//     }
//     let average = sum / arr.length;
//     return average;
// }
// console.log(num());

// function findMax(){
//     let arr = [45, 67, 23, 89, 12];
//     let max = arr[0];
//     for(let i = 0; i <= arr.length; i++){
//         if(arr[i] > max){
//             max = arr[i];
//         }}
//     return max;
        
// }
// console.log(findMax());

// function hasDuplicate(arr){
//     for (let i = 0 ; i < arr.length; i++  ){
//         for (let j = i + 1 ; j < arr.length; j++){
//             if (arr[i] === arr[j]){
//                 return true;
//             }
//         }
//     }
//     return false;

//     }

// console.log(hasDuplicate([1, 2, 3, 4, 2])); // Iska output 'true' aana chahiye
// console.log(hasDuplicate([1, 2, 3, 4, 5])); // Iska output 'false' aana 

// function peche (arr) {
//     let result = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         result.push(arr[i]);
//     }
//     console.log(result.join(' '));
// }
// peche([1, 2, 3, 4, 5]); // Iska output '5 4 3 2 1' aana chahiye

// function findingBiggest(arr) {
//     let str = "";
//     for(let i = 0 ; i < arr.length; i++){
//         if(arr[i] > str){
//             str = arr[i];
//         }
//     }
//     return str;
// }
// console.log(findingBiggest(["apple", "banana", "grape", "letter of glory"])); // Iska output 'orange' aana chahiye

// function palindrome(){
//     let str = 'radar';
//     let clearStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
//     let reversedStr = clearStr.split('').reverse().join('');
//     if (clearStr === reversedStr) {
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(palindrome()); // Iska output 'true' aana chahiye

    // let arr = [1, 2, 3, 4, 5];
    // arr.pop();
    // console.log(arr);

    // let arr = [1, 2, 3, 4, 5];
    // arr.push('adffa');
    // console.log(arr);

    // let fruits = ['apple', 'banana', 'grape'];
    // fruits.pop();
    // fruits.push('orange');
    // console.log(fruits);

    // let arr = [1, 2, 3, 4, 5];
    // arr.shift();
    // console.log(arr);

    // let arr = [1, 2, 3, 4, 5];
    // arr.unshift(0);
    // console.log(arr);

    // let arr = [1, 2, 3, 4, 5,5,5,5,5,5,5,5,5,5,5,5,,5,];
    // let arr2 = [6, 7, 8, 9, 10,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1];
    // let combinedArr = arr.concat(arr2);
    // console.log(combinedArr);

    // let arr = [1, 2, 3, 4, 5];
    // let newOne = arr.sort((a, b) => b - a );
    // console.log(newOne);

    // let arr = [1, 2, 3, 4, 5];
    // arr.splice(1,4, 10, 20, 30);
    // console.log(arr);
    // let arr = [1, 2, 3, 4, 5];
    // let slicedArr = arr.slice(3, 5);
    // console.log(slicedArr);
    // let arr = ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't'];
    // let joinedStr = arr.reverse().join('');
    // console.log(joinedStr);

    // let arr = [1, 2, 3, 4, 5];
    // let mapArr = arr.map(x =>   x + '89');
    // console.log(mapArr);

    // let arr = [1, 2, 3, 4, 5];
    // let filterArr = arr.filter(x => x % 2 === 0);
    // console.log(filterArr);

    // let arr = [1, 2, 3, 4, 5];
    // let reduceArr = arr.reduce((acc, curr) => acc + curr, 0);
    // console.log(reduceArr);

    // let arr = [1, 2, 3, 4, 5];
    // let forEachArr = [];
    // arr.forEach(x => forEachArr.push(x * 2));
    // console.log(forEachArr);

    // let arr = [1, 2, 3, 4, 5];
    // let someArr = arr.some(x => x > 0);
    // console.log(someArr);
    // let fruits = ['apple', 'banana', 'grape'];
    // fruits.splice(2, 3, 'orange');
    // console.log(fruits);
    // let arr = [1, 2, 3, 4, 5];
    // let everyArr = arr.every(x => x > 0);
    // console.log(everyArr);

    