// Verifica la validación de campos y muestra errores si es necesario.

$(document).ready(function(){

    $('#btnSend').click(function(){
        
        var errores = '';

        if( $('#names').val() == '' ){
            errores += '<p>Ingrese un nombre</p>';
            $('#names').css("border-bottom-color", "#F14B4B")
        } else{
            $('#names').css("border-bottom-color", "#a6c6e9")
        }

        if( $('#phone').val() == '' ){
            errores += '<p>Ingrese un numero</p>';
            $('#phone').css("border-bottom-color", "#F14B4B")
        } else{
            $('#phone').css("border-bottom-color", "#a6c6e9")
        }

        if( $('#email').val() == '' ){
            errores += '<p>Ingrese un correo electronico</p>';
            $('#email').css("border-bottom-color", "#F14B4B")
        } else{
            $('#email').css("border-bottom-color", "#a6c6e9")
        }

        if( $('#mensaje').val() == '' ){
            errores += '<p>Ingrese un mensaje</p>';
            $('#mensaje').css("border-bottom-color", "#F14B4B")
        } else{
            $('#mensaje').css("border-bottom-color", "#a6c6e9")
        }

        if(errores == '' == false){
            var mensajeModal = '<div class="modal-wrap">'+
                                    '<div class="mensaje-modal">'+
                                        '<h3>Errores encontrados</h3>'+
                                        errores+
                                        '<span id="btnClose">Cerrar</span>'+
                                    '</div>'+
                                '</div>'
            $('body').append(mensajeModal);
        }

        $('#btnClose').click(function(){
            $('.modal-wrap').remove();
        });
    }); 
});