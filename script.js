
/*
====================================================
 PROYECTO: MI REGISTRO ESTUDIANTIL
 Autor: Adonis Mauricio Guzmán Henríquez
 1TB Software - Código 13
 Año: 2026

 Objetivo:
 Capturar, validar y mostrar los datos
 personales y académicos de los estudiantes.
====================================================
*/

// Obtener el formulario y las áreas de resultados
const formulario = document.getElementById("formulario");
const mensaje = document.getElementById("mensaje");
const resultado = document.getElementById("resultado");

// Escuchar el evento submit del formulario
formulario.addEventListener("submit", function(evento) {

    // Evitar que la página se recargue
    evento.preventDefault();

    // 1. CAPTURAR LOS DATOS MEDIANTE .value
    const nombre = document.getElementById("nombre").value.trim();
    const nie = document.getElementById("nie").value.trim();
    const edad = document.getElementById("edad").value.trim();
    const grado = document.getElementById("grado").value;
    const seccion = document.getElementById("seccion").value;
    const correo = document.getElementById("correo").value.trim();
    const telefono = document.getElementById("telefono").value.trim();

    // 2. VERIFICAR QUE NINGÚN CAMPO ESTÉ VACÍO
    if (
        nombre === "" ||
        nie === "" ||
        edad === "" ||
        grado === "" ||
        seccion === "" ||
        correo === "" ||
        telefono === ""
    ) {
        mensaje.textContent =
            "⚠ Debe completar todos los campos.";

        mensaje.style.color = "#ffaaaa";
        resultado.style.display = "none";

        return;
    }

    // Validación adicional de la edad
    const edadNumero = Number(edad);

    if (!Number.isFinite(edadNumero) || edadNumero <= 0) {
        mensaje.textContent =
            "⚠ La edad debe ser un número mayor que 0.";

        mensaje.style.color = "#ffaaaa";
        resultado.style.display = "none";

        return;
    }

    // 3. PREPARAR LOS DATOS DEL ESTUDIANTE
    const datos = [
        ["Nombre completo", nombre],
        ["NIE", nie],
        ["Edad", edadNumero + " años"],
        ["Grado", grado],
        ["Sección", seccion],
        ["Correo", correo],
        ["Teléfono", telefono]
    ];

    // 4. MOSTRAR LA INFORMACIÓN REGISTRADA
    mensaje.textContent = "";
    resultado.replaceChildren();

    // Crear el título de confirmación
    const titulo = document.createElement("h3");
    titulo.textContent =
        "✓ ESTUDIANTE REGISTRADO CORRECTAMENTE";

    resultado.appendChild(titulo);

    // Crear un párrafo por cada dato
    datos.forEach(function(dato) {
        const parrafo = document.createElement("p");
        const etiqueta = document.createElement("strong");

        etiqueta.textContent = dato[0] + ": ";

        parrafo.appendChild(etiqueta);
        parrafo.appendChild(
            document.createTextNode(dato[1])
        );

        resultado.appendChild(parrafo);
    });

    // Hacer visible el resultado
    resultado.style.display = "block";

    // Confirmar el proceso en la consola
    console.log("Estudiante registrado correctamente.");
    console.log(datos);
});