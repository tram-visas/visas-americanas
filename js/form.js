document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
  const telefono = "9511152272";

  const cliente = document.querySelector("#cliente").value;
  const fecha = document.querySelector("#fecha").value;
  const hora = document.querySelector("#hora").value;
  const oficina = document.querySelector("#oficina").value;
  const resp = document.querySelector("#respuesta");

  resp.classList.remove("fail");
  resp.classList.remove("send");

  const url = `https://api.whatsapp.com/send?phone=${telefono}&text=
		*CITA VISA AMERICANA*%0A
		*Programación de cita*%0A%0A
		*Nombre*%0A
		${cliente}%0A
		*Fecha de cita*%0A
		${fecha}%0A
		*Hora de cita*%0A
		${hora}%0A
		*Oficina de cita*%0A
		${oficina}%0A`;

  if (cliente === "" || fecha === "" || hora === "") {
    resp.classList.add("fail");
    resp.innerHTML = `Faltan algunos datos ${cliente}`;
    return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `Se ha enviado tu cita ${cliente}`;

  window.open(url);
});
