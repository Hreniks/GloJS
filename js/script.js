"use strict";
const money = prompt("Ваш месячный доход?", 30000);
const income = "Фриланс";
const addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую", "интернет, такси, коммуналка");
const deposit = confirm("Есть ли у вас депозит в банке?");
const mission = 1000000;
const period = 3;
const exspenses1 = prompt("Введите обязательную статью расходов");
const exspenses2 = prompt("Введите обязательную статью расходов");
const amount1 = prompt("Во сколько это обойдется?");
const amount2 = prompt("Во сколько это обойдется?");

const showTypeOf = function(data){
    console.log(data, typeof(data));
};

function getExpensesMonth(){
    return Number(amount1) + Number(amount2);
}

function getAccumulatedMonth(){
    return Number(money) - getExpensesMonth();
}

const accumulatedMonth = getAccumulatedMonth();
const budgetDay = Math.floor(accumulatedMonth / 30);

function getTargetMonth(){
    return Math.ceil(mission / accumulatedMonth);
}

const getStatusIncome = function(){
    if (budgetDay >= 1200)
    { return console.log("У вас высокий доход");}
    else if (budgetDay >= 600 && budgetDay < 1200){ return console.log("У вас средний уровень дохода");}
    else if (budgetDay < 600 && budgetDay >= 0){ return console.log("К сожалению у вас уровень дохода ниже среднего");}
    else if (budgetDay < 0){ return console.log("Что то пошло не так");}
    else {return console.log("error");}
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

console.log("Расходы за месяц: ", getExpensesMonth());
console.log(addExpenses.toLowerCase().split(','));
console.log("Cрок достижения цели в месяцах: ", getTargetMonth());
console.log('Бюджет на день: ', budgetDay);
getStatusIncome();
