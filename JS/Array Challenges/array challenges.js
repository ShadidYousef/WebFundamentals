//part #1
function alwaysHungry(arr) 
{
    var count=0;
    for(var i=0; i<arr.length; i++)
    {
        if(arr[i] == "food")
        {
            console.log("yummy");
            count++;
        }        
    }
    if(count==0)
        {
            console.log("I'm hungry");
        }
}
   
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"


//part #2
function highPass(arr, cutoff)
{
    var filteredArr = [];
    for(var i=0; i<arr.length; i++)
    {
        if(arr[i] > cutoff)
        filteredArr.push(arr[i]);
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]


//part #3
function betterThanAverage(arr) {
    var sum = 0;
    for(var i=0; i<arr.length; i++)
    {
        sum+=arr[i];
    }
    var avg=sum/arr.length;
    var count = 0;
    for(var i=0; i<arr.length; i++)
    {
        if(arr[i]>avg)
        {
            count++;
        }
    }    
    // count how many values are greated than the average
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4


//part #4
// function reverse(arr) {
//     var start=0;
//     var end=arr.length-1;
//     for(var i=arr.length-1; i>=0; i--)
//     {
//         var temp=arr[start];
//         arr[start]=arr[end];
//         arr[end]=temp;
//         start++;
//         end--;
//     }
//     // your code here
//     return arr;
// }
   
// var result = reverse(["a", "b", "c", "d", "e"]);
// console.log(result); // we expect back ["e", "d", "c", "b", "a"]

function reverse(arr) {
    var arr1=[];
    for(var i=arr.length-1; i>=0; i--)
    {
        arr1.push(arr[i]);
    }
    return arr1;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    for(var i=0; i<n-2; i++)
    {
        var temp=fibArr[i]+fibArr[i+1];
        fibArr.push(temp);
    }
    // your code here
    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
