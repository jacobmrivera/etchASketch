const container = document.querySelector('#container');

const rowNum = 64;
const colNum = 64;

container.style.display = 'flex';
container.style.justifyContent = 'center';

for (let i = 0; i < rowNum; i++){
    let row = document.createElement('div');
    row.classList.add('row');
    row.setAttribute('id','row' + i);
    row.style.display = 'flex';
    row.style.flexDirection = 'column'
    

    // console.log('row' + i)
    
    let boxWidth = (window.innerHeight-150) /rowNum;
    // boxWidth = container.height / rowNum;
    // let boxHeight = screen.hieght / colNum;

    console.log(boxWidth);

    for (let j = 0; j < colNum; j++) {
        let box = document.createElement('div');
        box.classList.add('box');
        box.onmouseover = function(){
            box.style.backgroundColor = 'green';
        };

        
        // box.style.width = boxWidth + 'px';
        // box.style.height = boxHeight + 'px';
        // console.log('${boxWidth}');
        box.style.width = boxWidth + 'px';
        box.style.height = boxWidth + 'px';
        row.appendChild(box);

    }

    container.appendChild(row);

}