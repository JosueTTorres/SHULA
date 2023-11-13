
document.getElementById("btn_login").addEventListener("click", iniciarSesion);
document.getElementById("btn_register").addEventListener("click", register);
window.addEventListener("resize", anchoPagina);

//Declaracion de variables
var content_login_register = document.querySelector(".content_login_register");
var form_login = document.querySelector(".form_login");
var form_register = document.querySelector(".form_register");
var backbox_login = document.querySelector(".backbox_login");
var backbox_register = document.querySelector(".backbox_register");
var main = document.querySelector("main");


function anchoPagina(){
    if(window.innerWidth > 850){
        backbox_login.style.display = "block";
        backbox_register.style.display = "block";
    }else{
        backbox_register.style.display = "block";
        backbox_register.style.opacity = "1";
        backbox_login.style.display = "none";
        form_login.style.display = "block";
        form_register.style.display = "none"
        content_login_register.style.left = "0px"
    }
}

anchoPagina();

function iniciarSesion() {
    if (window.innerWidth > 850) {
        // Establece los estilos para pantallas mayores de 850px
        form_register.style.display = "none";
        content_login_register.style.left = "10px";
        form_login.style.display = "block";
        backbox_register.style.opacity = "1";
        backbox_login.style.opacity = "0";
        main.style.marginTop = "100px"
    } else if (window.innerWidth <= 820) {
        // Establece los estilos para pantallas entre 460px y 850px
        form_register.style.display = "none";
        content_login_register.style.left = "0px";
        form_login.style.display = "block";
        backbox_register.style.display = "block";
        backbox_login.style.display = "none";
        backbox_login.style.opacity = "1";
        main.style.marginTop = '50px';

        if (window.innerWidth <= 460) {
            // Cambio de margen específico para 460px
            main.style.marginTop = '180px';
        }
    } else {
        // Establece los estilos para pantallas menores de 460px
        form_register.style.display = "none";
        content_login_register.style.left = "0px";
        form_login.style.display = "block";
        backbox_register.style.display = "none";
        backbox_login.style.display = "block";
        backbox_login.style.opacity = "1";
        main.style.marginTop = '-30px';
    }
}

function register() {
    if (window.innerWidth > 850) {
        // Establece los estilos para pantallas mayores de 850px
        form_register.style.display = "block";
        content_login_register.style.left = "410px";
        form_login.style.display = "none";
        backbox_register.style.opacity = "0";
        backbox_login.style.opacity = "1";
        main.style.marginTop = "100px"
    } else if (window.innerWidth <= 820) {
        // Establece los estilos para pantallas entre 460px y 850px
        form_register.style.display = "block";
        content_login_register.style.left = "0px";
        form_login.style.display = "none";
        backbox_register.style.display = "none";
        backbox_login.style.display = "block";
        backbox_login.style.opacity = "1";
        main.style.marginTop = '-10px';

        if (window.innerWidth <= 460) {
            // Cambio de margen específico para 460px
            main.style.marginTop = '120px';
        }
    } else {
        // Establece los estilos para pantallas menores de 460px
        form_register.style.display = "block";
        content_login_register.style.left = "0px";
        form_login.style.display = "none";
        backbox_register.style.display = "none";
        backbox_login.style.display = "block";
        backbox_login.style.opacity = "1";
        main.style.marginTop = '-30px';
    }
}
