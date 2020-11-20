const Calc = (price = 100) => {

    const calcBlock = document.querySelector('.calc-block'),
        calcType = document.querySelector('.calc-type'),
        calcSquare = document.querySelector('.calc-square'),
        calcDay = document.querySelector('.calc-day'),
        totalValue = document.getElementById('total'),
        calcCount = document.querySelector('.calc-count');
    let total = 0;
    let interval;

    const countSum = () => {

        let countValue = 1;
        let dayValue = 1;
        const typeValue = calcType.options[calcType.selectedIndex].value;
        const squareValue = +calcSquare.value;


        if (calcCount.value > 1) {
            countValue += (calcCount.value - 1) / 10;
        }

        if (calcDay && calcDay.value < 5) {
            dayValue *= 2;
        } else if (calcDay && calcDay.value < 10) {
            dayValue *= 1.5;
        }


        if (typeValue && squareValue) {
            total = Math.ceil(price * typeValue * squareValue * countValue * dayValue);
        }

        // totalValue.textContent = total;
    };

    const calcAnim = () => {
        const time = 3000;
        const step = 10;

        let n = 0;
        let t = Math.round(time / (total / step));
        interval = setInterval(() => {
            n += step;
            if (n === total) {
                clearInterval(interval);
            }
            else {
                totalValue.innerHTML = n + 10;

            }
        }, t);
    };


    calcBlock.addEventListener('change', (e) => {
        const target = e.target;

        if (target.matches('select') || target.matches('input')) {
            countSum();

            clearInterval(interval);
            if (total !== 0) {
                calcAnim();
            }
        }
    });

};

export default Calc;