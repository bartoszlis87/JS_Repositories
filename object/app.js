console.log('Dziala!!!');
//obiekt
const product = {
    name: 'Podstawy JS',
    type: 'book',
    price: 29,
    set price(value) {
        this._name = value;
    },
    get price() {
        return this._name;
    }
}

console.log('Cały obiekt: ', product);
//pobieranie danych z obiektu
console.log('Element: ', product.name);
console.log('Element: ', product['name']);
console.log('*----------*');
//pobieranie dynamicznie ze zmiennej
const propName = 'type';
console.log(product[propName]);
console.log('*---Zmiana, dodawanie, modyfikowanie i usuwanie wartości w obiekcie---*');
product.info = 'text';
console.log(product);
const propValue = 'abc';
product[propValue] = 22;
product.price = 99;
console.log(product);
delete product.info;
console.log(product);
console.log('*-Definiowanie wartości w obiekcie-*');
//lepszy sposob konfiguracji naszej wlasciwosci
Object.defineProperty(
    product,
    'info',
    {
        value: 'Js Ok',
        enumerable: true, //jeśli właściwość ma być brana pod uwagę w iteracji
        writable: true, // jeśli właściwość ma być zmieniana
        configurable: true //pozwala na usunięcie
    }
)
console.log(product);
product.info = 'Jest super';
console.log(product);
delete product.info;
console.log(product);
console.log('*-Settery i Gettery-*');


console.log('*-Pętla for-*');
for (const key in product) {
    console.log(key, product[key])
}
console.log('*-Porównanie obiektów-*');
console.log(product);
const newProduct = { ...product };
newProduct.name = 'Podstawy JavaScript';
console.log(newProduct);
console.log(product);

//tworzenie głębokiej kopii obiektów(nie idealne)
const nextNewProduct = JSON.parse(JSON.stringify(product));
nextNewProduct.price.value = 99;
nextNewProduct.name = 'Podstawy REACT';
console.log(nextNewProduct);
console.log(product);
console.log('*----------*');

//pobieranie wszystkich kluczy z danego obiektu
const keys = Object.keys(product);
const values = Object.values(product);
console.log(keys, values);
console.log('*----------*');