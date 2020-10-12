let money = 30000;
let income = "фриланс";
let addExpenses = "интернет,такси,коммуналка";
let deposit = false;
let mission = 1000000;
let period = 3;
var budgetDay = money/ 30;



console.log(typeof money, typeof income, typeof deposit);
console.log('length: ', addExpenses.length);
console.log("Период равен " + period + " месяца ",`Цель заработать ${mission} долларов`);
console.log(addExpenses.toLowerCase().split(','));
console.log('budgetDay: ', budgetDay);

money = prompt("Ваш месячный доход?", 30000);
addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
deposit = confirm("Есть ли у вас депозит в банке?");

let exspenses1 = prompt("Введите обязательную статью расходов");
let exspenses2 = prompt("Введите обязательную статью расходов");

let amount1 = prompt("Во сколько это обойдется?");
let amount2 = prompt("Во сколько это обойдется?");

var budgetMonth = money - amount1 - amount2;
console.log("Бюджет на месяц: ", budgetMonth);
console.log("Цель будет достигнута за: ", Math.ceil(mission / budgetMonth));
budgetDay = Math.floor(budgetMonth / 30);
console.log('Бюджет на день: ', budgetDay);

budgetDay > 1200 ? console.log("У вас высокий доход") :
budgetDay > 600 && budgetDay < 1200 ? console.log("У вас средний уровень дохода") :
budgetDay < 600 && budgetDay > 0 ? console.log("К сожалению у вас уровень дохода ниже среднего") :
budgetDay < 0 ? console.log("Что то пошло не так") : 
budgetDay === 1200 ? console.log("Какой-то доход") : 
budgetDay === 600 ? console.log("Какой-то доход") :
budgetDay === 0 ? console.log("Все очень плохо") : console.log('error');