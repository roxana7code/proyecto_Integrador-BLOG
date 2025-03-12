document.getElementById("icon-menu").addEventListener("click", mostrar_menu);

function mostrar_menu(){

    document.getElementById("move-content").classList.toggle('move-container-all');
    document.getElementById("show-menu").classList.toggle('show-lateral');
}  

document.getElementById("btnGuardarPost").addEventListener("click", function () {
    let contenidoPost = document.getElementById("contenidoPost").value;
    alert("Post guardado correctamente.");
document.getElementById("contenidoPost").value = ""; // Limpiar el textarea

// Redirigir a la página principal para ver los posts
window.location.href = "index.html"; 


    if (contenidoPost.trim() === "") {
        alert("El contenido del post no puede estar vacío.");
        return;
    }

    let posts = JSON.parse(localStorage.getItem("posts")) || []; // Obtener los posts previos o crear un array vacío
    let nuevoPost = {
        id: new Date().getTime(), // ID único basado en la fecha actual
        contenido: contenidoPost
    };

    posts.push(nuevoPost); // Agregar el nuevo post
    localStorage.setItem("posts", JSON.stringify(posts)); // Guardar en localStorage

    alert("Post guardado correctamente.");
    document.getElementById("contenidoPost").value = ""; // Limpiar el textarea
});
