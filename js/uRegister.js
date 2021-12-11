// function validarCampos(){
//     var name = $.trim($('#uName').val());
//     var email = $.trim($('#uEmail').val());
//     var password = $.trim($('#uPassword').val());
//     var password2 = $.trim($('#uPasswordCon').val());
//     if(name === ""){
//         alert("The user name can not be empty")
//         return false;
//     }
//     if(email === ""){
//         alert("The email can not be empty")
//         return false;
//     }
//     if(password === ""){
//         alert("The password can not be empty")
//         return false;
//     }
//     if(password != password2){
//         alert("The passwords do not match")
//         return false;
//     }
// }

function validateEmail() {
    inputText = document.getElementById("uEmail").value
    console.log("inputText", inputText)
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.match(mailformat)) {
        alert("Ok: The email entered has the correct format (name@domain_name.domain)");
        //document.querySelector("useremail").focus();           
        // document.getElementById("bt").disabled = false;
        return true;
    }
    else {
        console.log(inputText)
        alert("Attention: The email is not in the correct format. Please correct (name@domain_name.domain) \ n \ n ** To continue you MUST provide a valid email. ** To continue you MUST provide a valid email. **");
        //document.getElementById("useremail").focus()        
        return false;
    }
}

function emailExist(email){
    debugger;
    $.ajax({
        dataType: 'json',
        contentType: "application/JSON",
        url: "http://localhost:8080/api/user/emailexist/" +email,
        
        type: 'GET',
        datatype: "JSON",
        success: function (response) {
            debugger;
            console.log(response);
        }
    });

}

function register(event){
    let data = {
        id :$('#uId').val().trim(),
        identification :$('#uIdentification').val().trim(),
        name :$('#uName').val().trim(),
        address :$('#uAddress').val().trim(),
        cellPhone :$('#uCellPhone').val().trim(),
        email :$('#uEmail').val().trim(),
        password :$('#uPassword').val().trim(),
        zone :$('#uZone').val().trim(),
        type :$('#uType').val()
    }

    let identification = $.trim($('#uIdentification').val());
    let name = $.trim($('#uName').val());
    let email = $.trim($('#uEmail').val());
    let password = $.trim($('#uPassword').val());

    console.log(data)
    debugger;
    event.preventDefault();

    if($('#uId').val() === "" ){
        alert("The id can not be empty")
        return 0;
    }
    if($('#uIdentification').val() === "" ){
        alert("The identification can not be empty")
        return 0;
    }
    if($('#uName').val() === "" ){
        alert("The user name can not be empty")
        return 0;
    }
    if ($('#uAddress').val() === "" ){
        alert("The address can not be empty")
        return 0;
    }
    if ($('#uCellPhone').val() === "" ){
        alert("The cell phone can not be empty")
        return 0;
    }
    if($('#uEmail').val() === ""){
        alert("The email can not be empty")
        return 0;
    }
    if ($('#uPassword').val() === "")
    {
        alert("The password can not be empty")
        return 0;
    }   
    if($('#uPassword').val() != $('#uPasswordCon').val()){
        alert("The passwords do not match")
        return 0;
    }
    if ($('#uZone').val() === "" ){
        alert("The zone can not be empty")
        return 0;
    }
    if ($('#uType').val() === "" ){
        alert("The type can not be empty")
        return 0;
    }
    if (identification.length > 20){
        alert("The identification exceeded the number of characters allowed (max - 20)")
        return 0;
    }
    if (name.length > 80){
        alert("The name exceeded the number of characters allowed (max - 80)")
        return 0;
    }
    if (email.length > 50){
        alert("The email exceeded the number of characters allowed (max - 50)")
        return 0;
    }
    if (password.length > 50){
        alert("The password exceeded the number of characters allowed (max - 50)")
        return 0;
    }
    if(validateEmail() == true){
        
        console.log(data)
    
        let datosPeticion = JSON.stringify(data)
    
        $.ajax({
            // url: "http://129.151.109.22:8080/api/user/new",
            url: "http://localhost:8080/api/user/new",
            data: datosPeticion,
            method: 'POST',
            contentType: "application/JSON",
            dataType: 'json',
            
            success: function (response) {
                if(emailExist(response.email) == true){
                    alert("The user has already registered");
                  
                }
                else{
                console.log(response)
                console.log("The user has been correctly registered.")
                alert("The user has been correctly registered.");
                location.reload();
            }
            },
            error: function (jqXHR, textStatus, errrorThrow) {
                /// Falta validación 
                if(response.id == null){
                    alert("The user has already registered");
                }
                alert("Error")                
            }
        })
    }

    
}
