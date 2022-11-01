const TITULO = "Reservas";
let mainSection = document.getElementById("section_main");
let reservasContainer = document.createElement("div");
let sectionTitulo = document.createElement("figcaption")

function createSectionMain(titulo = 'RGWEB3') {
    mainSection.appendChild(reservasContainer);
    reservasContainer.appendChild(sectionTitulo);
    sectionTitulo.innerHTML = titulo;
    sectionTitulo.className = 'text-center'
}

//createSectionMain(TITULO)