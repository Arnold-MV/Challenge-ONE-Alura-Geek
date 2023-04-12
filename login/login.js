function validar() {
  event.preventDefault();
  let user, password;
  user = document.getElementById("username").value;
  password = document.getElementById("password").value;
  if (user == "admin@admin.com" && password == "12345") {
    window.location = "../screen/admin.html";
  } else {
    alert("Datos Incorrectos");
  }
}
