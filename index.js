let array1= [3, 5, 10, 2, 8]
let sum=0;
array1.forEach(function(value) {    
    sum+=value;
});



let result=sum/array1.length;
console.log('Il valore della media è '+ result);

let lessValues= array1.filter(function(value) {
    return value < result;
})

console.log('I valori minori della media sono '+ lessValues);


let MaxValues= array1.filter(function(value) {
    return value > result;
})
let howmanyMaxValues= MaxValues.length
console.log('Il numero di valori maggiori della media è '+ howmanyMaxValues);
