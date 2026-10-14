console.log(Number("25"), typeof Number("25"), Number.isNaN(Number("25")));

console.log(Number("25.7"), typeof Number("25.7"), Number.isNaN(Number("25.7")));

console.log(Number("25px"), typeof Number("25px"), Number.isNaN(Number("25px")));

console.log(parseInt("25px"), typeof parseInt("25px"), Number.isNaN(parseInt("25px")));

console.log(parseInt("25.7"), typeof parseInt("25.7"), Number.isNaN(parseInt("25.7")));

console.log(parseFloat("25.7kg"), typeof parseFloat("25.7kg"), Number.isNaN(parseFloat("25.7kg")));

console.log(Number(""), typeof Number(""), Number.isNaN(Number("")));

console.log(Number(" "), typeof Number(" "), Number.isNaN(Number(" ")));