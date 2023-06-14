
const miDiv = document.getElementById('divImagen1');


miDiv.addEventListener('mouseout', function() {
    miDiv.style.transition = 'opacity 1s ease';
    miDiv.style.opacity = '0.7';
   

  });
  
  miDiv.addEventListener('mouseover', function() {
    miDiv.style.transition = 'opacity 1s ease';
    miDiv.style.opacity = '1';
    
  });

  const miDiv2 = document.getElementById('divImagen2');

miDiv2.addEventListener('mouseout', function() {
    miDiv2.style.transition = 'opacity 1s ease';
    miDiv2.style.opacity = '0.7';
    
  });
  
  miDiv2.addEventListener('mouseover', function() {
    miDiv2.style.transition = 'opacity 1s ease';
    miDiv2.style.opacity = '1';
    
  });

  const miDiv3 = document.getElementById('divImagen3');

    miDiv3.addEventListener('mouseout', function() {
        miDiv3.style.transition = 'opacity 1s ease';
        miDiv3.style.opacity = '0.7';
;
  });
  
    miDiv3.addEventListener('mouseover', function() {
        miDiv3.style.transition = 'opacity 1s ease';
        miDiv3.style.opacity = '1';

  });

  const miDiv4 = document.getElementById('divImagen4');

  miDiv4.addEventListener('mouseout', function() {
      miDiv4.style.transition = 'opacity 1s ease';
      miDiv4.style.opacity = '0.7';
;
});

  miDiv4.addEventListener('mouseover', function() {
      miDiv4.style.transition = 'opacity 1s ease';
      miDiv4.style.opacity = '1';

});

function saludar(){
    var saludo = "Buen ";


    var fechaActual = new Date();
    var opciones = { weekday: 'long' };
    var diaSemana = fechaActual.toLocaleDateString('es-ES', opciones);
    saludo += diaSemana;
    document.getElementById('titulo').innerText = "¡"+saludo+"!";
}