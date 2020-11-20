 const togglePopUp = () => {
        const popup = document.querySelector('.popup');
        const popupBtn = document.querySelectorAll('.popup-btn');
        const popUpClose = document.querySelector('.popup-close');
        const popupContent = document.querySelector('.popup-content');
        const popupInputs = document.getElementById('form3').querySelectorAll('input');

        popUpClose.addEventListener('click', () => {
            popup.style.display = 'none';
            popupInputs.forEach((item) =>{
                item.value = '';
            });
        });

        const showPopup = () => {
            popup.style.display = 'block'; // показать попап
            if (window.innerWidth > 768) { // если ширина экрана больше заданного числа, то запустить анимацию
                const start = Date.now(); // получить стартовое время анимации (в момент клика)
                const timer = setInterval(() => {
                    const timePassed = Date.now() - start; // запуск таймера, отнять от текущего реального времени стартовое время, после клика
                    if (timePassed >= 800) {
                        clearInterval(timer); // если время достигло определенного числа удалить setInterval
                        return;
                    }
                    draw(timePassed); // отрисовка анимации
                });
                const draw = timePassed => {
                    let wContent = +getComputedStyle(popupContent).width.split('px')[0]; // получить стили попап контента (блок с самой формой, а не вся обёртка, с попап )
                    wContent = -wContent / 2 + 50 + 'px'; // данные для центрирования по горизонтали
                    popupContent.style.left = timePassed / 16 + '%'; // центрирование по горизонтали
                    popupContent.style.marginLeft = wContent; // центрирование по горизонтали
                };
            }
        };

        popupBtn.forEach(elem => {
            elem.addEventListener('click', showPopup);
        });

    };

export default togglePopUp;