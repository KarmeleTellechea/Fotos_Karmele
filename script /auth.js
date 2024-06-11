        const users = [
            { username: 'luisito', contrasena: '123' },
            { username: 'chris', contrasena: '456' },
            { username: 'mario', contrasena: '789' },
        ];
    function iniciarSesion() {
        const urlParams = new URLSearchParams(window.location.search);
        const usernames = urlParams.get('username');
        const password = urlParams.get('pwd');
        const condiciones = urlParams.get('condiciones');
            var verify = !!users.find(element => element.username === usernames && element.contrasena === password)
 
            console.log(verify);
          
            if (verify) {
              alert('¡Correo y contraseña correctos!');
              window.location = 'fotos.html';
            } else {
              alert('Correo o contraseña incorrecta');
              window.location = 'index.html';
            }
          }
      
      iniciarSesion();