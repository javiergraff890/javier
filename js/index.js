
const miDiv = document.getElementById('divImagen1');
var h2Element = document.getElementById('subtituloHuang');

miDiv.addEventListener('mouseout', function() {
    miDiv.style.transition = 'opacity 1s ease';
    miDiv.style.opacity = '0.7';

    if (window.innerWidth > 768){
      h2Element.classList.remove("fuente52");
      h2Element.classList.add("fuente5");
    }
  });
  
miDiv.addEventListener('mouseover', function() {
    miDiv.style.transition = 'opacity 1s ease';
    miDiv.style.opacity = '1';
    
    if (window.innerWidth > 768){
      h2Element.classList.remove("fuente5");
      h2Element.classList.add("fuente52");
    }

  });


const miDiv2 = document.getElementById('divImagen2');
var h2Element2 = document.getElementById('subtituloBah');
  miDiv2.addEventListener('mouseout', function() {
    miDiv2.style.transition = 'opacity 1s ease';
    miDiv2.style.opacity = '0.7';
    
    if (window.innerWidth > 768){
      h2Element2.classList.remove("fuente52");
      h2Element2.classList.add("fuente5");
    }
  });
  
miDiv2.addEventListener('mouseover', function() {
    miDiv2.style.transition = 'opacity 1s ease';
    miDiv2.style.opacity = '1';
    if (window.innerWidth > 768){
      h2Element2.classList.remove("fuente5");
      h2Element2.classList.add("fuente52");
    }
  });


const miDiv3 = document.getElementById('divImagen3');
var h2Element3 = document.getElementById('subtituloUns');
  miDiv3.addEventListener('mouseout', function() {
      miDiv3.style.transition = 'opacity 1s ease';
      miDiv3.style.opacity = '0.7';

      if (window.innerWidth > 768){
        h2Element3.classList.remove("fuente5");
        h2Element3.classList.add("fuente49");
      }
  });
  
  miDiv3.addEventListener('mouseover', function() {
      miDiv3.style.transition = 'opacity 1s ease';
      miDiv3.style.opacity = '1';
      
      if (window.innerWidth > 768){ 
        h2Element3.classList.remove("fuente49");
        h2Element3.classList.add("fuente5");
      }
  });

const miDiv4 = document.getElementById('divImagen4');
var h2Element4 = document.getElementById('subtituloDcic');
  miDiv4.addEventListener('mouseout', function() {
      miDiv4.style.transition = 'opacity 1s ease';
      miDiv4.style.opacity = '0.7';
      
      if (window.innerWidth > 768){
        h2Element4.classList.remove("fuente52");
        h2Element4.classList.add("fuente5");
      }
});

miDiv4.addEventListener('mouseover', function() {
      miDiv4.style.transition = 'opacity 1s ease';
      miDiv4.style.opacity = '1';
      
      if (window.innerWidth > 768){
        h2Element4.classList.remove("fuente5");
        h2Element4.classList.add("fuente52");
      }
});

function saludar(){
    var saludo = "Buen ";
    var fechaActual = new Date();
    var opciones = { weekday: 'long' };
    var diaSemana = fechaActual.toLocaleDateString('es-ES', opciones);
    saludo += diaSemana;
    document.getElementById('titulo').innerText = "¡"+saludo+"!";
}