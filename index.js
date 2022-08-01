
// creates a grid based upon the size given
function createGrid(gridSize){
    const container = document.querySelector('#container');

    const rowNum = gridSize;
    const colNum = gridSize;

    container.style.display = 'flex';
    container.style.justifyContent = 'center';

    for (let i = 0; i < rowNum; i++){
        let row = document.createElement('div');
        row.classList.add('row');
        row.setAttribute('id','row' + i);
        row.style.display = 'flex';
        row.style.flexDirection = 'column'
        
        let boxWidth = (window.innerHeight-150- rowNum*.25) /rowNum;    

        // console.log(boxWidth);

        for (let j = 0; j < colNum; j++) {
            let box = document.createElement('div');
            box.classList.add('box');
            box.onmouseover = function(){
                box.style.backgroundColor = 'green';
            };

            box.style.width = boxWidth + 'px';
            box.style.height = boxWidth + 'px';
            row.appendChild(box);

        }
        container.appendChild(row);
    }
}

function getGridSize(){
    gridNum = parseInt(prompt("Please the number of rows you would like the grid to be"), 10);
    console.log(gridNum);
   
    if (!isNaN(gridNum)) {
        rowNum = gridNum;
        colNum = gridNum;

        const container = document.querySelector("#container");
        while (container.firstChild) {
            container.removeChild(container.lastChild);
         }

        if (gridNum > 100){
            gridNum = 100;
        } else if (gridNum == 0){
            gridNum = 1
        }
    
        createGrid(gridNum);
    } else {
        window.alert("Please enter a number");
    }

}

// create the grid as soon as the page loads
createGrid(16)
