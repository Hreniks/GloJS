class Validator {
    constructor({ selector, pattern = {}, method }) {
        this.form = document.querySelector(selector);
        this.pattern = pattern;
        this.method = method;
        this.elementsForm = [...this.form.elements].filter(item => {
            return item.tagName.toLowerCase() !== 'button' && item.type !== 'button';
        });
        this.error = new Set();

    }

    init() {
        this.applyStyle();
        this.setPattern();
        this.elementsForm.forEach(elem => elem.addEventListener('change', this.checkIt.bind(this)));
        this.form.addEventListener('submit', e => {
            this.elementsForm.forEach(elem => this,this.checkIt({target: elem}));
            if (this.error.size){
                e.preventDefault();
            }
        });
    }

    isValid(elem){
        const validatorMethods = {
            notEmpty(elem){
                if (elem.value.trim() === '') {
                    return false;
                }
                return true;
            },
            pattern(elem,pattern){
                return pattern.test(elem.value);
            }
        };

        if (this.method){
        const method = this.method[elem.id];

        if (method){
        return method.every( item => validatorMethods[item[0]](elem, this.pattern[item[1]]));   
            }
        else {
            console.warn('Необходимо передать Id полей ввода и методы проверки этих полей');
            }
        }
            return true;
        }

        
    

    checkIt(event) {
        const target = event.target;
        if (this.isValid(target)){
            this.showSucces(target);
            this.error.delete(target);
        }
        else{
            this.showError(target);
            this.error.add(target);
        }
    }

    showError(elem) {
        elem.classList.remove('success');
        elem.classList.add('error');
        if (elem.nextElementSibling && elem.nextElementSibling.classList.contains('validator-error')){
            return;
        }
        const errorDiv = document.createElement('div');
        errorDiv.textContent = `Ошибка в этом поле`;
        errorDiv.classList.add('validator-error');
        elem.insertAdjacentElement('afterend', errorDiv);
    }

    showSucces(elem) {
        elem.classList.remove('error');
        elem.classList.add('success');

        if (elem.nextElementSibling && elem.nextElementSibling.classList.contains('validator-error')) {
            elem.nextElementSibling.remove();
        }

    }

    applyStyle() {
        const style = document.createElement('style');
        style.textContent = `
        input.sucess {
            border: 2px solid green
        }
        input.error {
            border: 2px solid red
        }
        .validator-error{
            font-size: 12px;
            font-family: sans-serief;
            color: red
        }
        `;
        document.head.appendChild(style);
    }

    setPattern(){
        this.pattern['form1-name'] ? this.pattern['form1-name'] = this.pattern : this.pattern['form1-name'] = /([А-ЯЁа-яё]+){2,}/;
        this.pattern['form1-phone'] ? this.pattern['form1-phone'] = this.pattern : this.pattern['form1-phone'] = /^\+?[78]([-()]*\d){10}$/;
        this.pattern['form1-email'] ? this.pattern['form1-email'] = this.pattern : this.pattern['form1-email'] = /^\w+@\w+\.\w{2,}$/;
    }
}