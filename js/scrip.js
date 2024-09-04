//Menu Hamburguesa
function llamar() {
    var botonera = document.querySelector('.botonera');
    var menuIcon = document.getElementById('menu');

    // Añadir o quitar la clase 'click' en la botonera
    if (botonera.className.indexOf('click') > -1) {
        botonera.className = botonera.className.replace('click', '').trim();
    } else {
        botonera.className += ' click'; // Correcto: añade la clase 'click' sin el punto
    }

    // Cambia el ícono entre "fa-bars" (menú) y "fa-times" (X)
    if (menuIcon.classList.contains('fa-bars')) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-times');
    } else if (menuIcon.classList.contains('fa-times')) {
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
    }
}



//Header cambio hacia abajo
window.addEventListener('scroll', Scroll);
function Scroll(){
    var header=document.getElementById('header');
    var ypos=window.pageYOffset;
    if (ypos>300){
        header.style.background="#1F2C33";
        header.style.height="60px";
        header.style.transition="0.5s";
    }
    else{
        header.style.background="none";
        header.style.height="70px";
        header.style.transition="0.5s";
    }
}

    //Preloader con Javascript
    var preloader=document.getElementById('preloader');
    setTimeout(function(){
        preloader.style.transition="0.76s";
        preloader.style.visibility="hidden";
        
    },1000);
    //Script de Preloader
    /*var contenido=document.getElementById('contenido');
    setTimeout(function(){
        contenido.classList.add('cerrar');
        document.body.style.overflowY="visible";
    },9000);*/