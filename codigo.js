


window.addEventListener("load", function(){  



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

  // let cont = 1;

  // contador();

  // function contador(){
    
  //   let img = document.getElementById('i' + cont);
  //   img.style.transition = 'all 0.3s ease';
  //   img.style.width = '100%';
  //   img.style.height = '100%';
  //   img.style.webkitFilter = 'brightness(40%)';


  //   let box = document.getElementById('b' + cont);
  //   box.style.flex = '1 1 50%';
  //   let text = document.querySelector("#b" + cont + " > .text"); 
  //   text.style.visibility = "visible";
    

  //   let redes = document.querySelector("#b" + cont + " > .social-icons-avatar"); 
  //   redes.style.visibility = "visible";
  //   redes.style.display = "block";
  //   if (cont == 5)
  //     cont = 1;


  //    setTimeout(saludos(img, box), 3000);


  //   cont++;



    
  // }

  // saludos();


  // function saludos(img, box){
  //   img.style.width = '200%';
  //   img.style.height = 'calc(100% - 10vh)';
  //   img.style.objectFit = 'cover';

  //   box.style.flex = '1';
  //   box.style.overflow = 'hidden';
  //   box.style.transition = '.3s';
  //   box.style.margin = '0 2%';
  //   box.style.boxShadow = '0 20px 30px rgba(0,0,0,.2)';
  //   box.style.lineHeight = '0';
  //   box.style.textAlign = 'center';
  // }





  // let btn = document.getElementsByClassName('nav__item');

  // for (let i = 0; i < btn.length; i++) {
  //   btn[i].addEventListener('click', () => window.scrollTo({
  //     behavior: 'smooth',
  //   }));
  // }






  let cont = 1;
  let boxes = document.getElementsByClassName('box');
  setTimeout(retraso1, 3000);
  function retraso1() {


    // let boxes = document.getElementsByClassName('box');
    // for (let i = 0; i < boxes.length; i++)
      // boxes[i].classList.add('box1');


      
      document.querySelector("#b" + cont).classList.add('box1');
      setTimeout(retraso2, 3000);

  }



  function retraso2(){
    document.querySelector("#b" + cont).classList.remove('box1');
    document.querySelector("#b" + cont).classList.add('box');
    cont++;
    if (cont > boxes.length)
      cont = 1;
    document.querySelector("#b" + cont).classList.add('box1');
    retraso1();
  };







  // MUSICA DE FONDO
  document.getElementById('music').loop =true;
  let musicaIniciada = true;
  document.getElementById('boton_volumen').addEventListener('click', function() {
    if (musicaIniciada == true){
      document.getElementById('altavoz').src = 'img/altavoz_sin_sonido.png';
      document.getElementById('music').pause();
      musicaIniciada = false;
    }else{
      document.getElementById('altavoz').src = 'img/altavoz_sonido.png';
      document.getElementById('music').play();
      musicaIniciada = true;
    }
  });




  // Carga un sonido a través de su fuente y lo inyecta de manera oculta
  // const cargarSonido = function () {
  //   const sonido = document.createElement("audio");
  //   sonido.src = 'musica_fondo.mp3';
  //   sonido.setAttribute("preload", "auto");
  //   sonido.setAttribute("controls", "none");
  //   sonido.style.display = "none";
  //   document.body.appendChild(sonido);
  //   return sonido;
  // };

  // // Inicia el sonido de fondo al entrar en la pagina
  // let pagina = document.querySelector("html");
  // const audioInicio = cargarSonido("audios/pantallaInicio.mp3");
  // pagina.addEventListener('mouseenter', function() {
  //     audioInicio.play();
  // });
  // // Para el sonido al salir de la pagina
  // pagina.addEventListener('mouseleave', function() {
  //     audioInicio.pause();
  // });




});




  // // MUSICA DE FONDO DE LA WEB
  // let music = new Audio('musica_fondo.mp3');
  // music.play();
  // music.loop =true;
  // music.playbackRate = 2;


  // let pagina = document.querySelector("html");
  // pagina.addEventListener('mouseenter', function() {
  //   music.play();
  // });




