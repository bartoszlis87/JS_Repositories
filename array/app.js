console.log('Działa!!!!!');

//Przypisanie tablicy do zmiennej
const arr = [];
console.log(arr);
//tworznie tablicy
const alfa = [1, 2, 3];
const beta = new Array(4, 5, 6);
console.log(alfa, beta);

//pobieranie konkretnego elementu z tablicy
console.log("Pobrana wartość: ", alfa[1]);

//sumowanie elementow w tablicy:
const sum = [...alfa, ...beta];
console.log('Suma elementów w tablicy: ',sum);
//sprawdzanie czy obie tablice sa takie same(przez referencje)
if(alfa === beta){
    console.log(true)
}else{
    console.log(false)
}

//Pętla forEach
fruits = ['banana','apple', 'orange' ];
fruits.forEach(function(item, index, array) {
    console.log(item, index);
});
