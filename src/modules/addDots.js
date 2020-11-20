const addDots = () => {
    const slidesCount = document.querySelectorAll('.portfolio-item').length;

    for (let i = 0; i < slidesCount; i++) {
        let dot = document.createElement('li');
        dot.classList.add('dot');
        document.querySelector('.portfolio-dots').append(dot);
    }


};

export default addDots;
