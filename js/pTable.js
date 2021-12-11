function getFoot() {
    
    console.log('Se esta ejecutando')
    $.ajax({
        url: "http://localhost:8080/api/accessory/all",
        type: "GET",
        datatype: "JSON",
        success: function (response) {
            console.log(response);
            printListProduct(response);
            
        }
    });
    
}

function printListProduct(response) {
    
    
    let myTable = "<table class='table table-hover bordered'>"
    myTable += "<thead>"
    myTable += "<tr>";

    myTable += "<td class='col text-center fw-bold'>REFERENCE</td>";
    myTable += "<td class='col text-center fw-bold'>GENDER</td>";
    myTable += "<td class='col text-center fw-bold'>CATEGORY</td>";
    myTable += "<td class='col text-center fw-bold'>SIZE</td>";
    myTable += "<td class='col text-center fw-bold'>MATERIAL</td>";
    myTable += "<td class='col text-center fw-bold'>DESCRIPTION</td>";
    myTable += "<td class='col text-center fw-bold'>AVAILABILITY</td>";
    myTable += "<td class='col text-center fw-bold'>PRICE</td>";
    myTable += "<td class='col text-center fw-bold'>QUANTITY</td>";
    myTable += "<td class='col text-center fw-bold'>PHOTOGRAPHY</td>";
    myTable += "<td class='col text-center fw-bold' colspan='2'>ACTIONS</td>";
    myTable += "</tr>";
    myTable += "</thead>"
    for (i = 0; i < response.length; i++) {
        myTable += "<tbody>"
        myTable += "<tr>";
        myTable += "<th scope='row' class='text-center'>" + response[i].reference + "</th>";
        myTable += "<td class='text-center'>" + response[i].gender + "</td>";
        myTable += "<td class='text-center'>" + response[i].category + "</td>";
        myTable += "<td class='text-center'>" + response[i].size + "</td>";
        myTable += "<td class='text-center'>" + response[i].material + "</td>";
        myTable += "<td class='text-center'>" + response[i].description + "</td>";
        myTable += "<td class='text-center'>" + response[i].availability + "</td>";
        myTable += "<td class='text-center'>" + response[i].price + "</td>";
        myTable += "<td class='text-center'>" + response[i].quantity + "</td>";
        myTable += "<td class='text-center'>" + response[i].photography + "</td>";
        myTable += `<td><button class = "btn btn-primary" onclick="borrarProduct('${response[i].reference}')">Delete</button></td>`;
        myTable += `<td><a href="./upFoot.html?id=${response[i].reference}"><button class = "btn btn-primary" >Load</button></a></td>`;
        myTable += "</tr>";
        myTable += "</tbody>"
    }
    myTable += "</table>";
    $("#myListUser").html(myTable);
}


function borrarProduct(reference) {
    console.log(reference)
    var element = {
        reference: reference.toString().trim()
    }
    // console.log(reference)
    /* Stringyfy convertir html a un objeto json */
    var dataToSend = JSON.stringify(element);

    $.ajax({
        dataType: 'json',
        data: dataToSend,
        url: "http://localhost:8080/api/accessory/" + reference,
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
        }
    });
}

function updateProduct(Upreference, event) {

    // let Upreference = (document.getElementById("uReference").value);
    var Upreference = $('#uReference').val();

    debugger;
    let element = {
        
        // Upreference = (document.getElementById("uReference").value),
        reference: Upreference,
        category: $('#uCategory').val().trim(),
        material: $('#uMaterial').val().trim(),
        gender: $('#uGender').val(),
        size: $('#uSize').val().trim(),
        description: $('#uDescription').val().trim(),
        availability: $('#uAvailability').val(),
        price: $('#uPrice').val().trim(),
        quantity: $('#uQuantity').val().trim(),
        photography: $('#uPhotography').val()
     
    }

    let category = $('#uCategory').val();
    let material = $('#uMaterial').val();
    let gender = $('#uGender').val();
    let size = $('#uSize').val();
    let description = $('#uDescription').val();
    let availability = $('#uAvailability').val();
    let price = $('#uPrice').val();
    let quantity = $('#uQuantity').val();
    let photography = $('#uPhotography').val();

    event.preventDefault();
    console.log(element);
    let dataToSend = JSON.stringify(element);

    if(Upreference === ""){
        alert("The reference can not be empty");
        return 0;
    }
    if(category === ""){
        alert("The category can not be empty");
        return 0;
    }
    if(material === ""){
        alert("The material can not be empty");
        return 0;
    }
    if(gender === ""){
        alert("The gender can not be empty");
        return 0;
    }
    if(size === ""){
        alert("The size can not be empty");
        return 0;
    }
    if(description === ""){
        alert("The description can not be empty");
        return 0;
    }
    if(availability === ""){
        alert("The availability can not be empty");
        return 0;
    }
    if(price === ""){
        alert("The price can not be empty");
        return 0;
    }
    if(quantity === ""){
        alert("The quantity can not be empty");
        return 0;
    }
    if(photography === ""){
        alert("The photography can not be empty");
        return 0;
    }
    $.ajax({
        datatype: 'json',
        data: dataToSend,
        contentType: "application/JSON",            
        url: "http://localhost:8080/api/accessory/update",
        type: "PUT",

        success: function (response) {
            console.log(response);
            $("#myListUser").empty();
            getFoot();
            alert("The record has been updated correctly!") 
            history.back();
            // location.reload();             
            },
        error: function (jqXHR, textStatus, errorThrown) {
            alert("The record has not been updated correctly!")
            }
        });
    
}
