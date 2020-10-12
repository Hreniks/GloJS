let money = 30000;
let income = "фриланс";
let addExpenses = "интернет,такси,коммуналка";
let deposit = false;
let mission = 1000000;
let period = 3;
let budgetDay = money / 30;



console.log(typeof money, typeof income, typeof deposit);
console.log('length: ', addExpenses.length);
console.log("Период равен " + period + " месяца ",`Цель заработать ${mission} долларов`);
console.log(addExpenses.toLowerCase().split(','));
console.log('budgetDay: ', budgetDay);

mission = prompt("Ваш месячный доход?");
addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
deposit = confirm("Есть ли у вас депозит в банке?");