const nombre = document.querySelector('#nombreInput');
const telefono = document.querySelector('#telefonoInput');
const correo = document.querySelector('#correoInput');
const mensaje = document.querySelector('#mensajeInput');
const formulario = document.querySelector('.formContacto');

const datosForm = {
    nombreInput: '',
    telefonoInput: '',
    correoInput: '',
    mensajeInput: ''
}

nombre.addEventListener('input', leerDatos);
telefono.addEventListener('input', leerDatos);
correo.addEventListener('input', leerDatos);
mensaje.addEventListener('input', leerDatos);

function leerDatos(evento){
    datosForm[evento.target.id] = evento.target.value;
    console.log(datosForm);
}

document.addEventListener('DOMContentLoaded', function() {
    formulario.reset();
  });



formulario.addEventListener('submit', function(evento){
    evento.preventDefault();
    const {nombreInput, telefonoInput, correoInput, mensajeInput}  = datosForm;
    borrarErrores();
    if (nombreInput.trim() === '' || correoInput.trim() === '' || mensajeInput.trim() === ''){
        if (nombreInput.trim() === '')
            mensajeError("El campo Nombre es obligatorio", nombre);
        if(correoInput.trim() === '')
            mensajeError("El campo Correo es obligatorio", correo);
        if (mensajeInput.trim() === '' )
            mensajeError("El campo Mensaje es obligatorio", mensaje);
    } else{
        formulario.submit();
        formulario.reset();
    }
    
    
} );

function borrarErrores(){
    const errores = formulario.querySelectorAll('p.error');
    errores.forEach(element => {
        element.remove();
    });
}

function mensajeExito(){
    const mensaje = document.createElement('P');
    mensaje.textContent="Mensaje Enviado";
    mensaje.classList.add("exitoso");
    formulario.appendChild(mensaje);

    setTimeout( () => {
        mensaje.remove();
    }, 5000);
}

function mensajeError(e, elemento){
    const errormsj = document.createElement('P');
    errormsj.textContent = e;
    errormsj.classList.add('error');
    elemento.insertAdjacentElement('afterend', errormsj);
}