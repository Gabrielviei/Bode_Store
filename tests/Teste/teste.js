function mostrar(){
    const elemento = document.getElementById("mostrar");

    if (elemento.style.display === "none") {
        elemento.style.display = "flex";
      } else {
        elemento.style.display = "none";
      }

}

