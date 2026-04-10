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

function palindrome(){
    let str = 'radar';
    let clearStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let reversedStr = clearStr.split('').reverse().join('');
    if (clearStr === reversedStr) {
        return true;
    }else{
        return false;
    }
}
console.log(palindrome()); // Iska output 'true' aana chahiye

    