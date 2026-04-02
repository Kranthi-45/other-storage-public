//----------------------------------------------------------Reverse String---------------------------------------------------
const revString = (str) => str.split("").reverse().join("");

const revString1 = (str) =>{
    const revstr = [];
    for(let x of str){
        revstr.unshift(x);
    }
    return revstr.join("");
}

const revString2 = (str) =>{
    let revstr = "";
    let strarr = str.split("")
    for(let x= strarr.length-1 ; x >= 0 ;x--){
        revstr+=strarr[x];
    }
    return revstr
}

// console.log(revString2("Kranthi"))
// console.log(revString1("Kranthi"))
// console.log(revString("Kranthi"))

//---------------------------------------------------------Remove Duplicates from array----------------
const arr =  [1,3,3,5,1,67,2,5];
const  arr1 = []

const removeDup = (arr) => {
    return [...new Set(arr)];
}
const removeDup1 = (arr) => { arr.filter((item)=>{
    if(!arr1.includes(item)) {                    // return arr.indexOf(item) == positio
        arr1.push(item)
    }
});
}

// console.log(removeDup1(arr))
// console.log(arr1)

//----------------------------------------------------------------Polyndrome----------------------------------------------------
const polyndrome = (str) => {
    return str  === str.split("").reverse().join("");
}
// console.log(polyndrome("ktk"))

//--------------------------------------------------------------fibnocci series-------------------------------------------------
// 0,1,2,3
const fib = (len) =>{
    let n1=0,n2=1,temp;
    for(let j=1;j<=len;j++){
        console.log(n1);
        temp = n1+n2;
        n1 = n2;
        n2 = temp;
    }
}
// fib(5)

//--------------------------------------------------------------Anagram-------------------------------------------------------------
function checkAnagram(str1,str2){
    return str1.toLowerCase().split("").sort().join("") === str2.toLowerCase().split("").sort().join("");

}
// console.log("Angram: ", checkAnagram("Kranthi","KANRTHI"))

//----------------------------------------------------------Frequency of elements---------------------------------------------------
const freqObj = {};
const freq = (arr)=>{ arr.map((item) =>{
    freqObj[item] = freqObj[item] ? freqObj[item]+1:1;
});
}

const count = {}
const freq1 = (arr) =>{
    arr.forEach(elem => {
        count[elem] = (count[elem] || 0) + 1;
    });
}
freq([2,3,44,44])
freq1([2,3,44,44])
// console.log(freqObj)
// console.log(count)

//------------------------------------------------------------Swap variables-----------------------------------------------------------
const swap = (a,b) => {
  let temp = a;
  a = b;
  b = temp;
  console.log(a,b)
}
//------------simple [b,a] = [a,b];
// swap(1,2);

//---------------------------------------------------Extract few properties as Objects/Arrays------------------------------------------
const data = [{id:1, name:"Kranthi", place:"hyd"}, 
            {id:2, name:"chaitra", place:"bang"},
            {id:3, name:"Hitman", place:"Mum"}
        ];

let newExtractedData = data.map((item) =>{
    return {
        id: item.id,
    }
});
let newExtractedArray = data.map((item) =>{
     return   item.id
    
});
// console.log(newExtractedData);
// console.log(newExtractedArray);

//-----------------------------------------------------Sum using Reduce Operator----------------------------------------------------
let red_elem = [1,2,3,4,5,6,7,8];

let sum = (red_elem) =>{
      return red_elem.reduce((acc,item) => {
        return acc + item;
      },0);
}
// console.log(sum(red_elem));

//-------------------------------------------Create a method which will work only on array using prototype----------------------------
Array.prototype.searchByRegExp = function(exp){
    const isPresent = this.find(m => m == exp);
    if(isPresent !== undefined)
        return true;
    else
        return false;    
}

var testValues = ["John","1235","John12345"];
// console.log(testValues.searchByRegExp("John"))

//------------------------------if there are two functions with diff num of parameters latest function present--------------------------

