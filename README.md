#etch-a-sketch
UI -
black background, with a simple container with buttons and the grid on it, buttons that can change the size of the grid and a button that clears the grid entirely

function - fill the grid with as many square divs as the user inputs, when user mouse hovers over the square div, it changes colors to a grey
-grid container is 700x700 so 16x16 is gonna need 4.375rem
64x64 is 1.09375rem
-a way to remove my grid divs
for (let i = sketchBlocks.length - 1; i >= 0; i--) {
        sketchContainer.removeChild(sketchBlocks[i]);
    }
