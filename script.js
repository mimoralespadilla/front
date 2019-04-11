window.addEventListener('load',inicio,false);
let request = new XMLHttpRequest();

function inicio(){
document.getElementById('callAllFetch').addEventListener('click',allFetch,false)
document.getElementById('callAllJson').addEventListener('click',AllJsonQuery,false)
document.getElementById('callAllHtx').addEventListener('click',Allhtx,false)
document.getElementById('callByIdHt').addEventListener('click',callByIdHt,false)
document.getElementById('callNameByFetch').addEventListener('click',callNameFetch,false)
document.getElementById('callNameByHtX').addEventListener('click',callNombreByHTX,false)
document.getElementById('callByIdFetch').addEventListener('click',callIdFetch,false)
document.getElementById('callEyMByFetch').addEventListener('click',callEspecieMezclaFetch,false)
document.getElementById('callEyMByHTX').addEventListener('click',callMezclaEspecieByHTX,false)
document.getElementById('deleteByFetch').addEventListener('click',deleteByFetch,false)
document.getElementById('deleteByHt').addEventListener('click',deleteByHt,false)
document.getElementById('createByFetch').addEventListener('click',createMascotaByFetch,false)
document.getElementById('createByHtx').addEventListener('click',createMascotaByHTX,false)
document.getElementById('asyncAll').addEventListener('click',allFetchAsync,false)
}

async function allFetchAsync(){
let response = await fetch('http://localhost:8080/mascotas/');
let data = await response.json();
console.log(data);
return data;
}
function allFetch(){
    console.log("Antes de fetch");

    fetch('http://localhost:8080/mascotas/')
    .then(function(response){
        console.log("REspuesta fetch");
        return Promise.resolve(response);
        })

    .then(function(text){
        console.log("Respuesta texto");
        return text.json();
    })
    .then(function(data) {
        console.log(`DATA: ${data}`)
    })

    .catch(function(error){
        console.log(`Error: ${error}`);
    });

    console.log('Después de fecth')
}


function AllJsonQuery(){
    document.getElementById("resultado").innerHTML = " "; 
    console.log("Antes de JSON");
    $.ajax({type: "GET",
        url:"http://localhost:8080/mascotas/",
        dataType:"json",
        success:function(data) {
            console.log(data.responseText);
            for (let i = 0 ; i< data.length;i++){
            document.getElementById("resultado").innerHTML += "s"; 
            }
            $("#resultado").innerHTML;

         },
        error: function(xhr,status,e) { }
    });
    console.log("después de JSON");

}


function Allhtx(){
    let mascotasArray;
    console.log("Antes de Inicializar el HTML Request");

    request.addEventListener('load',function(){
        console.log("En HTML Request");

        console.log(JSON.parse(request.responseText));
        mascotasArray = JSON.parse(request.responseText);
        document.getElementById('resultado').innerHTML="";
        for (let i = 0;i<mascotasArray.length;i++ ){
            document.getElementById('resultado').innerHTML+="<div id='resultado"+i+"'>"+mascotasArray[i].name+"</div>";
        }
    });
    console.log("Antes de los Requests");
    request.open('get','http://localhost:8080/mascotas/',true);
    request.setRequestHeader('Content-type', 'application/json','Access-Control-Allow-Origin');
    request.send();
    $("#resultado").html("");
}


function callIdFetch(){
    const id = document.getElementById('callId').value;
    fetch('http://localhost:8080/mascotas/'+id+'/')
    .then(function(response){
        console.log("REspuesta fetch");
        return Promise.resolve(response);
        })

    .then(function(text){
        console.log("Respuesta texto");
        return text.json();
    })
    .then(function(data) {
        console.log(`DATA: ${data}`)
    })

    .catch(function(error){
        console.log(`Error: ${error}`);
    });

    console.log('Después de fecth')

}

function callByIdHt(){
    const id = document.getElementById('callId').value;
    let mascota;
    let numero = 0;
    console.log("Antes de Inicializar el HTML Request");

    request.addEventListener('load',function(){
        console.log("En HTML Request");

        console.log(JSON.parse(request.responseText));
        mascota = JSON.parse(request.responseText);
        numero++;
        document.getElementById('respuestaId').innerHTML+="<div id='mascota"+numero+"'>"+mascota.name+"</div>";
        
    });
    console.log("Antes de los Requests");
    request.open('get','http://localhost:8080/mascotas/'+id+'/',true);
    request.setRequestHeader('Content-type', 'application/json','Access-Control-Allow-Origin');
    request.send();

}

function callNameFetch(){
    let name = document.getElementById('callName').value;
    fetch('http://localhost:8080/mascotas/nombre/'+name+'/')
    .then(function(response){
        console.log("REspuesta fetch");
        return Promise.resolve(response);
        })

    .then(function(text){
        console.log("Respuesta texto");
        return text.json();
    })
    .then(function(data) {
        console.log(`DATA: ${data}`)
    })

    .catch(function(error){
        console.log(`Error: ${error}`);
    });

    console.log('Después de fecth')
}

