const text = document.getElementById("animate-text");
let str = text.innerHTML;
text.innerHTML = "";

const speed = 140;
let i = 0;

//Esta función recorre todos los caracteres nuestro texto
const typeWriter = () => {
  if (i < str.length) {
    text.innerHTML += str.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
};

//Ejecutamos la función
setTimeout(typeWriter, speed);