//---------------------------------------------------------Empty the array------------------------------------------------------------
let arr_elem = ['a', 1,"b", 454]
arr_elem = [];
arr_elem.length = 0;
arr_elem.splice(0,arr_elem.length);
while(arr_elem.length)
    arr_elem.pop();
// console.log(arr_elem)    

//-----------------------------------------------------Check given number is an integer----------------------------------------------    
// console.log("check Number", isNaN("123fdfdf"))
// console.log("check Number", isNaN("123"));

//-----------------------------------------------------Largest/smallest among 3 numbers----------------------------------------------
// Math.max & min accepts individual array elemts , so we need to pass array & use spread operator to span into individual & find max
const arr_maxmin = [1,4,8,4];
const largest = Math.max(...arr_maxmin);
const smallest = Math.min(...arr_maxmin);

// console.log("Largest " + largest);
// console.log("Smallest " + smallest);


//-----------------------------------------------------Function currying Demo - Closures-------------------------------------------
// function returning another function
function multiply(num1){
    return function(num2){
        console.log(num1*num2);
    }
}
// multiply(2)(3)

//------------------------------------------------------------Call back demo---------------------------------------------------------
function addMethod(addArry, callBackPrint){
    addArry.push(10);
    callBackPrint();
}
let addArry = [1,2,3,4];
function callBack(){
    console.log("call back mssg: " + addArry)
}
// addMethod(addArry,callBack)

//---------------------------------------------------------Closures demo - with counter-----------------------------------------------
function counterOuterFunc(){
    var _counter = 0;
    return{
        add:function(increment){ _counter += increment},
        retrieve: function(){ return "The counter value is " +  _counter;  }
    }

}
var c = counterOuterFunc();
c.add(5);
c.add(10)
// console.log(c.retrieve());

//--------------------------------------------------------Reverse Each word in String-------------------------------------------------
function revEachWord(str){
    let arrStr = str.split(" ");
    let revStr = [];
    for( let x of arrStr)
        revStr.push(x.split("").reverse().join(""));
   return revStr.join(" ");     
}

// console.log(revEachWord("Hello Kranthi your worst"));

//-------------------------------------------------------Check an Obj is array or not-------------------------------------------------
var check_arr = [1,2,3,4];
// console.log(Array.isArray(check_arr)) 
// console.log(check_arr instanceof Array) 

//-------------------------------------------------------Check Number is Integer or not-----------------------------------------------
// check wheather reminder is 0 by dividing 1
function isInt(num) {
    return num % 1 === 0;
  }
// console.log(isInt(4));  

//----------------------------------------------------Multiples of 3 : fizz, 5 : buzz, 3&5:fizzbuzz ------------------------------------
for (let i = 1; i <= 100; i++) {
    let f = i % 3 == 0,
      b = i % 5 == 0;
    // console.log(f ? (b ? 'FizzBuzz' : 'Fizz') : b ? 'Buzz' : "");
  }

//--------------------------------ex: Nonboolean value coercion to a boolean one
// falsy =  "", false, 0, -0, Nan, null, undefined
// truthy = "hello", true, 12, [],[1,"3",4], {},{id:1} , function foo() {}

//---------------------------------------------Get total salary sum from nested object also----------------------------------------------
const company = [
    {
        "marketing": [
            {
                "name": "Marie",
                "salary": 1000
            },
            {
                "name": "Nora",
                "salary": 1600
            }
        ],
        "development": [
            {
                "Java": [
                    {
                        "name": "Kim",
                        "salary": 2000
                    },
                    {
                        "name": "Raavi",
                        "salary": 1800
                    }
                ],
                "UX": [
                    {
                        "name": "Jack",
                        "salary": 1300
                    }
                ]
            }
        ]
    }
];

var str =  JSON.stringify(company);
var only_salary = str.match(/\d+/g);
// // var only_salary = str.match(/"salary":\d+/g);
// console.log(only_salary);
var total_sal = only_salary.reduce((a,b) => a + +b,0);
// console.log(total_sal);

