document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Aquí puedes agregar tu lógica de autenticación
    if (username === 'admin' && password === 'password') {
        document.getElementById('message').innerText = '¡Inicio de sesión exitoso!';
        document.getElementById('message').style.color = 'green';
        // Redirigir o realizar otra acción aquí
    } else {
        document.getElementById('message').innerText = 'Usuario o contraseña incorrectos.';
    }
});
