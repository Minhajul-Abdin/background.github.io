const butt = document.getElementById('btn');

butt.addEventListener('click', () => {
    document.body.style.background = random1();
    console.log(random1());

});

function random1(){
    return `hsl(${Math.floor(Math.random() * 360)}, 100% ,50% `;
}