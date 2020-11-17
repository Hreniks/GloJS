const filterByType = (type, ...values) => values.filter(value => typeof value === type),//проверяем тип данных

	hideAllResponseBlocks = () => {//скрывает все блоки
		const responseBlocksArray = Array.from(document.querySelectorAll('div.dialog__response-block'));//создает массив из коллекции
		responseBlocksArray.forEach(block => block.style.display = 'none');//для каждого элемента в массиве скрой этот элемент
	},

	showResponseBlock = (blockSelector, msgText, spanSelector) => {//показать овтетный блок
		hideAllResponseBlocks();//скрой все блоки
		document.querySelector(blockSelector).style.display = 'block';//покажи блок
		if (spanSelector) {//если есть 3 аргумент
			document.querySelector(spanSelector).textContent = msgText;//установи текст
		}
	},

	showError = msgText => showResponseBlock('.dialog__response-block_error', msgText, '#error'),//показать блок ошибки

	showResults = msgText => showResponseBlock('.dialog__response-block_ok', msgText, '#ok'),//показать блок 'ok'

	showNoResults = () => showResponseBlock('.dialog__response-block_no-results'),//показать пустой блок

	tryFilterByType = (type, values) => {
		try {//выполняем код
			const valuesArray = eval(`filterByType('${type}', ${values})`).join(", ");//запустить код и сформировать в строку
			const alertMsg = (valuesArray.length) ?//если массив не пустой
				`Данные с типом ${type}: ${valuesArray}` ://значения с селекта и массива
				`Отсутствуют данные типа ${type}`;//если пустой то это
			showResults(alertMsg);//показываем блок ок и текст
		} catch (e) {//ловим ошибки
			showError(`Ошибка: ${e}`);//показываем ошибку
		}
	};

const filterButton = document.querySelector('#filter-btn');//получаем кнопку

filterButton.addEventListener('click', e => {//навешиваем событие кнопке
	const typeInput = document.querySelector('#type');//получаем select
	const dataInput = document.querySelector('#data');//получаем input

	if (dataInput.value === '') {//если инпут пустой
		dataInput.setCustomValidity('Поле не должно быть пустым!');//вывод сообщения
		showNoResults();//показать пустой блок
	} else {//иначе
		dataInput.setCustomValidity('');
		e.preventDefault();//отменяем дефолтное поведение
		tryFilterByType(typeInput.value.trim(), dataInput.value.trim());//вызываем функцию с параметрами
	}
});

