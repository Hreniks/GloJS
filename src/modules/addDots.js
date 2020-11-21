const addDots = () => {
    const slidesCount = document.querySelectorAll('.portfolio-item').length;

    for (let i = 0; i < slidesCount; i++) {
        let dot = document.createElement('li');
        if (i === 0) dot.classList.add('dot-active');
        dot.classList.add('dot');
        document.querySelector('.portfolio-dots').append(dot);
    }


};

export default addDots;
