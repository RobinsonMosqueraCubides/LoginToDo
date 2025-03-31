function login() {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    var message = document.getElementById("message");
    
    if (user === "user1" && pass === "user1") {
        message.style.color = "green";
        message.textContent = "Inicio de sesión exitoso.";
        
        // Redirigir a listaDeTarea.html
        setTimeout(function() {
            window.location.href = "views/listaDeTarea.html";
        }, 1000); // Redirige después de 1 segundo para mostrar el mensaje
    } else {
        message.style.color = "red";
        message.textContent = "Usuario o contraseña incorrectos.";
    }
}
