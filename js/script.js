const filterByType = (type, ...values) => values.filter(value => typeof value === type),//`стрелочная функция принимающая 2 параметра,values разбивается на отдельные элементы,в фильтре проверяем тип данных

	hideAllResponseBlocks = () => {//задаем функцию которая будет скрывать все блоки
		const responseBlocksArray = Array.from(document.querySelectorAll('div.dialog__response-block'));//в переменную задается новый массив из коллекции querySelectorAll
		responseBlocksArray.forEach(block => block.style.display = 'none');//для каждого элемента в массиве меняем свойство видимости этого элемента, меняя значение свойства display на 'none'
	},

	showResponseBlock = (blockSelector, msgText, spanSelector) => {//задаем функцию которая покажет овтетный блок
		hideAllResponseBlocks();//функция скрывающая все блоки
		document.querySelector(blockSelector).style.display = 'block';//через querySelector находится блок который был передан в аргументе и меняется его свойство видимости, элемент становится блочным
		if (spanSelector) {//если есть 3 аргумент
			document.querySelector(spanSelector).textContent = msgText;//querySelector найдет этот элемент и изменит его текст
		}
	},

	showError = msgText => showResponseBlock('.dialog__response-block_error', msgText, '#error'),//показать блок ошибкию и выведет ошибку

	showResults = msgText => showResponseBlock('.dialog__response-block_ok', msgText, '#ok'),//показать блок успешной работы и выведет сообщение

	showNoResults = () => showResponseBlock('.dialog__response-block_no-results'),//показать пустой блок

	tryFilterByType = (type, values) => {//функция с 2 параметрами
		try {//используем конструкцию try catch для отлавливания ошибок
			const valuesArray = eval(`filterByType('${type}', ${values})`).join(", ");//запускаем код в виде строки(???) затем метод join формирует строку через ,
			const alertMsg = (valuesArray.length) ?//если массив не пустой
				`Данные с типом ${type}: ${valuesArray}` ://значения с селекта и массива подставляем
				`Отсутствуют данные типа ${type}`;//в противном случае выводим
			showResults(alertMsg);//показывает результат
		} catch (e) {//ловим ошибки
			showError(`Ошибка: ${e}`);//если в try ошибка показываем ее
		}
	};

const filterButton = document.querySelector('#filter-btn');//получаем кнопку по id 

filterButton.addEventListener('click', e => {//навешиваем событие по нажатию на кнопку
	const typeInput = document.querySelector('#type');//получаем select по id
	const dataInput = document.querySelector('#data');//получаем input по id

	if (dataInput.value === '') {//если инпут пустой
		dataInput.setCustomValidity('Поле не должно быть пустым!');//кастомная валидация выводит сообщение 
		showNoResults();//показать пустой блок
	} else {//если инпут не пустой
		dataInput.setCustomValidity('');// не показываеть сообщение о пустоте инпута
		e.preventDefault();//отменяем дефолтное поведение
		tryFilterByType(typeInput.value.trim(), dataInput.value.trim());//вызываем функцию передаем параметры предварительно очистив от пробелов с лева и справа
	}
});

