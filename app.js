
    let name = " ";
    let grado = " ";
    
function getData(){
    name = document.getElementById('name').value;
    grado = document.getElementById('lista').value;
if (name=="") {
    alert('Falta Dato Obligatorio');
}else{
    console.log (name+" "+grado);
    
    if (grado == "Primer Grado") {
    document.getElementById("inicio").style.display="none";
    document.getElementById("opciones1").style.display = 'block';
    document.getElementById("respuestas_vrb").style.display="none"; 
    document.getElementById("respuestas_math").style.display="none";
    document.getElementById('cont1').innerHTML = 'Bienvenid@ a la trivia ' + ' ' + name;
    document.getElementById("cont4").innerHTML = 'Nivel' + '  '+ grado;
    } else {
        alert('Falta Ingresar GRADO');
    }
    }      
}
function getRm(){
    document.getElementById("respuestas_vrb").style.display="none"; 
    document.getElementById("respuestas_math").style.display="none";
    document.getElementById("inicio").style.display="none";
    document.getElementById("opciones1").style.display="none";
    document.getElementById("razon_vrb1").style.display="none";
    document.getElementById("razon_math1").style.display="block";
    document.getElementById('cont2').innerHTML = 'RAZONAMIENTO MATEMÁTICO';
}
function getRv(){
    document.getElementById("opciones1").style.display="none";   
    document.getElementById("razon_vrb1").style.display="block";
    document.getElementById("respuestas_vrb").style.display="none"; 
    document.getElementById("respuestas_math").style.display="none";
    document.getElementById('cont3').innerHTML = 'RAZONAMIENTO VERBAL';
}
function atras(){
    document.getElementById("opciones1").style.display = 'block';
    document.getElementById("inicio").style.display="none";
    document.getElementById("razon_math1").style.display="none";
    document.getElementById("razon_vrb1").style.display="none";
    document.getElementById("respuestas_vrb").style.display="none"; 
    document.getElementById("respuestas_math").style.display="none";
}
function resp_math(){
    document.getElementById("razon_math1").style.display="none";
    document.getElementById("respuestas_math").style.display="block";
    let type = document.getElementsByName("type");

    if (type[0].checked) {
        document.getElementById('cont4').innerHTML = type[0].value;
        
    } 
}
function resp_vrb(){
    document.getElementById("razon_vrb1").style.display="none";
    document.getElementById("respuestas_vrb").style.display="block";    
}
function inicio_1(){
    document.getElementById("opciones1").style.display = 'block';
    document.getElementById("inicio").style.display="none";
    document.getElementById("razon_math1").style.display="none";
    document.getElementById("razon_vrb1").style.display="none";
    document.getElementById("respuestas_vrb").style.display="none"; 
    document.getElementById("respuestas_math").style.display="none";
}


const getResp1= ()=>{
    
}

window.onload = ()=>{
    let inputs = document.querySelectorAll("input[type='radio']")
    inputs.forEach((item)=>{
        item.onclick = ()=>{
            let inputs = document.querySelectorAll("input[type='radio']")
            inputs.forEach((item)=>{
                if(item.checked)
                    console.log(item.value)
            })
        }
    })
}