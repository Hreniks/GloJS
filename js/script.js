'use strict';
let money = prompt("Ваш месячный доход?", 30000);
let income = "фриланс";
let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
let deposit = confirm("Есть ли у вас депозит в банке?");
const mission = 1000000;
const period = 3;
let budgetDay = money / 30;


console.log(typeof money, typeof income, typeof deposit);
console.log('length: ', addExpenses.length);
console.log("Период равен " + period + " месяца ",`Цель заработать ${mission} долларов`);
console.log(addExpenses.toLowerCase().split(','));
console.log('budgetDay: ', budgetDay);

let exspenses1 = prompt("Введите обязательную статью расходов");
let exspenses2 = prompt("Введите обязательную статью расходов");

const amount1 = prompt("Во сколько это обойдется?");
const amount2 = prompt("Во сколько это обойдется?");

const budgetMonth = money - amount1 - amount2;
console.log("Бюджет на месяц: ", budgetMonth);
console.log("Цель будет достигнута за: ", Math.ceil(mission / budgetMonth));

budgetDay = Math.floor(budgetMonth / 30);

console.log('Бюджет на день: ', budgetDay);

budgetDay >= 1200 ? console.log("У вас высокий доход") :
budgetDay >= 600 && budgetDay < 1200 ? console.log("У вас средний уровень дохода") :
budgetDay < 600 && budgetDay >= 0 ? console.log("К сожалению у вас уровень дохода ниже среднего") :
budgetDay < 0 ? console.log("Что то пошло не так") : console.log("error");


function getExpensesMonth(amount1, amount2){
    return amount1 + amount2;
}