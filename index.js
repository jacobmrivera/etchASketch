const container = document.querySelector('#container');

const rowNum = 16;
const colNum = 16;

container.style.display = 'flex';
container.style.justifyContent = 'center';

for (let i = 0; i < rowNum; i++){
    let row = document.createElement('div');
    row.classList.add('row');
    row.setAttribute('id','row' + i);
    row.style.display = 'flex';
    row.style.flexDirection = 'column'
    

    // console.log('row' + i)

    for (let j = 0; j < colNum; j++) {
        let box = document.createElement('div');
        box.classList.add('box');
        box.onmouseover = function(){
            box.style.backgroundColor = 'green';
        };
        row.appendChild(box);

    }

    container.appendChild(row);

}