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
if (alfa === beta) {
    console.log(true)
} else {
    console.log(false)
}
console.log('*----------*');
//Pętla forEach
fruits = ['banana', 'apple', 'raspberry'];
fruits.forEach(function (item, index, array) {
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

//* Sprawdzanie ostatniego elementu tablicy
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
} catch (err) {
    console.log(err);
}
console.log('Tablica: ', alfaSum, 'Suma tablicy: ', sum1);
console.log('*----------*');
//metoda forEach()

let betaSum = [123, 22, 44, 33];
let sum2 = 0;
betaSum.forEach(function (num) {
    sum2 += num;
});
console.log('Suma :', sum2);

console.log('*----------SORTOWANIE-----*');
// od największej do najmniejszej
let alfaSort = [11, 23, 4, 55, 678, 1];
console.log('Nie posortowana tablica: ', alfaSort);
alfaSort.sort((a, b) => {
    return b - a;
});
console.log('Posortowana tablica: ', alfaSort);
//Najmniejsej do największej
alfaSort.sort((a, b) => {
    return a-b;
});
console.log('Posortowana tablica od najmniejszej do największej: ', alfaSort);
//Sort porównanie długości elementów w tablicy
let arraySort = [`a`, 'fffed', 'wew', 'werwer'];
arraySort.sort((a , b) => {
    return b.length - a.length;
});
console.log(arraySort);
console.log('*----------HTMLCollection*');
//pobieranie elementów z html i zapisywanie do zmiennej
const pList = document.getElementsByTagName('p');
console.log(pList);
console.log('*----------Pętla FOR*');
for (let i = 0; i < pList.length; i++) {
    const item = pList[i]
    item.style.color = 'red';
}
console.log('*----------Pętla forEach*');
const pListArr = [...pList];
pListArr.forEach((el) => {
    el.style.color = 'blue';
});
console.log('*----------MAP*');
const alfaMap = ['aaa', 'bb', 'cccc'];
const alfaMapArr = alfaMap.map((item) => {
    return item + '11'
});
console.log(alfaMapArr);
console.log('*----------Tablica 2 wymiarowa*');
// const cart = [
//         ['skarpetki', 3, 4.90]
//         ['gacie', 8, 20.00]
//         ['top', 4, 19.90]
// ];
// console.log(cart[1][2]);