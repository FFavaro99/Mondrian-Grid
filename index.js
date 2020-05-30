

function switchColor() {
    let className = this.classList[1];


    switch (className){
        case 'white':
            this.classList.remove('white');
            this.classList.add('yellow');
            break;
        case 'yellow':
            this.classList.remove('yellow');
            this.classList.add('red');
            break;
        case 'red':
            this.classList.remove('red');
            this.classList.add('black');
            break;
        case 'black':
            this.classList.remove('black');
            this.classList.add('blue');
            break;
        default:
            this.classList.remove('blue');
            this.classList.add('white');
    }
}


for (const rect of document.querySelectorAll('.grid div')){
    rect.addEventListener('click', switchColor);
}