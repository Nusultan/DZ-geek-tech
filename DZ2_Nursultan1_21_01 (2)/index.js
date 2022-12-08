var number = prompt('Светафор! (Красный, Желтый, Зелёный)');

switch (number) {
    case 'Красный':
        alert('Стоп!')
        break
    case 'Желтый':
        alert('Приготовься')
        break
    case 'Зелёный':
        alert('Вперед')
        break
    default:
        alert('Нужно написать цвет например (Красный, Желтый, Зелёный)')
}


