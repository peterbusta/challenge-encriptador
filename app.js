// Función para mostrar/ocultar el mensaje, textarea y botón según el contenido del textarea
function interruptorVisibilidad() {
    var resultado = document.getElementById("resultado").value;
    var botonCopiar = document.getElementById("copiar");
    var mensajeVacio = document.getElementById("mensaje-vacio");
    var textareaResultado = document.getElementById("resultado");

    if (resultado.trim() !== "") {
        // Mostrar textarea y botón, ocultar mensaje vacío
        botonCopiar.classList.remove("oculto");
        textareaResultado.classList.remove("oculto");
        mensajeVacio.classList.add("oculto");
    } else {
        // Mostrar mensaje vacío, ocultar textarea y botón
        botonCopiar.classList.add("oculto");
        textareaResultado.classList.add("oculto");
        mensajeVacio.classList.remove("oculto");
    }
}

//Verifica si el texto ingresado cumple con las condiciones (letras minúsculas y espacios) para ser encriptado
function esTextoValido(texto) {
    return /^[a-z\s]*$/.test(texto);
}

//Encriptador
function encriptar() {
    let texto = document.getElementById("texto").value;

    // Verificador
    if (!esTextoValido(texto)) {
        alert("El texto debe contener solo letras minúsculas y espacios, sin acentos ni caracteres especiales.");
        return;
    }

    let encriptado = '';
    for (let i = 0; i < texto.length; i++) {
        switch (texto[i]) {
            case 'a':
                encriptado += 'ai';
                break;
            case 'e':
                encriptado += 'enter';
                break;
            case 'i':
                encriptado += 'imes';
                break;
            case 'o':
                encriptado += 'ober';
                break;
            case 'u':
                encriptado += 'ufat';
                break;
            default:
                encriptado += texto[i];
        }
    }

    document.getElementById("resultado").value = encriptado;

    interruptorVisibilidad();
}

//Desencriptador
function desencriptar() {
    let textoEncriptado = document.getElementById("texto").value;

    // Verificador
    if (!esTextoValido(textoEncriptado)) {
        alert("El texto debe contener solo letras minúsculas y espacios, sin acentos ni caracteres especiales.");
        return;
    }

    let textoOriginal = textoEncriptado
        .replace(/ai/g, "a")
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById("resultado").value = textoOriginal;

    interruptorVisibilidad();
}

//Copiador de texto
function copiarTexto() {
    var textareaResultado = document.getElementById("resultado");

    // Seleccionar el texto del textarea
    textareaResultado.select();
    textareaResultado.setSelectionRange(0, 99999);

    // Copiar el texto al portapapeles
    document.execCommand("copy");
}