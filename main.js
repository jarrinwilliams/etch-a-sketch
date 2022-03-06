// button that makes the 16 grid
const sixteenBtn = document.querySelector("._16btn");
sixteenBtn.addEventListener('click', function(e) {
    deleteGrid();
    for (let i = 0; i < 256; i++) {
        const square = document.createElement('div');
        square.classList.add('_16sketchBlock');
        document.querySelector('.sketchContainer').appendChild(square);

    }
    })
//button for normal mode which is just gray
const normalBtn = document.querySelector('.normalBtn');
normalBtn.addEventListener('click', function(e) {
    const sketchContainer = document.querySelector('.sketchContainer');
    const sketchBlocks = sketchContainer.childNodes
    sketchBlocks.forEach((sketchBlock) => {
        sketchBlock.addEventListener('mouseover', function(e) {
            sketchBlock.style.background = '#a9a9a9';
        })
})
})
//button for rainbow mode where a random color is generated
const rainbowBtn = document.querySelector('.rainbowBtn');
rainbowBtn.addEventListener('click', function(e) {
    const sketchContainer = document.querySelector('.sketchContainer')
    const sketchBlocks = sketchContainer.childNodes
    sketchBlocks.forEach((sketchBlock) => {
        sketchBlock.addEventListener('mouseover', function(e) {
            sketchBlock.style.background = generateRandomColor();
        })
    })
})
//clear button
const clearBtn = document.querySelector('.clearBtn');
clearBtn.addEventListener('click', function(e) {
    const sketchContainer = document.querySelector('.sketchContainer');
    const sketchBlocks = sketchContainer.childNodes;
    sketchBlocks.forEach((block) => {
        block.style.background = 'white';
    })
}
);
// button for 64 grid
const sixtyFourBtn = document.querySelector('._64btn');
sixtyFourBtn.addEventListener('click', function(e) {
    deleteGrid();
    for (let i = 0; i < 4096; i++) {
        const square = document.createElement('div');
        square.classList.add('_64sketchBlock')
        document.querySelector('.sketchContainer').appendChild(square);

    }
})
//makes the grid making buttons delete squares if they are present so they cannot overlap
function deleteGrid() {
    const sketchContainer = document.querySelector('.sketchContainer')
    const sketchBlocks = sketchContainer.childNodes;
    if (sketchBlocks.length === 0) {
        return
    } else {
        for (let i = sketchBlocks.length - 1; i >= 0; i--) {
            sketchContainer.removeChild(sketchBlocks[i]);
        }
    }
}
//function to generate a random color
function generateRandomColor() {
    const randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}
//button for 100x100 grid
const hundredBtn = document.querySelector("._100btn");
hundredBtn.addEventListener('click', function(e) {
    deleteGrid();
    for (let i = 0; i < 10000; i++) {
        const square = document.createElement('div');
        square.classList.add('_100sketchBlock');
        document.querySelector('.sketchContainer').appendChild(square);

    }
    })

