let money = prompt("Ваш бюджет на месяц ? ");
let time = prompt("Введите дату в формате YYYY - MM - DD, 2019 - 09 - 24");
console.log(money);
console.log(time);
let state = prompt("Введите обязательную статью расходов в этом месяце");
let rasxod = prompt("Во сколько обойдется?");
let income = [];

let appData = {
    bujet: money,
    timeData: time,
    expenses: {
        money: rasxod,
    },
    optionalExpenses: income,
    savings: false
}
alert([money / 30]);
console.log(appData);