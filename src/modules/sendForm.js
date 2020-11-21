
const sendForm = () => {
    const errorMessage = `Что то пошло не так...`,
        loadMessage = `Загрузка...`,
        successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

    const form1 = document.getElementById('form1');
    const form2 = document.getElementById('form2');
    const form3 = document.getElementById('form3');
    const form1Inputs = form1.querySelectorAll('input');
    const form2Inputs = form2.querySelectorAll('input');
    const form3Inputs = form3.querySelectorAll('input');

    const statusMessage = document.createElement('div');
    //statusMessage.textContent = 'текст';
    //statusMessage.style.cssText = `font-size: 2rem`;
    //statusMessage.style.cssText = `color: #ffff`;




    function addAnimation(body, form) {
        statusMessage.textContent = '';
        statusMessage.classList.add('sk-rotating-plane');
        statusMessage.style.cssText = `
        width: 4em;
        height: 4em; 
        margin: auto;
        background-color: #337ab7; 
        -webkit-animation: sk-rotating-plane 1.2s infinite ease-in-out;
        animation: sk-rotating-plane 1.2s infinite ease-in-out;
    `;

        let dynamicStyles = null;
        if (!dynamicStyles) {
            dynamicStyles = document.createElement('style');
            dynamicStyles.type = 'text/css';
            dynamicStyles.classList.add('dinamic-styles');
            form.appendChild(dynamicStyles);
        }

        dynamicStyles.sheet.insertRule(body, dynamicStyles.length);



    }

    function validateEmail(email) {
        const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        return re.test(String(email).toLowerCase());
    }

    const hideAnim = () => {
        document.querySelector('.dinamic-styles').remove();
        statusMessage.removeAttribute('style');

        statusMessage.style.color = '#ffff';
        statusMessage.textContent = successMessage;


        const interval = setTimeout(() => {
            statusMessage.classList.remove('sk-rotating-plane');
            statusMessage.remove();
            statusMessage.textContent = '';
            clearTimeout(interval);
        }, 5000);
    };



    form1.addEventListener('submit', event => {
        event.preventDefault();



        form1.appendChild(statusMessage);
        const form1Data = new FormData(form1);
        const body = {};

        form1Data.forEach((val, key) => {
            body[key] = val;
        });

        if (form1.querySelector('.form-phone').value.length < 10){
            statusMessage.textContent = 'Введите корректный телефон';
            statusMessage.style.color = 'red';
            return;
        }
        else if (validateEmail(form1.querySelector('.form-email').value) !== true) {
            statusMessage.textContent = 'Введите корректный e-mail';
            statusMessage.style.color = 'red';
            return;
        } else postData(body)
            .then(response => {
               hideAnim();
                if (response.status !== 200) {
                    throw new Error('status network not 200');
                }
            })
            .catch(error => console.error(error));


        addAnimation(`
            @keyframes sk-rotating-plane {
            0% {
              transform: perspective(120px) rotateX(0deg) rotateY(0deg);
            }
            50% {
              transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
            }
            100% {
              transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
            }
          }
            `, form1);
        // if (form1.querySelector('.form-phone').value){
        //     let re = /^\d[\d\(\)\ -]{4,14}\d$/;
        //     let valid = re.test(form1.querySelector('.form-phone').value);
        //     if (!valid){
        //         statusMessage.textContent = 'Номер телефона введен не правильно!';
        //     }
        // }
        // else {
        //     event.preventDefault();
        //     statusMessage.textContent = `Введите телефон!`;
        // }



        form1Inputs.forEach(item => {
            item.value = '';
        });

    });

    const formValid = name => {
        const form = document.getElementById(name);
        form.addEventListener('input', e => {
            if (e.target.classList.contains('form-phone')) {
                e.target.value = e.target.value.replace(/[^+0-9]/ig, '');
                e.target.value = e.target.value.replace(/\+{1,}/ig, '+');
                e.target.value = e.target.value.replace(/\d{1}\+/ig, e.target.value[0]);
                e.target.value = e.target.value.replace(/\+\d{1,}\+/ig, e.target.value.substring(e.target.value.indexOf('+'), e.target.value.length - 1));
                if (/^8/ig.test(e.target.value)) {
                    const validPhone = e.target.value.substring(e.target.value.indexOf('8'), e.target.value.length - 1);
                    if (e.target.value.length > 11) {
                        e.target.value = e.target.value.replace(e.target.value, validPhone);
                    }
                } else if (/^\+/ig.test(e.target.value)) {

                    const plusPhone = e.target.value.substring(e.target.value.indexOf('+'), e.target.value.length - 1);
                    if (e.target.value.length > 12) {
                        e.target.value = e.target.value.replace(e.target.value, plusPhone);
                    }
                }
            }
            if (e.target.classList.contains('form-name')) {
                e.target.value = e.target.value.replace(/[^а-яё\s]/ig, '');
            }

            if (e.target.classList.contains('mess')) {
                e.target.value = e.target.value.replace(/[^а-яё\.-.?!)(,:;'\s]/ig, '');
            }

            if (e.target.classList.contains('form-email')) {


                const stringMail = e.target.value.substring(e.target.value.indexOf('@'), e.target.value.length - 1);
                if (/@[\w\-*+*=*#*$*]{10,}/ig.test(e.target.value)) {
                    e.target.value = e.target.value.replace(/@[\w.\-+=#$*]{10,}/ig, stringMail);
                }

                const stringDomen = e.target.value.substring(e.target.value.lastIndexOf('.'), e.target.value.length - 1);
                if (/\.{1}\w{5,}/.test(e.target.value)) {
                    e.target.value = e.target.value.replace(/\.{1}\w{6,}/ig, stringDomen);
                }


            }
        });
    };



    form2.addEventListener('submit', e => {
        e.preventDefault();

        form2.appendChild(statusMessage);
        //statusMessage.textContent = loadMessage;

        const form2Data = new FormData(form2);
        const body = {};

        form2Data.forEach((val, key) => {
            body[key] = val;
        });

        if (form2.querySelector('.form-phone').value.length < 10){
            statusMessage.textContent = 'Введите корректный телефон';
            statusMessage.style.color = 'red';
            return;
        }
        else if (validateEmail(form2.querySelector('.form-email').value) !== true) {
            statusMessage.textContent = 'Введите корректный e-mail';
            statusMessage.style.color = 'red';
            return;
        } else postData(body)
            .then(response => {
                hideAnim();
                if (response.status !== 200) {
                    throw new Error('status network not 200');
                }
            })
            .catch(error => console.error(error));


        addAnimation(`
    @keyframes sk-rotating-plane {
    0% {
      transform: perspective(120px) rotateX(0deg) rotateY(0deg);
    }
    50% {
      transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
    }
    100% {
      transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
    }
  }
    `, form2);
        form2Inputs.forEach(item => {
            item.value = '';
        });
    });


    form3.addEventListener('submit', e => {
        e.preventDefault();

        form3.appendChild(statusMessage);

        // statusMessage.textContent = loadMessage;

        const form3Data = new FormData(form3);
        const body = {};

        form3Data.forEach((val, key) => {
            body[key] = val;
        });

        if (form3.querySelector('.form-phone').value.length < 10){
            statusMessage.textContent = 'Введите корректный телефон';
            statusMessage.style.color = 'red';
            return;
        }
        else if (validateEmail(form3.querySelector('.form-email').value) !== true) {
            statusMessage.textContent = 'Введите корректный e-mail';
            statusMessage.style.color = 'red';
            return;
        } else postData(body)
            .then(response => {
                hideAnim();
                if (response.status !== 200) {
                    throw new Error('status network not 200');
                }
            })
            .catch(error => console.error(error));

        addAnimation(`
            @keyframes sk-rotating-plane {
            0% {
              transform: perspective(120px) rotateX(0deg) rotateY(0deg);
            }
            50% {
              transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
            }
            100% {
              transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
            }
          }
            `, form3);

        form3Inputs.forEach(item => {
            item.value = '';
        });

        const timeout = setTimeout(() => {
            document.querySelector('.popup').style.display = 'none';
            statusMessage.remove();
            clearTimeout(timeout);
        }, 5000);
    });

    formValid('form1');
    formValid('form2');
    formValid('form3');

    const postData = body =>

        fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(body)
        })

    // return new Promise((resolve,reject) => {
    // const request = new XMLHttpRequest();
    // request.addEventListener('readystatechange', () => {
    //     if (request.readyState !== 4) {
    //         return;
    //     }

    //     if (request.status === 200) {
    //         resolve();
    //     }
    //     else {
    //         reject(request.status);
    //     }
    // });
    // request.open('POST', './server.php');
    // request.setRequestHeader('Content-Type', 'application/json');

    // request.send(JSON.stringify(body));
    // });
    ;
};

export default sendForm;
