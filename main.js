
but
const sixteenBtn = document.querySelector("._16btn");
sixteenBtn.addEventListener('click', function(e) {
    for (let i= 0; i < 256; i++) {
        const square = document.createElement('div');
        square.classList.add('_16sketchBlock');
        document.querySelector('.sketchContainer').appendChild(square);

    }
    const sketchBlocks = document.querySelectorAll('._16sketchBlock');
    sketchBlocks.forEach((sketchBlock) => {
        sketchBlock.addEventListener('mouseover', function(e) {
            sketchBlock.style.background = '#a9a9a9';
            sketchBlock.style.borderColor = 'black';
    })
})
sixteenBtn.disabled = true;
});
//clear button
const clearBtn = document.querySelector('.clearBtn');
clearBtn.addEventListener('click', function(e) {
    const sketchContainer = document.querySelector('.sketchContainer');
    const sketchBlocks = sketchContainer.childNodes;
    sketchBlocks.forEach((block) => {
        block.style.background = 'white';
    })
    for (let i = sketchBlocks.length - 1; i >= 0; i--) {
        sketchContainer.removeChild(sketchBlocks[i]);
    }
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.disabled = false;
    })
}
);


