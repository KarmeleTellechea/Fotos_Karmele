  const users = [
    { username: 'luisito', contrasena: '123' },
    { username: 'chris', contrasena: '456' },
    { username: 'mario', contrasena: '789' },
  ];
  function iniciarSesion() {
    const urlParams = new URLSearchParams(window.location.search);
    const usernames = urlParams.get('username');
    const password = urlParams.get('pwd');
    var verify = !!users.find(element => element.username === usernames && element.contrasena === password)
      console.log(verify);
    if (verify) {
       window.location.href = 'http://127.0.0.1:5500/fotos.html?auth=Ok';
    } else {
      alert('Usuario o contraseña incorrecta');
      window.location = 'index.html';
    }
  }
      
  iniciarSesion();