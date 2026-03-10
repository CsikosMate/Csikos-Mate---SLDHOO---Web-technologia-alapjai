console.log('Hello World!');

const constant = 15;

let var2 = 15;
var2 = true;
var2 = 'Str';
// Nincs jelentősége stringnél ' vagy "

// Primitív típus: number, boolean, string, null, undefined
// Összetett típus: tömb, objektum

const age = 25;

if (age < 18) {
    console.log('Kiskorú');
} else if (age < 60) {
    console.log('Középkorú');
} else {
    console.log('Időskorú');
}

// truthy: true, !=0, nem üres string, tömb, objektum
// falsy: false, 0, '', null, undefined

let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

for (let j = 1; j < 5; j++) {
    console.log(j);
}

const arr = [ 1, 2, 3, true, 'red', 'green' ];

// for-in
for (let index in arr) {
    console.log('Index: ', index, ' value: ', arr[index]);
}

// for-of
for (let value of arr) {
    console.log(value);
}

// Callback függvények
const names = [ 'Béla', 'Lajos', 'Feri' ];
// Nevezik arrow function-nak is.
names.forEach((name) => {
    console.log('Hello ', name);
});

const exchangeRates = [ 375, 401, 405, 398, 390, 405 ];

// 1. Az egyes hónapokban 1500 Ft hány eurót ért?
const huf = exchangeRates.map(rate => 1500 / rate);
// Minden elemre meghívja, új tömböt készít.
console.log(huf);

// 2. Mely árfolyamok 400 Ft alattiak?
const under400 = exchangeRates.filter(rate => rate < 400);
console.log(under400);

function greet(name) {
    console.log('Szia', name);
}

greet('Béla');

function square(num) {
    return num * num;
}

console.log(square(2));

// Objektumok
const person = {
    name: 'Tóth Géza',
    age: 15,
    male: true,
    info: function () {
        console.log(this.name, 'vagyok,', this.age, 'éves');
    }
};

person.info();
