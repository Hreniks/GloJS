const toggleMenu = () => {

    // const btnMenu = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    // const closeBtn = document.querySelector('.close-btn');
    // const menuItems = menu.querySelectorAll('ul>li');
    // const menuBlock = document.querySelector('.menu-div');



    const handlerMenu = () => {
        menu.classList.toggle('active-menu');
    };




    //btnMenu.addEventListener('click', handlerMenu);
    document.body.addEventListener('click', (event) => {


        if (event.target.closest('.menu') || event.target.closest('.close-btn')) {
            handlerMenu();
        } else if (menu.classList.contains('active-menu')) {
            console.log(2);
            if (!event.target.closest('.active-menu') || event.target.hasAttribute('href')) handlerMenu();
        }

    });


    //closeBtn.addEventListener('click', handlerMenu);

    // for (let i = 0; i < menuItems.length; i++) {
    //     menuItems[i].addEventListener('click', handlerMenu);
    // }

    // menuItems.forEach(elem => elem.addEventListener('click', handlerMenu));

    //    menuItems[0].addEventListener('click', () => {
    //     document.querySelector('.service').scrollBy({behavior: 'smooth', block: 'start'});
    //    });



};

export default toggleMenu;