//---------------------------------Double elements of an array using reduce don't create additional variable----------------------------
const arrayOfNumbers = [1, 2, 3, 4];
var res1 = arrayOfNumbers.reduce((accumulator, currentValue, index, array) => { 
    array[index] = array[index] * 2 ;
    // console.log(array); 
},0);

//-------------------------
// const arr3 =  [3,4,42,9];

//------------------------------------------------------Frequency of array elements-----------------------------------------------------
var arr4=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// var uniqElem =  [...new Set(arr4)]
var freObj = {};
for(let x=0 ; x < arr4.length ; x++){
    if(freObj[arr4[x]]){
        freObj[arr4[x]] += 1;
    }else{
        freObj[arr4[x]] = 1;
    }
}
console.log(freObj)

//---------------------------------------Find pair of elements from given array whose sum in 6------------------------------------------


//----------------------------------Print Subarray numbers where max elements responsible for sum = 0----------------------------------
const arr = [1,2,3,-1,0,4,5,6,7,-2,-5,8,20,-3,3,2];
// const arr = [1, 2, 3, -1, 0, 4, 5, 6, 7, -2, -5, 8, 20, -3, 3, 2];

let arr1 = [];
for (let i = 0; i < arr.length; i++) {   //looping & store subsequence array index(start,end) which evaluates sum = 0 
    let temp1 = 0;
    for (let j = i; j < arr.length; j++) {
        temp1 = temp1 + arr[j];
        if (temp1 == 0)
            arr1.push([i, j]);
    }
}

let templen = 0;
let maxArr = [];
for (let i of arr1) {                   //finding diff b/w start,end index of each subseq array to find max length
    let diff = i[1] - i[0];
    if (diff > templen) {
        templen = diff;
        maxArr = i;
    }
}

let finalarr = [];                      //has start & end index of max elements so we can apply on original array to extract elem
for (let i = maxArr[0]; i <= maxArr[1]; i++) {
    finalarr.push(arr[i])
}
// console.log(finalarr);

// ------------------------------------------Concat array of strings by space using reduce method--------------------------------------
const arr = ["Amazon","Blackstraw","Google","Zoho"];
var res = arr.reduce((acc,item) => {
    return acc  = acc  + "  "+ item;
 },"");
//  console.log(res);

//---------------------------------------------------Case Sensitve search - using filter------------------------------------------------
const arr1 = ["Amazon","Blackstraw","Google","Zoho"];
function Search1(search){
     return arr1.filter((item) => item.includes(search));
}
// console.log(Search1("A"));

//---------------------------------------------------Case InSensitve search - using filter----------------------------------------------
const arr2 = ["Amazon","Blackstraw","Google","Zoho"];
function Search2(search){
     return arr1.filter((item) => item.toLowerCase().includes(search.toLowerCase()));
}
// console.log(Search2("A"));

//----------------------------------------------------------Search - using forEach------------------------------------------------------
const arr3 = ["Amazon","Blackstraw","Google","Zoho"];
const res1 = [];
function Search3(search){
    arr3.forEach((item) => {        
        if(item.includes(search))
            res1.push(item);
    });
}
Search3("A");
// console.log(res1);

//---------------------------------------------Max & Min from array without sort & in one loop------------------------------------------
const arr4 = [12,44,67,33,2,45];
let minVal = Number.MAX_VALUE;
let maxVal = Number.MIN_VALUE;
arr4.forEach((item) => {
    if(item > maxVal ){
        maxVal = item;
    }
    if(item < minVal ){
        minVal = item;
    }
});
// console.log(`Min: ${minVal}, Max: ${maxVal}`)

