function getUser() {
    console.log('Se esta ejecutando')
    $.ajax({
        url: "http://localhost:8080/api/user/all",
        type: "GET",
        datatype: "JSON",
        success: function (response) {
            console.log(response);
            printListUser(response);
        }
    });
}

function printListUser(response) {
    
    let myTable = "<table class='table table-hover bordered'>"
    myTable += "<thead>"
    myTable += "<tr>";

    myTable += "<td class='col text-center fw-bold'>IDENTIFICATION</td>";
    myTable += "<td class='col text-center fw-bold'>NAME</td>";
    myTable += "<td class='col text-center fw-bold'>EMAIL</td>";
    myTable += "<td class='col text-center fw-bold'>TYPE</td>";
    myTable += "<td class='col text-center fw-bold'>ZONE</td>";
    myTable += "<td class='col text-center fw-bold' colspan='2'>ACTIONS</td>";
    myTable += "</tr>";
    myTable += "</thead>"
    for (i = 0; i < response.length; i++) {
        myTable += "<tbody>"
        myTable += "<tr>";
        myTable += "<th scope='row' class='text-center'>" + response[i].identification + "</th>";
        myTable += "<td class='text-center'>" + response[i].name + "</td>";
        myTable += "<td class='text-center'>" + response[i].email + "</td>";
        myTable += "<td class='text-center'>" + response[i].type + "</td>";
        myTable += "<td class='text-center'>" + response[i].zone + "</td>";
        myTable += '<td><button class = "btn btn-primary" onclick="borrarUser(' + response[i].id + ')">Delete</button></td>';
        myTable += `<td><a href="./upUser.html?id=${response[i].id}"><button class = "btn btn-primary" >Load</button></a></td>`;
        myTable += "</tr>";
        myTable += "</tbody>"
    }
    myTable += "</table>";
    $("#myListUser").html(myTable);
}

function borrarUser(regId) {
    var element = {
        id: regId
    }
    /* Stringyfy convertir html a un objeto json */
    var dataToSend = JSON.stringify(element);

    $.ajax({
        dataType: 'json',
        data: dataToSend,
        url: "http://localhost:8080/api/user/" + regId,
        type: 'DELETE',
        contentType: "application/JSON",
        success: function (response) {
            console.log(response);
            $("#myListUser").empty();
            location.reload();
            alert("The record has been deleted correctly!")
        },

        error: function (jqXHR, textStatus, errorThrown) {
            alert("The record has not been deleted correctly!")
            location.reload();
        }
    });
}


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




function updateData(regId) {
    let element = {
        id: regId,
        identification: $("#UpIdentification").val(),
        name: $("#UpgName").val(),
        address: $("#UpAddress").val(),
        cellPhone: $("#UpCellPhone").val(),
        email:$("#UpEmail").val(),
        password: $("#UpPassword").val(),
        zone:$("#UpZone").val(),
        
     
    }

    debugger;

    let identification = $.trim($('#uIdentification').val());
    let name = $.trim($('#uName').val());
    let email = $.trim($('#uEmail').val());
    let password = $.trim($('#uPassword').val());

    if($('#UpIdentification').val() === "" ){
        alert("The identification can not be empty")
        return 0;
    }
    if($('#UpgName').val() === "" ){
        alert("The user name can not be empty")
        return 0;
    }
    if ($('#UpAddress').val() === "" ){
        alert("The address can not be empty")
        return 0;
    }
    if ($('#UpCellPhone').val() === "" ){
        alert("The cell phone can not be empty")
        return 0;
    }
    if($('#UpEmail').val() === ""){
        alert("The email can not be empty")
        return 0;
    }
    if ($('#UpPassword').val() === "")
    {
        alert("The password can not be empty")
        return 0;
    }   
    if ($('#UpZone').val() === "" ){
        alert("The zone can not be empty")
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
    if ($("#UpIdentification").val().length == 0 || $("#UpgName").val().length == 0 || $("#UpAddress").val().length == 0 
    || $("#UpCellPhone").val().length == 0 ||  $("#UpEmail").val().length== 0  || $("#UpPassword").val().length==0
    || $("#UpZone").val().length==0) {
        alert("All fields are required")
    }else{
        console.log(element);
        let dataToSend = JSON.stringify(element);

        $.ajax({
            datatype: 'json',
            data: dataToSend,
            contentType: "application/JSON",            
            url: "http://localhost:8080/api/user/update",
            type: "PUT",

            success: function (response) {
                console.log(response);
                $("#myListUser").empty();
                getUser();
                alert("The record has been updated correctly!") 
                history.back();              
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert("The record has not been updated correctly!")
            }
        });
    }
    console.log(element)
}
