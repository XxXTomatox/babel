class flamewai{
    constructor(url,data,method){
        this.url = url
        this.data = data
        this.method = method
    }
    visualisar(){
        fetch(this.url,{
            body:this.data,
            method:this.method
        })
        .then(respuesta => respuesta.json())
        .then(async respuesta => {
            console.log(respuesta);
        })
    }
    async consulta(filtro= ""){
        await fetch(`${this.url}/?${filtro}`,{
            body:this.data,
            method:this.method
        })
        .then(respuesta => respuesta.json())
        .then(respuesta => {
            respuesta.map(contenido =>{
                return contenido
            });
        }).catch(error =>{
            console.log(`Error de consulta:\n ${error}`);
        })
    }

    actualizar(){
        fetch(this.url,{
            method: "PUT",
            body: this.data
        })
        .then((respuesta)=>{respuesta.json})
        .then((respuesta)=>{
            if (respuesta[0]==1) {
                respuesta[1].map((dato)=>{
                    console.log(dato);
                });
            }else{
                console.warn(respuesta[1]);
            }
        })
    }

    eliminar(){
        fetch(this.url,{
            body:this.data,
            method:"DELETE"
        })
        .then(respuesta => respuesta.json())
        .then(async respuesta => {
            if (respuesta[0]==1) {
                respuesta[1].map(dato=>{
                    console.log(dato);
                });
            }else{
                console.warn(respuesta[1]);
            }
        }).catch(error=>{
            console.log(`se a producido un error en el proseso de eliminar: \n ${error}`);
        })
    }
    
    insertar(){
        fetch(this.url,{
            body:this.data,
            method:this.method
        })
        .then(respuesta => respuesta.json())
        .then(async respuesta => {
            console.log(`${respuesta} de insertar`);
        })
    }

}

const mis_input = ["nombre","telefono","email","edad"];

class validar{
    vacios(datos_validar){
        for(let i = 0; i< datos_validar.length;i++){
            let valor = document.getElementById(datos_validar[i]).value;
            if (valor == "") {
                alert(`El campo ${datos_validar[i]} no puede ir vacio`)
            }
        }
    }
    email(input){
        let validacion = document.getElementById(input).value;
        let email = /^\w+@(\w+\.)+\w{2,4}$/;
        if (!email.test(validacion)) {
            alert(`El campo ${input} debe contener un email valido`)
        }
    }
    letras(input){
        let validacion = document.getElementById(input).value;
        let letras = /^[a-zA-Z\s]+$/;
        if (!letras.test(validacion)) {
            alert(`El caompo ${input} debe contener solo letras`)
        }
    }
    telefono(input){
        let validacion = document.getElementById(input).value;
        let telefono = /^[0-9\s]{10}+$/;
        if (!telefono.test(validacion)) {
            alert(`El campo ${input} debe contener un telefono valido`);
            return false;
        }
    }
    nacimiento(input){
        let validacion = document.getElementById(input).value;
        let nacimiento = /^[0-9\s]+$/;
        if (!nacimiento.test(validacion)) {
            alert(`El campo ${input} debe contener una edad valido`)
        }
    }
} 
 
let validacion =new validar();
const enviar = () =>{
    validacion.vacios(mis_input);
    validacion.email("email");
    validacion.letras("nombre");
    validacion.telefono("telefono");
    validacion.nacimiento("edad");
}


// let datos = new FormData();
// let envio = new flamewai('php/info.php',datos,'GET');
// envio.consulta("filtro=color");


class interfaz{
    msj_error(msj){
        swal({
            title:`Error!`,
            text:msj,
            icon:`warning`,
            button:`aceptar`,
        });
    }
    msj_exito(msj){
        swal({
            title:`Correcto!`,
            text:msj,
            icon:`succes`,
            button:`aceptar`,
        });
    }
}

