  const users = [
    { username: 'luisito', contrasena: '123' },
    { username: 'chris', contrasena: '456' },
    { username: 'mario', contrasena: '789' },
    { username: 'karmele', contrasena: 'karmele' },
  ];
  function iniciarSesion() {
    const urlParams = new URLSearchParams(window.location.search);
    const usernames = urlParams.get('username');
    const password = urlParams.get('pwd');
    let verify = !!users.find(element => element.username === usernames && element.contrasena === password)
      console.log(verify);
    if (verify) {
       window.location.href = 'fotos.html?auth=Ok';
    } else {
      alert('Usuario o contraseña incorrecta');
      window.location.href = 'https://karmeletellechea.github.io/Fotos_Karmele/'; // ../../index
    }
  }
      
  iniciarSesion();