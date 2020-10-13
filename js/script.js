"use strict";
const money = prompt("Ваш месячный доход?", 30000);
const income = "Фриланс";
const addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую", "интернет, такси, коммуналка");
const deposit = confirm("Есть ли у вас депозит в банке?");
const mission = 1000000;
const period = 3;
const amount1 = prompt("Во сколько это обойдется?");
const amount2 = prompt("Во сколько это обойдется?");

let showTypeOf = function(data){
    console.log(data, typeof(data));
}

function getExpensesMonth(){
    return Number(amount1) + Number(amount2);
}

function getAccumulatedMonth(){
    return Number(money) - getExpensesMonth();
}

const accumulatedMonth = getAccumulatedMonth();
let budgetDay = accumulatedMonth / 30;

function getTargetMonth(){
    return Math.ceil(mission / accumulatedMonth);
}

let getStatusIncome = function(){
    if (budgetDay < 300) {
        return ('Низкий уровень дохода');
    } else if (budgetDay <= 800) {
        return ('Средний уровень дохода');
    } else { return ('Высокий уровень дохода');} 
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

console.log("Расходы за месяц: ", getExpensesMonth());
console.log(addExpenses.toLowerCase().split(','));
console.log("Cрок достижения цели в месяцах: ", getTargetMonth());
console.log('Бюджет на день: ', budgetDay);
console.log(getStatusIncome());

// console.log(typeof money, typeof income, typeof deposit);
// console.log('length: ', addExpenses.length);
// console.log("Период равен " + period + " месяца ",`Цель заработать ${mission} долларов`);
// 

// const exspenses1 = prompt("Введите обязательную статью расходов");
// const exspenses2 = prompt("Введите обязательную статью расходов");



// console.log("Бюджет на месяц: ", budgetMonth);
// console.log("Цель будет достигнута за: ", Math.ceil(mission / budgetMonth));

// budgetDay = Math.floor(budgetMonth / 30); 

// budgetDay >= 1200 ? console.log("У вас высокий доход") :
// budgetDay >= 600 && budgetDay < 1200 ? console.log("У вас средний уровень дохода") :
// budgetDay < 600 && budgetDay >= 0 ? console.log("К сожалению у вас уровень дохода ниже среднего") :
// budgetDay < 0 ? console.log("Что то пошло не так") : 
// console.log("error");
