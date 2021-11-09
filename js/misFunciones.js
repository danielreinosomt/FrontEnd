function traerInformacionSpecialty(){
    $.ajax({
        url:"http://144.22.56.86:8080/api/Specialty/all",
        type: "GET",
        datatype: "JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta(respuesta)
        }
    });
}
function pintarRespuesta(respuesta){
    let myTable = "<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        myTable+="</tr>";
        
    }
    myTable+="</table>";
    $("#resultado1").append(myTable);
}

function saveInformacionSpecialty(){
    let var2 = {
        name:$("#Sname").val(),
        description:$("#Sdescription").val()
    };

    $.ajax({
        
        type: "POST",
        contentType:"application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),

        url:"http://144.22.56.86:8080/api/Specialty/save",

        success:function(response){
            console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctmanete");
            window.location.reload()
    
        },
        error: function(jqXHR, textStatus, errorThrown){
            window.location.reload()
            alert("no se guardo");
        }
    });
}
//////////
function traerInformacionDoctor(){
    $.ajax({
        url:"http://144.22.56.86:8080/api/Doctor/all",
        type: "GET",
        datatype: "JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaDoctor(respuesta)
        }
    });
}
function pintarRespuestaDoctor(respuesta){
    let myTable = "<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].department+"</td>";
        myTable+="<td>"+respuesta[i].year+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        myTable+="</tr>";
        
    }
    myTable+="</table>";
    $("#resultado2").append(myTable);
}

function saveInformacionDoctor(){
    let var2 = {
        name:$("#Dname").val(),
        department:$("#Ddepartment").val(),
        year:$("#Dyear").val(),
        description:$("#Ddescription").val(),
    };

    $.ajax({
        
        type: "POST",
        contentType:"application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),

        url:"http://144.22.56.86:8080/api/Doctor/save",

        success:function(response){
            console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctmanete");
            window.location.reload()
    
        },
        error: function(jqXHR, textStatus, errorThrown){
            window.location.reload()
            alert("no se guardo");
        }
    });
}
////////////////
function traerInformacionClient(){
    $.ajax({
        url:"http://144.22.56.86:8080/api/Client/all",
        type: "GET",
        datatype: "JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaClient(respuesta)
        }
    });
}
function pintarRespuestaClient(respuesta){
    let myTable = "<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].email+"</td>";
        myTable+="<td>"+respuesta[i].password+"</td>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].age+"</td>";
        myTable+="</tr>";
        
    }
    myTable+="</table>";
    $("#resultado3").append(myTable);
}

function saveInformacionClient(){
    let var2 = {
        email:$("#Cemail").val(),
        password:$("#Cpassword").val(),
        name:$("#Cname").val(),
        age:$("#Cage").val(),
    };

    $.ajax({
        
        type: "POST",
        contentType:"application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),

        url:"http://144.22.56.86:8080/api/Client/save",

        success:function(response){
            console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctmanete");
            window.location.reload()
    
        },
        error: function(jqXHR, textStatus, errorThrown){
            window.location.reload()
            alert("no se guardo");
        }
    });
}
//////////////////////////////////
function traerInformacionMessage(){
    $.ajax({
        url:"http://144.22.56.86:8080/api/Message/all",
        type: "GET",
        datatype: "JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaMessage(respuesta)
        }
    });
}
function pintarRespuestaMessage(respuesta){
    let myTable = "<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].messageText+"</td>";
        myTable+="</tr>";
        
    }
    myTable+="</table>";
    $("#resultado4").append(myTable);
}

function saveInformacionMessage(){
    let var2 = {
        messageText:$("#MmessageText").val(),
    };

    $.ajax({
        
        type: "POST",
        contentType:"application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),

        url:"http://144.22.56.86:8080/api/Message/save",

        success:function(response){
            console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctmanete");
            window.location.reload()
    
        },
        error: function(jqXHR, textStatus, errorThrown){
            window.location.reload()
            alert("no se guardo");
        }
    });
}
///////////////////////////////////
function traerInformacionReservation(){
    $.ajax({
        url:"http://144.22.56.86:8080/api/Reservation/all",
        type: "GET",
        datatype: "JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaReservation(respuesta)
        }
    });
}
function pintarRespuestaReservation(respuesta){
    let myTable = "<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].startDate+"</td>";
        myTable+="<td>"+respuesta[i].devolutionDate+"</td>";
        myTable+="</tr>";
        
    }
    myTable+="</table>";
    $("#resultado5").append(myTable);
}

function saveInformacionReservation(){
    let var2 = {
        startDate:$("#RstartDate").val(),
        devolutionDate:$("#RdevolutionDate").val(),
    };

    $.ajax({
        
        type: "POST",
        contentType:"application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),

        url:"http://144.22.56.86:8080/api/Reservation/save",

        success:function(response){
            console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctmanete");
            window.location.reload()
    
        },
        error: function(jqXHR, textStatus, errorThrown){
            window.location.reload()
            alert("no se guardo");
        }
    });
}

