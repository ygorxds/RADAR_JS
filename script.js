function calcular() {
  const speed = window.document.getElementById("speed");
  const speedReal = Number(speed.value);

  const res = window.document.getElementById("res");

  if (speedReal > 100) {
    res.innerHTML = "MULTADO";
    res.innerHTML += " entre no site do detran da sua cidade";
  } else if (speedReal <= 0) {
    res.innerHTML = "INSIRA UM VALOR VALIDO!";
  } else {
    res.innerHTML = "NADA CONSTA";
  }
}
