const validationCalc = () => {
    const calcBlock = document.querySelector('.calc');

    calcBlock.addEventListener('input', (e) => {
        if (e.target.classList.contains('calc-item') && !e.target.classList.contains('calc-type')) {
            e.target.value = e.target.value.replace(/\D/g, '');
        }
    });
};

export default validationCalc;