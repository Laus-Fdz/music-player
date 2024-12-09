// -----------------------------------
//1. Nuestros datos
//-----------------------------------

// Lista de canciones y artistas
// const listaCanciones = ["Roslyn", "Old Pine", "For Emma", "Oats in the Water", "Beach Baby"];
// const listaArtistas = ["Bon Iver", "Ben Howard", "Bon Iver", "Ben Howard", "Bon Iver"];

// const listaMp3 = ["./audio/Bon Iver & St. Vincent - Roslyn (Lyrics).mp3"]

const listaCanciones = [
    {
        artista: "Bon Iver",
        url: "./audio/Bon Iver & St. Vincent - Roslyn (Lyrics).mp3",
        titulo: "Roslyn"

    },    {
        artista: "Ben Howard",
        url: "./",
        titulo: "Old Pine"

    },    {
        artista: "Bon Iver",
        url: "./",
        titulo: "For Emma"

    },    {
        artista: "Ben Howard",
        url: "./",
        titulo: "Oats in the Water"

    }
    ,    {
        artista: "Bon Iver",
        url: "./",
        titulo: "Beach Bay"

    }
];

//-----------------------------------
// 2. Constantes, Variables y QuerySelectors
//-----------------------------------

// Seleccionamos los botones del DOM
const btnAnt = document.querySelector("#btnAnt");
const btnPlay = document.querySelector("#btnPlay");
const btnPausa = document.querySelector("#btnPausa");
const btnSig = document.querySelector("#btnSig");

// Se quita el #, ya que getElementById no lo requiere
const divListaCanciones = document.getElementById("listaCanciones"); 

// Botón para reproducir canción 3
const btnTema3 = document.querySelector("#btnTema3");

// Seleccionamos todos los divs generados con la clase "Lista-cancion"
const divsCanciones = document.querySelectorAll(".Lista-cancion");
const divsPlayingSong = document.getElementById("playingSong");

// obtener nuestro audio
const audio = document.getElementById("reproductorAudio");



//-----------------------------------
// 3. Funciones y even listeners
//-----------------------------------

// Agregamos eventos a cada botón
btnAnt.addEventListener('click', (event) => {
    imprimirReproduciendo();
});
btnPlay.addEventListener('click', (event) => {
    imprimirReproduciendo();
});
btnPausa.addEventListener('click', (event) => {
    imprimirReproduciendo();
});
btnSig.addEventListener('click', (event) => {
    imprimirReproduciendo();
});

function imprimirReproduciendo(i) {
    const song = listaCanciones[i].titulo;
    const artist = listaArtistas[i].artista;
    const url = listaCanciones[i].url;
    
    console.log("Artista: " + artist + ", Canción: " + song);

    divsPlayingSong.innerHTML = `<div> 
    Canción: ${song}<br> Artista: ${artist}
    </div>`;
    // cambiar el src de nuestro audio HTML
    console.log(audio);
    audio.src = listaMp3[idCancionActual];
}


// Bonotes de siguiente y anterior

let idCancionActual = 0; // primera canción
btnSig.addEventListener("click", () => {
    if (idCancionActual == listaCanciones.length - 1) {
        idCancionActual = 0;
    } else {
        idCancionActual++;
    }

    imprimirReproduciendo(idCancionActual);
});
btnAnt.addEventListener("click", () => {
    if (idCancionActual <= 0) {
        idCancionActual = listaCanciones.length - 1;
    } else {
        idCancionActual--;
    }

    imprimirReproduciendo(idCancionActual);
});

btnPlay.addEventListener("click", () => {
    audio.play();
});

btnPausa.addEventListener("click", () => {
    audio.pause();
});


//-----------------------------------
// 4. Su código una vez cargado todo lo demás
//-----------------------------------

// Mostrar lista de canciones y artistas
listaCanciones.forEach((cancion, idx) => {
    console.log(`${cancion} - id: ${idx}`);

    const song = listaCanciones[idx].titulo;
    const artist = listaArtistas[idx].artista;

    // innerHTML para agregar canciones y artistas con un atributo id único
    divListaCanciones.innerHTML += `<div id="cancion -${idx}" class="Lista-cancion"> 
            ${song} <br> ${artist} <br>
        </div>`;
});

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



