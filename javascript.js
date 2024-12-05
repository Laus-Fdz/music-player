// Lista de canciones y artistas
const listaCanciones = ["Roslyn", "Old Pine", "For Emma", "Oats in the Water", "Beach Baby"];
const listaArtistas = ["Bon Iver", "Ben Howard", "Bon Iver", "Ben Howard", "Bon Iver"];

// Selección del contenedor
const divListaCanciones = document.getElementById("listaCanciones"); // Se quita el #, ya que getElementById no lo requiere

// Ejercicio 3: Mostrar lista de canciones y artistas
listaCanciones.forEach((cancion, idx) => {
    console.log(`${cancion} - id: ${idx}`);

    const song = listaCanciones[idx];
    const artist = listaArtistas[idx];

    // innerHTML para agregar canciones y artistas con un atributo id único
    divListaCanciones.innerHTML += `<div id="cancion-${idx}" class="Lista-cancion"> 
            ${song} <br> ${idx} <br> ${artist} <br>
        </div>`;
});

// Ejercicio 4: Botón para reproducir canción 3
const btnTema3 = document.querySelector("#btnTema3");
btnTema3.addEventListener("click", () => {
    // índice 2 es la canción número 3 porque los arrays comienzan en 0
    console.log("Cancion: ", listaCanciones[2]); 
    console.log("Artista: ", listaArtistas[2]);
});

// Ejercicio 5: Botones de control
// Seleccionamos los botones del DOM
const btnAnt = document.querySelector("#btnAnt");
const btnPlay = document.querySelector("#btnPlay");
const btnPausa = document.querySelector("#btnPausa");
const btnSig = document.querySelector("#btnSig");

// Agregamos eventos a cada botón
btnAnt.addEventListener('click', (event) => {
    console.log(event.target.id);
});
btnPlay.addEventListener('click', (event) => {
    console.log(event.target.id);
});
btnPausa.addEventListener('click', (event) => {
    console.log(event.target.id);
});
btnSig.addEventListener('click', (event) => {
    console.log(event.target.id);
});

// Ejercicio 6: Mostrar nombre de canción y artista al hacer clic en cada div
// Seleccionamos todos los divs generados con la clase "Lista-cancion"
const divsCanciones = document.querySelectorAll(".Lista-cancion");
const divsPlayingSong = document.getElementById("playingSong");

divsCanciones.forEach((divCancion, i) => {
    divCancion.addEventListener("click", () => {
        const song = listaCanciones[i];
        const artist = listaArtistas[i];
        console.log("Artista: " + artist + ", Canción: " + song);

        divsPlayingSong.innerHTML = `<div> 
        Canción: ${song}<br> Artista: ${artist}
        </div>`;
    });
});

function imprimirReproduciendo(i){
    const song = listaCanciones[i];
    const artist = listaArtistas[i];
    console.log("Artista: " + artist + ", Canción: " + song);

    divsPlayingSong.innerHTML = `<div> 
    Canción: ${song}<br> Artista: ${artist}
    </div>`;
}


// Bonotes de siguiente y anterior

let idCancionActual = 0; // primera canción
btnSig. addEventListener("click", ()=>{
    idCancionActual++;
    imprimirReproduciendo(idCancionActual);
});
btnAnt. addEventListener("click", ()=>{
    idCancionActual--;
    imprimirReproduciendo(idCancionActual);
});

