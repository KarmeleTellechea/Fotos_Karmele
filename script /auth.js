function Login(){ 
    var done=0; 
    var usuario=document.login.usuario.value; 
    var password=document.login.password.value; 
    if (usuario=="USUARIO1" && password=="CONTRASEÑA1") { 
    window.location="fotos.html"; 
    } 
    if (usuario=="USUARIO2" && password=="CONTRASEÑA2") { 
    window.location="fotos.html"; 
    } 
    if (usuario=="" && password=="") { 
    window.location="index.html"; 
    } 
   
    } 
    alert("alerta")
    Login()