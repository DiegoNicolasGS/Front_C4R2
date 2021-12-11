var pagina = '';
var arg = '';
var host = '';
var datos = '';

function CRUD(argument, pag) {
    host = "http://localhost:8080";
    pagina = host + pag;
    arg = argument;

    switch (arg) {
        case 'login':
            if (validarCampos(arg)) {
                pagina = pagina.replace("{email}", valorAtributo('email')).replace("{password}", valorAtributo('password'))
                getFetch();
            }

            break;
        
        // case 'userValidate':
        //     pagina = pagina.replace("{email}", valorAtributo('regEmail'))
        //     getFetch();
        //     if (valorAtributo('regUserName') == ''){alert('El usuario no puede ser vacio'); return false}
        //     if (valorAtributo('regEmail') == ''){alert('El email no puede ser vacio'); return false}
        //     var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        //     if (valorAtributo == (mailformat)) {
        //     alert("Ok: The email entered has the correct format (name@domain_name.domain)");
        //     //document.querySelector("useremail").focus();           
        //     document.getElementById("bt").disabled = false;
        //      return true;}
        //     else {
        //     console.log(inputText)
        //     alert("Attention: The email is not in the correct format. Please correct (name@domain_name.domain) \ n \ n ** To continue you MUST provide a valid email. ** To continue you MUST provide a valid email. **");
        //     //document.getElementById("useremail").focus()        
        //     return false;}
        //     break;

        // case 'register':
        //     if (validarCampos(arg)) {

        //         datos = {
        //             'name': valorAtributo('regUserName'),
        //             'email': valorAtributo('regEmail'),
        //             'password': valorAtributo('regPassword')
        //         }
        //         postFetch();
        //     }

        //     break;
    }
}

function responseCRUD(argument, response) {
    switch (argument) {
        case 'login':
            if (response.id == null) {
                alert('Invalid email or password, try again.')
            }
            else {
                showSection('home', 'sign-in')
                $("#welcome").text('Bienvenido ' + response.name)
            }
            break;

        //     case 'userValidate':
        //         if (!response){
        //             CRUD('register', '/api/user/new');
        //         }else{
        //             alert('El email   del usuario ya se encuentra registrado');
        //         } 
                
        //         break;

        // case 'register':
        //     alert('Registro exitoso');
        //     showSection('sign-in', 'register');
        //     $('form input').each(function(){this.value = ''})
        //     break;
    }

}
