// Card Sliders for Just Stream it

let cardContainers = [...document.querySelectorAll('.card_container')];
let preBtns = [...document.querySelectorAll('.pre_btn')];
let nextBtns = [...document.querySelectorAll('.next_btn')];

cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nextBtns[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth - 1000;
    })

    preBtns[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth + 1000;
    })
})