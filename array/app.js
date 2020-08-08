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
console.log('Suma elementów w tablicy: ', sum);

//sprawdzanie czy obie tablice sa takie same(przez referencje)
if(alfa === beta){
    console.log(true)
}else{
    console.log(false)
}
console.log('*----------*');
//Pętla forEach
fruits = ['banana','apple', 'raspberry' ];
fruits.forEach(function(item, index, array) {
    console.log('Elementy tablicy: ', [item, index]);
    console.log('Tablica: ', fruits);
});
console.log('*----------*');

//Sprawdzanie długości tablicy
console.log('Długość tablicy to: ', fruits.length);
// 3
console.log('*----------*');

// *Dostawanie się do elementu tablicy
let firstElement = fruits[0];
console.log(firstElement);
// Banana
console.log('*----------*');

//* Sprwdzanie ostatniego elementu tablicy
let lastElement = fruits[fruits.length - 1];
console.log(lastElement);
// raspberry
console.log('*----------*');

// *Dodawanie elementu na końcu tablicy
let addFruits = fruits.push('Orange');
console.log(addFruits);//4
console.log(fruits);// ["banana", "apple", "raspberry", "Orange"]
console.log('*----------*');

// *Usuwanie elemetu z końca tablicy
let deleteLastElement = fruits.pop();
console.log(deleteLastElement);//Orange
console.log('Tablica: ', fruits);//["banana", "apple", "raspberry"]
console.log('*----------*');


// *Usuwanie elementu z przodu tablicy
let deleteFirstFruits = fruits.shift(); // usuwa jabłko z początku
console.log(deleteFirstFruits);//banana
console.log('Tablica: ', fruits);//["apple", "raspberry"]
console.log('*----------*');

// *Dodawanie elementu z przodu tablicy
let addElement = fruits.unshift('Truskawki') // dodaje na początku
console.log(addElement);// 3
console.log('Tablica: ', fruits);//["Truskawki", "apple", "raspberry"]
console.log('*----------*');

// *Znajdowanie indeksu (numeru porządkowego) elementu t tablicy
let findIndex = fruits.push('Mango');
console.log(findIndex);//4
console.log('Tablica: ', fruits);//["Truskawki", "apple", "raspberry", "Mango"]
console.log('*----------*');

console.log('Tablica: ', fruits);
let findIndexOf = fruits.indexOf('apple');
console.log(findIndexOf);//1
console.log('*----------*');

//*Usuwanie obiektu przy użyciu indeksu
console.log('Tablica: ', fruits);
let deleteElement = fruits.splice(0, 1); // tak się usuwa element
console.log(deleteElement);
console.log('Tablica po usuniętym elemencie: ', fruits);
console.log('*----------*');


//* Usuwanie elementów przy użyciu pozycji w indeksie
let vegetables = ["Kapusta", "Rzepa", "Rzodkiew", "Marchew"];
console.log(vegetables);
// ["Kapusta", "Rzepa", "Rzodkiew", "Marchew"]

console.log('*----------*');

console.log(vegetables);
let deleteElements = vegetables.splice(1, 2);
console.log('Tablica po usunięciu elementu:', deleteElements);
console.log('Tablica warzyw: ', vegetables);// ["Rzepa", "Rzodkiew"]
console.log('*----------*');
console.log('*----------Pętle-----------*');
//Pętle

let alfaSum = [12, 22, 44];
let sum1 = 0;
try {
    for (let i = 0; i < alfaSum.length; i++) {
        console.log(i, alfaSum[i]);

        sum1 = sum1 + alfaSum[i];
    }
}catch (err){
    console.log(err);
}
console.log('Tablica: ',alfaSum, 'Suma tablicy: ', sum1);
console.log('*----------*');
//metoda forEach()
