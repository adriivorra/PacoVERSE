//CODIGO TEXTO MÁQUINA DE ESCRIBIR
const text = document.getElementById("animate-text");
let str = text.innerHTML;
text.innerHTML = "";

const speed = 140;
let i = 0;

const typeWriter = () => {
  if (i < str.length) {
    text.innerHTML += str.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
};

setTimeout(typeWriter, speed);




//CODIGO POPUP
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');
let boton = document.getElementById('boton-popup');

boton.addEventListener('click', () => {
    popup.style.display = 'block';
});

close.addEventListener('click', () => {
    popup.style.display = 'none';
});

popup.addEventListener('click', e => {
    // console.log(e);
    if(e.target.className === 'popup-wrapper') {
        popup.style.display = 'none';
    }
});

let cont = 1;
setInterval('contador()',1000);


function contador(){

  let accion = document.getElementById('p' + cont);
  accion.style.transition = 'all 0.3s ease';
  accion.style.with = '100%';
  accion.style.height = '100%';
  cont++;
  if (cont == 5)
    cont = 1;

  
}