class validaciones extends interfaz{
    static resticcion={
        "vacios":{
            "extencion":/(?!(^$))/,
            "msj":"No puedes dejar vacio el campo"
        },
        "letras":{
            "extencion":/^([a-zA-Záéíóú]+[\s]?)/i,
            "msj":"solo ingresar letras en el campo"
        },
        "numeros":{
            "extencion":/^([0-9])+$/,
            "msj":"solo ingresar numeros en el campo"
        },
        "email":{
            "extencion":/^\w+@(\w+\.)+\w{2,4}$/,
            "msj":"ingresa un email valido"
        },
        "curp":{
            "extencion":/^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/,
            "msj":"Escritura de CURPno valida!"
        },
        "rfc":{
            "extencion":/^[A-ZÑ&]{4}[0-9]{6}[A-Z0-9]{3}$/,
            "msj":"Escritura de RFC no valida!"
        },
        "password":{
            "extencion":/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!\.\-_%*?&])([A-Za-z\d$@$\.\-_!%*?&]|[^ ]){8,1512i}$/,
            "msj":"Escritura de contraseña no valida!\n\nRequisitos para una contraseña:\n-Minimo 8 caracteres\n-Maximo 15 caracteres\n-Al menosuna letra mayuscula\n-Al menos una letra n¿minuscula\n-Al menos un digito\n-No espacios en blanco\n-Al menos 1 caracter especial: @ $ ! % * ? &"
        },
    }
    limpiar_cadena = (cadena,caracter_busqueda,caracter_remplazo)=>{
        return cadena.replace(`${caracter_busqueda}`,`${caracter_remplazo}`);
    } 
    validar_campo(input,tipo_validacion,mensaje=""){
        let resultado=true;
        let error = "";
        let msj_final="";
        const incorrecto = (nombre,msj)=>{
            error = (error=="")?nombre:error;
            msj_final=(msj_final=="")?msj :msj_final;
            return false
        }
        if (Array.isArray(input)) {
            if (Array.isArray(tipo_validacion)) {
                tipo_validacion.map(validacion =>{
                    let {expresion,msj}=Validacion.resticcion[validacion];
                    input.map(nombre =>{
                        resultado = expresion.test(document.getElementsByName(`${nombre}`)[0].value)?resultado:incorrecto(document.querySelector('[for="'+nombre+'"]').textContent,msj)
                    });
                });
            }else{
                const{expresion,msj}=validacion.resticcion[tipo_validacion];
                input.map(nombre=>{
                    resultado= expresion.test(document.getElementsByName(`${nombre}`)[0].value)?resultado:incorrecto(document.querySelector('[for="'+nombre+'"]').textContent,msj);
                });
            }
        }
        error != ""?this.msj_error(mensaje!=""?mensaje:`${msj_final} ${error}`):error;
        return resultado;
    }

    caracteres_mayus= ()=>{
        document.getElementsByName(`${input}`)[0].addEventListener("input",()=>{
            document.getElementsByName(`${input}`)[0].value=document.getElementsByName(`${input}`)[0].value.toUpperCase();
        })
    }
    caracteres_minus= ()=>{
        document.getElementsByName(`${input}`)[0].addEventListener("input",()=>{
            document.getElementsByName(`${input}`)[0].value=document.getElementsByName(`${input}`)[0].value.toLowerCase();
        })
    }
    carecter_numeros=(input)=>{
        document.getElementsByName(`${input}`)[0].addEventListener("input",()=>{
            document.getElementsByName(`${input}`)[0].value = document.getElementsByName(`${input}`)[0].value.replace(/[^0-9]/g,'');
        });
    }
    carecter_letrsa=(input)=>{
        document.getElementsByName(`${input}`)[0].addEventListener("input",()=>{
            document.getElementsByName(`${input}`)[0].value = document.getElementsByName(`${input}`)[0].value.replace(/[â-zA-Záéíóú\s]/i,'');
        });
    }
    carecter_varios=(input)=>{
        document.getElementsByName(`${input}`)[0].addEventListener("input",()=>{
            document.getElementsByName(`${input}`)[0].value = document.getElementsByName(`${input}`)[0].value.replace(/([^A-Za-z0-9ñÑ])/g,'');
        });
    }
    primera_mayuscula=(input)=>{
        document.getElementsByName(`${input}`)[0].addEventListener("input",()=>{
            document.getElementsByName(`${input}`)[0].value = document.getElementsByName(`${input}`)[0].value.charAt(0).toUpperCase()+document.getElementsByName(`${input}`)[0].value.slice(1);
        });
    }
    limitar_valor = (input,inicio,fin,msj)=>{
        return document.getElementsByName(`${input}`)[0].value>inicio && document.getElementsByName(`${input}`)[0].value<fin ? true : this.msj_error(msj);
    }
    longitud_campo = (input,inicio,fin,msj)=>{
        let campo = document.getElementsByName(`${input}`)[0].value;
        return campo.length>inicio && campo.length<fin?true:this.msj_error(msj)
    }
    longitud_campo_exacta= (input,lengthud,msj)=>{
        let campo=document.getElementsByName(`${input}`)[0].value;
        return campo.length==lengthud? true:this.msj_error(msj);
    }
}