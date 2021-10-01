let day = 25;
const isFirstDecade = (day >= 1 && day <= 9);
const isSecondDecade = (day >= 10 && day <= 19);
const isThirdDecade = (day >= 20 && day <= 29);
const isFourthDecade = (day === 30 || day === 31);

switch (true) {
    case isFirstDecade:
        console.log('FIRST DECADE');
        break;
    case isSecondDecade:
        console.log('second');
        break;
    case isThirdDecade:
        console.log('trird');
        break;
    case isFourthDecade:
        console.log('fourth');
}


let num = 7;
let isSimple = true;

for (let i = 2; i <= num - 1; i++) {
    if (num % i === 0) {
        isSimple = false;
        break;
    }
}
console.log(isSimple ? 'PROSTOE' : 'SLOJNOE')



for (let i = 2; i <= 10; i++) {
    for (let j = 2; j <= i - 1; j++) {
        if (i % j === 0) {
            console.log(j)
            break;
        }
    }
}
let Andrixmusic = 'Пидорас';

const = toMessage ('Пидорас' === 'Андрей'); {

}

console.log(Andrixmusic)