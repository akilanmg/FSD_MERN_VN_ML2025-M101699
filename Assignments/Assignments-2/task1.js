// let n=15;
// if(n % 2 == 0){
//     console.log("even")
// }
// else{
//     console.log("odd")
// }


function evenOrAdd(n){
    if(n%2==0){
        console.log("even")
    }
    else{
        console.log("odd")
    }
    
}
evenOrAdd(15)
function posOrNeg(n){
    if(n>0){
       console.log("positive")
}
    else if(n<0){
        console.log("negative")
}
    else{
         console.log("zero")
}
}
posOrNeg(15)

function isDivisible(n){
    if(n%3==0 && n%5==0){
       console.log("number is divisible")
}
    else{
         console.log("number is not divisible")
}
}
isDivisible(15)