//-----------------------------------------------------Method 2 min max in one loop
const arr5 = [12,44,67,33,2,45];
let min, max
if (arr5[0] > arr5[1]) {
    min = arr5[0];
    max = arr5[1];
} else {
    min = arr5[1];
    max = arr5[0];
}
for(let i = 2; i <arr5.length ; i++){
    if(arr5[i] > max)
        max = arr5[i];
    else if(arr5[i] < min)
        min = arr5[i];    
}
// console.log(`Min: ${min}, Max: ${max}`)

//--------------------------------------------------------Find 1st max & 2nd max -------------------------------------------------------
const arr6 = [12,44,33,2,45,67];
let max1, max2
if (arr5[0] > arr5[1]) {
    max1 = arr5[0];
    max2 = arr5[1];
} else {
    max1 = arr5[1];
    max2 = arr5[0];    
}
for(let i = 2; i <arr5.length ; i++){
    if(arr5[i] > max1){
        max2 = max1;
        max1 = arr5[i];
    }else if(arr5[i] > max2){
        max2 = arr5[i]
    }
}
console.log(`Max1: ${max1}, Max2: ${max2}`);

//-----------------------------------------Print Firtname whose scondName is Mathew without using forloop------------------------------
const data = [
  { firstName: 'Joe', secondName: 'Jacob' },
  { firstName: 'Aby', secondName: 'Mathew' },
  { firstName: 'John', secondName: 'Mathew' }
];

const result = data
  .filter(person => person.secondName === 'Mathew')
  .map(person => person.firstName);

console.log(result); // Output: ['Aby', 'John']

//----------------------------------------------// Write a Code for the below requirement-----------------------------------------------
// Sample Inputs & Outputs

// Sample Input : List1 = [1,2,3,4,5,6,7,8,9,10] and Split_Value = 3 Expected Output is (Split Like this) [[1,2,3],[4,5,6],[7,8,9],[10]]

// Sample Input : List1 = [1,2,3,4,5,6,7,8,9,10]and Split_Value = 5 Expected Output is (Split Like this) [[1,2,3,4,5],[6,7,8,9,10]] 

function split(arr, split_value){

    var dummy = [];
    var res = [];
    for(var i=0; i< arr.length ; i++){
        dummy.push(arr[i]);
        if((i+1) % split_value === 0 || i === arr.length -1  ){
            res.push(dummy);
            dummy = [];
        }
    }

    return res;
}

let list1 = [1,2,3,4,5,6,7,8,9,10];
let Split_Value = 5;
let output = split(list1, Split_Value);
console.log(output);


---------------count occurance of specific word in key & value in given object----
 function countWordInObject(obj, word) {
  let count = 0;
  function traverse(obj) {
    Object.keys(obj).forEach(function(key) {
      const value = obj[key];
      if (typeof value === "object") {
        traverse(value);
      } else if (typeof value === "string") {
        const regex = new RegExp('\\b' + word + '\\b', 'gi'); // create regex pattern to match whole word
        const matches = value.match(regex); // check for matches in value
        if (matches !== null) { // if matches are found, add to count
          count += matches.length;
        }
      }
      if (typeof key === "string") {
        const regex = new RegExp('\\b' + word + '\\b', 'gi'); // create regex pattern to match whole word
        const matches = key.match(regex); // check for matches in value
        if (matches !== null) { // if matches are found, add to count
          count += matches.length;
        }
      }
    });
  }
  traverse(obj);
  return count;
}

---------  find all occurances of word & count in object-------
function countWordOccurrences(word, obj) {
  let count = 0;
  for (let prop in obj) {
    if (typeof obj[prop] === 'object') {
      count += countWordOccurrences(word, obj[prop]);
    } else if (typeof obj[prop] === 'string') {
      if (obj[prop].includes(word)) {
        count++;
      }
    }
  }
  return count;
}
-------------- split array into sub arrays based on split value ---------
function splitArray(arr, splitValue) {
  const result = [];
  
  for (let i = 0; i < arr.length; i += splitValue) {
    const chunk = arr.slice(i, i + splitValue);
    result.push(chunk);
  }
  
  return result;
}

    
