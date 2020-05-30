

function switchColor() {
    let className = this.classList[1];

    if (className == 'white'){
        this.classList.remove('white');
        this.classList.add('yellow');
    }
    else if (className == 'yellow'){
        this.classList.remove('yellow');
        this.classList.add('red');
    }
    else if (className == 'red'){
        this.classList.remove('red');
        this.classList.add('black');
    }
    else if (className == 'black'){
        this.classList.remove('black');
        this.classList.add('blue')
    }
    else {
        this.classList.remove('blue');
        this.classList.add('white');
    }
}


for (const rect of document.querySelectorAll('.grid div')){
    rect.addEventListener('click', switchColor);
}