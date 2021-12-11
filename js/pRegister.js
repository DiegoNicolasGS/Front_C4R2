function recarge(){
    location.reload(); 
}

function agragarprducto(event){
    let data = {
        reference: $('#pReference').val().trim(),
        brand: $('#pBrand').val().trim(),
        category: $('#pCategory').val(),
        material: $('#pMaterial').val().trim(),
        gender: $('#pGender').val(),
        size: $('#pSize').val().trim(),
        description: $('#pDescription').val().trim(),
        availability: $('#pAvailability').val(),
        price: $('#pPrice').val().trim(),
        quantity: $('#pQuantity').val().trim(),
        photography: $('#pPhotography').val()
    }


    console.log(data)
    debugger;
    event.preventDefault();

    let datosPeticion = JSON.stringify(data)

    let description = $.trim($('#pDescription').val());

    if($('#pReference').val() === "" ){
        alert("The reference can not be empty")
        return 0;
    }
    if($('#pBrand').val() === "" ){
        alert("The brand can not be empty")
        return 0;
    }
    if($('#pCategory').val() === "" ){
        alert("The category name can not be empty")
        return 0;
    }
    if ($('#pMaterial').val() === "" ){
        alert("The material can not be empty")
        return 0;
    }
    if ($('#pGender').val() === "" ){
        alert("The gender can not be empty")
        return 0;
    }
    if($('#pSize').val() === ""){
        alert("The size can not be empty")
        return 0;
    }
    if ($('#pDescription').val() === "")
    {
        alert("The description can not be empty")
        return 0;
    }   
    if ($('#pAvailability').val() === "" ){
        alert("The availability can not be empty")
        return 0;
    }
    if ($('#pPrice').val() === "" ){
        alert("The price can not be empty")
        return 0;
    }
    if ($('#pQuantity').val() === "" ){
        alert("The quantity can not be empty")
        return 0;
    }
    if ($('#pPhotography').val() === "" ){
        alert("The photography can not be empty")
        return 0;
    }

    if (description.length > 80){
        alert("The description exceeded the number of characters allowed (max - 80)")
        return 0;
    }
    $.ajax({
        //url del servicio
        url: "http://localhost:8080/api/accessory/new",

        data: datosPeticion,

        type: 'POST',

        contentType: "application/JSON",

        dataType: 'json',

        success: function () {
            console.log('Ejecutado');
            alert('The product has been registered correctly')
            location.reload();
        },
        error: function (xhr, status) {
            console.log("algo fallo");	
        },
        complete: function (xhr, status) {
            console.log("Todo super bien"  + status);
        }
    })
}