const randNum = parseInt( Math.random() * 1000000 );
console.log(randNum);
let tippNum = 1;

// alert(randNum);

while (tippNum <= 20) {
    let tipp = parseInt(prompt('Tipped : '));
    if (tipp == randNum) {
        alert('Gratulálok, '+ tippNum + ' lépésből eltaláltad!');
        break;
    } else if (tipp > randNum) {
        alert(tippNum + '. tipp nem talált: A megoldás kisebb.');
    } else if (tipp < randNum) {
        alert(tippNum + '. tipp nem talált: A megoldás nagyobb.');
    } else if (tippNum == 20) {
        alert('Sajnos ez most nem sikerült! A megoldás: ' + randNum)
    } else {
        alert(tippNum + '. tipp nem talált: Hibás tipp.');
    }
    tippNum++;
}
