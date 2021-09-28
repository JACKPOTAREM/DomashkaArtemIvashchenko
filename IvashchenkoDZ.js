let age = 18;
if (age >= 14 && age <= 90) {
    console.log('В диапазоне')
} else {
    console.log('Не в диапазоне')
}






{
    let age = 91;
    if (!(age >= 14 && age <= 90))
        console.log('Не в диапазоне')
    else
        console.log('В диапазоне')
}







{
    let a = 4, b = 1;
    let result = (a + b < 4) ? 'Мало' : 'Много';
    console.log(result);
}


{
    let age = 14
    if (age >= 18) {
        console.log("Совершеннолетний")
    } else {
        console.log("Не совершеннолетний")
    }
}



{
    for (let count = 2; count < 11; count += 2) {
        console.log(count);
    }
}







{
    let login = 'Директор';
    let message = (login === 'Сотрудник') ? 'Привет' :
        (login === 'Директор') ? 'Здравствуйте' :
            (login === '') ? 'Нет логина' :
                '';
    console.log(message);
}

{
    let browser = 'Safari'

    if (browser === 'Edge') {
        console.log('You`ve got the Edge!')
    } else if (browser === 'Chrome'
        || browser === 'Firefox'
        || browser === 'Safari'
        || browser === 'Opera') {
        console.log('Okay we support these browsers too')
    } else {
        console.log('We hope that this page looks ok!')
    }
}




{
    let str = prompt('Kto tam?');
    console.log(str);
    const declined  = 'Отменено';
    switch (str) {
        case null:
            alert(declined);
            break;
        case 'Админ':
            let password = prompt('Password: ');
            switch (password) {
                case null:
                    alert(declined);
                    break;
                case 'Я главный':
                    alert('Здравсвуйте');
                    break;
                default:
                    alert('Неверный пароль');
            }
            break;
        default:
            alert('Я вас не знаю'); /// Через HTML
    }
}





{
    const number = +prompt('Введите число между 0 и 3', '');

    switch (number) {
        case 0:
            alert('Вы ввели число 0');
            break;

        case 1:
            alert('Вы ввели число 1');
            break;

        case 2:
        case 3:
            alert('Вы ввели число 2, а может и 3');  /// Через HTML
            break;
    }
}






{
    let day = 31;

    if (day >= 1 && day <= 10) {
        alert('Попал в первую декаду');
    }
    else if (day >= 11 && day <= 20) {
        alert('Попал во вторую декаду');
    }
    else if (day >= 21 && day <= 31) {
        alert('попал в третью декаду'); /// Через HTML
    }
}

{
    let month = 6;

    if(month >= 1 && month <= 3) {
        alert('Зима');
    }
    else if (month >= 4 && month <= 6) {
        alert('Весна');
    }
    else if (month >= 7 && month <= 9) {
        alert('Лето');
    }
    else if (month >= 10 && month <= 12) {
        alert('Осень'); /// Через HTML
    }

}

{

    let min = 22;

    if (min >= 0 && min <= 14) {
        alert('Первая четверть');
    }

    else if (min >= 15 && min <= 30) {
        alert('Вторая четверть');
    }

    else if (min >= 31 && min <= 45) {
        alert('Третья четверть');
    }

    else if (min >= 46 && min <= 59) {
        alert('Четвертая четверть'); /// Через HTML
    }
}


{
    let i = 0;
    while (i < 3) {
        alert( `number ${i}!` );
        i++; /// Через HTML
    }
}
