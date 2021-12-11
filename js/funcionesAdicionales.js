function showTag(id){
    $('#' + id).show();
}

function hideTag(id){
    $('#' + id).hide();
}


function showSection(idShow, idHide){
    showTag(idShow);
    hideTag(idHide);
}



function valorAtributo(id){
    return $("#" + id).val()
}

function confirmPassword(){
    if (valorAtributo('confmPassword') != valorAtributo('regPassword')){
        alert('Las contraseñas no coinciden');
    }
}

function validarCampos(arg){
    switch(arg){
        case 'login':
            let email = $('#email').val().trim();
            let password = $('#password').val().trim();

            console.log(email);
            console.log(password);
            
            if (email == ''){alert('The email can not be empty'); return false}
            if (password == ''){alert('The password can no be empty'); return false}
            return true;
        // case 'register':
        //     if (valorAtributo('regPassword') == ''){alert('La contraseña no puede ser vacia'); return false}
        //     if (valorAtributo('confmPassword') != valorAtributo('regPassword')){alert('Las contraseñas no coinciden'); return false;}
        //     return true;
    }
}

function cargeProduct(reference){

    $.ajax({
        dataType: 'json',
        contentType: "application/JSON",
        url: "http://localhost:8080/api/accessory/" +reference,

        type: 'GET',

        success: function(response){
            console.log(response);
            var item = response;

            $('#uReference').val(item.reference);
            // $('#uCategory').val(item.category);
            document.querySelector("#uCategory").value=item.category
            $('#uMaterial').val(item.material);
            // $('#uGender').val(item.gender);
            document.querySelector("#uGender").value=item.gender
            $('#uSize').val(item.size);
            $('#uDescription').val(item.description);
            
            //$('#uAvailability').val('"'+item.availability+'"');
            document.querySelector("#uAvailability").value=item.availability
            $('#uPrice').val(item.price);
            $('#uQuantity').val(item.quantity);
            // $('#uPhotography').val(item.photography);

        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert("Error")
            }

    })
}

function cargeUser(id){

    $.ajax({
        dataType: 'json',
        contentType: "application/JSON",
        url: "http://localhost:8080/api/user/" +id,

        type: 'GET',

        success: function(response){
            console.log(response);
            var item = response;

            $('#UpIdentification').val(item.identification);
            $('#UpgName').val(item.name);
            $('#UpAddress').val(item.address);
            $('#UpCellPhone').val(item.cellPhone);
            $('#UpEmail').val(item.email);
            $('#UpPassword').val(item.password);
            $('#UpZone').val(item.zone);

        },

    })
}