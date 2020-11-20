const commandImg = () => {
    const commandBlock = document.getElementById('command');
    let oldPicture;


    commandBlock.addEventListener('mouseover', (e) => {
        let target = e.target;

        if (target.classList.contains('command__photo')) {
            oldPicture = target.src;
            target.src = target.dataset.img;
        }
    });


    commandBlock.addEventListener('mouseout', (e) => {
        let target = e.target;

        if (target.classList.contains('command__photo')) {
            target.src = oldPicture;
        }
    });
};

export default commandImg;