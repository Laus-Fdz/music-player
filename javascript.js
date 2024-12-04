const listaCanciones = ["Roslyn", "Old Pine", "For Emma", "Oats in the Water", "Beach Baby"];
const listaArtistas = ["Bon Iver", "Ben Howard", "Bon Iver", "Ben Howard", "Bon Iver"];

const divCanciones = document.getElementById("ListaCanciones");

listaCanciones.forEach((cancion, idx)=>{
    console.log(`${cancion} - id: ${idx}`);
    divCanciones.innerHTML += `<div class="Lista-cancion"> 
                                ${cancion} <br> ${idx}
                                </div>`;
});



