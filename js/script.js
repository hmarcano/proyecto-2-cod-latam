function escribiendoLetra() {
  function activaLetra(elemento) {
    const arrTexto = elemento.innerHTML.split("");
    elemento.innerHTML = "";
    arrTexto.forEach((letra, i) => {
      setTimeout(() => {
        elemento.innerHTML += letra;
      }, 75 * i);
    });
  }

  const titulo = document.querySelector(".digitando");
  activaLetra(titulo);
}

function activacionMenu() {
  const activarMenu = document.querySelector(".fa-bars");
  const navMenu = document.querySelector("header .navegacion-primaria");

  activarMenu.addEventListener("click", () => {
    activarMenu.classList.toggle("fa-x");
    navMenu.classList.toggle("activado");
  });
}

activacionMenu();

function sobreMi() {
  const experiencia = document.querySelectorAll(".experiencia_contenido div");
  const boton = document.querySelectorAll(".experiencia_contenido ul li");
  const educacion = document.querySelectorAll(".educacion_contenido div");
  const botonEducacion = document.querySelectorAll(
    ".educacion_contenido ul li"
  );

  experiencia[0].classList.add("activo");
  boton[0].classList.add("activo");
  educacion[0].classList.add("activo");
  botonEducacion[0].classList.add("activo");

  function slideShow(index) {
    experiencia.forEach((division) => {
      division.classList.remove("activo");
    });
    boton.forEach((item) => {
      item.classList.remove("activo");
    });
    experiencia[index].classList.add("activo");
    boton[index].classList.add("activo");
  }

  function slideShow2(index) {
    educacion.forEach((division) => {
      division.classList.remove("activo");
    });
    botonEducacion.forEach((item) => {
      item.classList.remove("activo");
    });
    educacion[index].classList.add("activo");
    botonEducacion[index].classList.add("activo");
  }

  boton.forEach((event, index) => {
    event.addEventListener("click", () => {
      slideShow(index);
    });
  });

  botonEducacion.forEach((div, index) => {
    div.addEventListener("click", () => {
      slideShow2(index);
    });
  });
}
sobreMi();

const listaALL = document.querySelectorAll(".proyectos_almacenamiento ul li");
const buttonGeral = document.querySelectorAll(".proyecto_navegacion li");
const buttonALL = document.querySelector(".proyectos_modelos .all");

listaALL.forEach((item) => {
  item.classList.add("activo");
});

function removeClick(index) {
  buttonGeral.forEach((item) => {
    item.classList.remove("activo");
  });
  buttonGeral[index].classList.add("activo");
}

buttonGeral.forEach((event, index) => {
  event.addEventListener("click", () => {
    removeClick(index);
  });
});

function showLista(lista, buttom = "all") {
  lista.forEach((item) => {
    item.classList.remove("activo");
  });

  if (buttom == "design") {
    lista[0].classList.add("activo");
    lista[1].classList.add("activo");
  }
  if (buttom == "graphic") {
    lista[2].classList.add("activo");
    lista[3].classList.add("activo");
  }

  if (buttom == "website") {
    lista[4].classList.add("activo");
    lista[5].classList.add("activo");
    lista[6].classList.add("activo");
    lista[7].classList.add("activo");
  }

  if (buttom == "all") {
    lista[0].classList.add("activo");
    lista[1].classList.add("activo");
    lista[2].classList.add("activo");
    lista[3].classList.add("activo");
    lista[4].classList.add("activo");
    lista[5].classList.add("activo");
    lista[6].classList.add("activo");
    lista[7].classList.add("activo");
  }
}

buttonGeral.forEach((item) => {
  item.addEventListener("click", (e) => {
    let currentButton = e.target;
    if (currentButton.classList.contains("all")) {
      showLista(listaALL);
    }
    if (currentButton.classList.contains("design")) {
      showLista(listaALL, "design");
    }

    if (currentButton.classList.contains("graphic")) {
      showLista(listaALL, "graphic");
    }

    if (currentButton.classList.contains("website")) {
      showLista(listaALL, "website");
    }

    if (currentButton.classList.contains("all")) {
      showLista(listaALL, "all");
    }
  });
});
