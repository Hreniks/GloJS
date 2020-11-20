const ScrollLinks = () => {
    const menu = document.querySelector('menu');
    const smoothLinks = menu.querySelectorAll('a[href^="#"]');
    for (let i = 1; i < smoothLinks.length; i++) {

        smoothLinks[i].addEventListener('click', e => {
            e.preventDefault();
            const id = smoothLinks[i].getAttribute('href');
            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });

    }

    const scrollBtn = document.querySelector("body > main > a");
    scrollBtn.addEventListener('click', e => {
        e.preventDefault();
        const id = scrollBtn.getAttribute('href');
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

export default ScrollLinks;