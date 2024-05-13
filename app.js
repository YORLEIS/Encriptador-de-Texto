const campoEncriptado = document.getElementById('campo-encriptado');
const cajaResultado = document.getElementById('caja-resultado');
const btnEnc = document.getElementById('btn-enc');
const btnDesen = document.getElementById('btn-desen');
const btnCopiar = document.getElementById('btn-copiar');


const matriz = [ 
  ['e', 'enter'],
  ['i', 'imes'],
  ['a', 'ai'],
  ['o', 'ober'],
  ['u', 'ufat']
]

function mostrarBotonCopiar() {
    btnCopiar.style.display = 'block';
}

btnEnc.addEventListener('click', function() {
    let evaluar = campoEncriptado.value.trim('')
    if (evaluar!=='') {
        const texto = Encriptador(campoEncriptado.value)
        cajaResultado.value = texto
        campoEncriptado.value = ''
        cajaResultado.style.backgroundImage = 'none';
       
    }else{
        alert('No hay texto para Encriptar')
    }
 
}) ;

btnDesen.addEventListener('click', function() {
    let evaluar = campoEncriptado.value.trim('')
    
    if (evaluar!=='') {
        const valor = Desencriptador(campoEncriptado.value)
        cajaResultado.value = valor
        campoEncriptado.value = ''
        cajaResultado.style.backgroundImage = 'none';
       
    }else{
        alert('No hay texto para Desencriptar')
    }
   

}) ;

function Encriptador(frase) {

     // Verificar si la frase contiene caracteres especiales o letras con acentos
     const regex = /^[a-z\s]*$/; // Expresión regular para letras minúsculas sin acentos
   
     if (!regex.test(frase)) {
        
         alert("No se permiten caracteres especiales ni letras con acentos. Por favor, ingresa solo letras minúsculas.");
         return ''; // Devuelve la fase original si no cumple con el requisito
     }else{
         // Si la frase es válida, procede con la encriptación
        for (let i = 0; i < matriz.length; i++) {
            if (frase.includes(matriz[i][0])) {
                frase = frase.replaceAll(
                    matriz[i][0],
                    matriz[i][1]
                );
            }
        }
          
        mostrarBotonCopiar();
     }
  
 
    return frase;
}

function Desencriptador(fraseDesen) {
  
 // Verificar si la frase contiene caracteres especiales o letras con acentos
 const regex = /^[a-z\s]*$/; // Expresión regular para letras minúsculas sin acentos

 let palabraEncontrada = false;
    if (!regex.test(fraseDesen)) {
        alert("No se permiten caracteres especiales ni letras con acentos. Por favor, ingresa solo letras minúsculas.");
        return ''; // Devuelve la frase original si no cumple con el requisito
    }else{
        for (let i = 0; i < matriz.length; i++) {
            if(fraseDesen.includes(matriz[i][1]) ){
               fraseDesen= fraseDesen.replaceAll(
                 matriz[i][1],
                 matriz[i][0]
               )
               
       // Variable para verificar si se encontró una palabra para desencriptar
               palabraEncontrada = true;
            }
         }
    }
   
    if(!palabraEncontrada){
        alert('Lo sentimos, su frase no se pudo desencriptar.');
        return '';
    }
    return fraseDesen;
}

// BOTON COPIAR

btnCopiar.addEventListener('click', function() {
    const texto = cajaResultado.value.trim(); // Eliminar espacios en blanco al inicio y al final
    
    if (texto!='') {
        navigator.clipboard.writeText(texto)
            .then(() => alert("El texto se ha copiado correctamente al portapapeles"))
            .catch(err => console.error('Error al copiar el texto: ', err));
    } else {
        alert("No hay texto para copiar");
    }
});

// Mostrar h2 y p
//  el evento load se dispara cuando todos los recursos de la página web 
// (como imágenes, hojas de estilo, scripts, etc.) han sido completamente cargados
window.addEventListener('load', function() {
    // Obtener los elementos h2 y p
    const noMessages = document.getElementById('no-messages');
    const mensaje = document.getElementById('mensaje');

    // Obtener los textos de los elementos h2 y p
    const textoNoMessages = noMessages.textContent;
    const textoMensaje = mensaje.textContent;

    // Establecer los textos en el área de texto caja-resultado
    cajaResultado.value = textoNoMessages + '\n' + textoMensaje;
});