function callNombreByHTX(){
    
    const nombre = document.getElementById('callName').value;
    let mascota;
    let numero = 0;
    let long = 0 ;
    console.log("Antes de Inicializar el HTML Request");

    request.addEventListener('load',function(){
        console.log("En HTML Request");
        console.log(JSON.parse(request.responseText));
        mascota = JSON.parse(request.responseText);
        long=JSON.parse(request.responseText).length;
        document.getElementById('resultadoNombre').innerHTML="";
        for (let i = 0;i<long;i++ ){
            document.getElementById('resultadoNombre').innerHTML+="<div id='mascota"+numero+"'>"+mascota[i].name+"</div>";
        }

    });
    console.log("Antes de los Requests");
    request.open('get','http://localhost:8080/mascotas/nombre/'+nombre+'/',true);
    request.setRequestHeader('Content-type', 'application/json','Access-Control-Allow-Origin');
    request.send();
}

function callEspecieMezclaFetch(){
    const esp = document.getElementById('especie').value;
    const mezcla = document.getElementById('mezcla').value;
    fetch('http://localhost:8080/mascotas/nombre y especie/'+esp+' y '+mezcla+'/')
    .then(function(response){
        console.log("REspuesta fetch");
        return Promise.resolve(response);
        })

    .then(function(text){
        console.log("Respuesta texto");
        return text.json();
    })
    .then(function(data) {
        console.log(`DATA: ${data}`)
    })

    .catch(function(error){
        console.log(`Error: ${error}`);
    });

    console.log('Después de fecth')
}

function callMezclaEspecieByHTX(){
    const especie = document.getElementById('especie').value;
    const mezcla = document.getElementById('mezcla').value;
    let mascota;
    let numero = 0;
    let long = 0 ;
    console.log("Antes de Inicializar el HTML Request");

    request.addEventListener('load',function(){
        console.log("En HTML Request");
        console.log(JSON.parse(request.responseText));
        mascota = JSON.parse(request.responseText);
        long=JSON.parse(request.responseText).length;
        document.getElementById('resultadoEspecieMezcla').innerHTML="";
        for (let i = 0;i<long;i++ ){
            document.getElementById('resultadoEspecieMezcla').innerHTML+="<div id='mascota"+numero+"'>"+mascota[i].name+"</div>";
        }

    });
    console.log("Antes de los Requests");
    request.open('get','http://localhost:8080/mascotas/nombre y especie/'+especie+' y '+mezcla+'/',true);
    request.setRequestHeader('Content-type', 'application/json','Access-Control-Allow-Origin');
    request.send();
}

function deleteByFetch(){
    const mascotasId = document.getElementById('id').value;
    fetch('http://localhost:8080/mascotas/Borrar mascota/'+mascotasId+'/',{method: 'DELETE'})
    .then(function(response){
        console.log("REspuesta fetch");
        return Promise.resolve(response);
        })
    .then(function(text){
        console.log("Respuesta texto");
        return text.json();
    })
    .then(function(data) {
        console.log(`DATA: ${data}`)
    })
    .catch(function(error){
        console.log(`Error: ${error}`);
    });
    console.log('Después de fecth')
}

function deleteByHt(){
    const mascotaId = document.getElementById('id').value;
    console.log("Antes de Inicializar el HTML Request");
    console.log("Mascota Borrada");
    request.open('delete','http://localhost:8080/mascotas/Borrar mascota/'+mascotaId+'/',true);
    request.setRequestHeader('Content-type', 'application/json','Access-Control-Allow-Origin');
    request.send(null);

}

function createMascotaByFetch(){
    /*
    let datos = FormData();
    datos.append(document.getElementById('bodyData').value);
    */
   const nombreMascota = document.getElementById('nombre').value;
   const especieMascota = document.getElementById('especieMascota').value;
   const mezclaMascota = document.getElementById('mezclaMascota').value;
   const edadMascota = document.getElementById('edad').value; 
   fetch('http://localhost:8080/mascotas/crear mascota/',{method: 'POST',
     headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
            name:nombreMascota,
            especie:especieMascota,
            mezcla:mezclaMascota,
            edad:edadMascota
        })
    })
    .then(function(response){
        console.log("REspuesta fetch");
        return response.json();
        }).then(function(text){
        console.log("Respuesta texto");
        console.log(JSON.stringify(text))
    })
    .catch(function(error){
        console.log(`Error: ${error}`);
    });
    console.log('Después de fecth')
}

function createMascotaByHTX(){
    const nombreMascota = document.getElementById('nombre').value;
   const especieMascota = document.getElementById('especieMascota').value;
   const mezclaMascota = document.getElementById('mezclaMascota').value;
   const edadMascota = document.getElementById('edad').value; 
   let data =JSON.stringify( { "nombre":nombreMascota,
                "especie": especieMascota,
                "mezcla":mezclaMascota,
                "edad":edadMascota
              });
    console.log("Antes de Inicializar el HTML Request");
    console.log("Mascota Borrada");
    request.open('POST','http://localhost:8080/mascotas/crear mascota/',true);
    request.setRequestHeader('Content-type', 'application/json','Access-Control-Allow-Origin');
    request.send(data);


}