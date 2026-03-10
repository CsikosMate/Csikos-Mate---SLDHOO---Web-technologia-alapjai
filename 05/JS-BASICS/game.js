const randNum = parseInt( Math.random() * 1000000 );
console.log(randNum);
let life = 0;

while (life < 20) {
    let tipp = parseInt(prompt('Tipped : '));
    if (tipp == randNum) {
        alert('Gratulálok, '+ life + 'lépésből eltaláltad!');
        break;
    } else if (tipp > randNum) {
        alert(life + '. tipp nem talált: A megoldás kisebb.');
    } else if (tipp < randNum) {
        alert(life + '. tipp nem talált: A megoldás nagyobb.');
    }
    life++;
}
if (life == 0)
    alert('Sajnos ez most nem sikerült! A megoldás: ' + randNum)