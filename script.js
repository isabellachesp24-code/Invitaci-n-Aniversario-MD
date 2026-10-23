console.log("¡JavaScript está conectado!");

document.addEventListener("DOMContentLoaded", function () {

    console.log("La página está lista.");

    // Animación de las puertas
    const puertas = document.querySelector(".Puertas");

    if (puertas) {
        puertas.addEventListener("click", function () {
            puertas.classList.toggle("abierta");
        });
    }

  
    // Revelar la fotografía cuando termine la escalera
    const tramo = document.querySelector(".TramoEscalones");
    const foto = document.querySelector("#reveladoFoto");

    if (tramo && foto) {
        tramo.addEventListener("animationend", function (evento) {
            if (evento.animationName === "ascensoReal") {
                foto.classList.add("mostrar");
            }
        });
    }


});


    // Pequeñas chispas que deja el láser
    const fotoMarco = document.querySelector("#reveladoFoto");
    const laser = document.querySelector(".brillo-dorado");

    let intervaloChispas;

    if (fotoMarco && laser) {
        fotoMarco.addEventListener("animationstart", function () {
            if (intervaloChispas) return;

            intervaloChispas = setInterval(() => {
                if (!fotoMarco.classList.contains("mostrar")) {
                    clearInterval(intervaloChispas);
                    intervaloChispas = null;
                    return;
                }

                const chispa = document.createElement("span");
                chispa.className = "chispita-dorada";

                const cajaFoto = fotoMarco.getBoundingClientRect();
                const cajaLaser = laser.getBoundingClientRect();

                chispa.style.left =
                    (cajaLaser.left - cajaFoto.left +
                    Math.random() * cajaLaser.width) + "px";

                chispa.style.top =
                    (cajaLaser.top - cajaFoto.top +
                    Math.random() * Math.max(cajaLaser.height, 4)) + "px";

                chispa.style.setProperty(
                    "--viaje-x",
                    (Math.random() * 50 - 25) + "px"
                );

                fotoMarco.appendChild(chispa);

                setTimeout(() => chispa.remove(), 1500);
            }, 90);
        });
    }

const boton2026 = document.querySelector("#boton2026");

if (fotoMarco && boton2026) {
    fotoMarco.addEventListener("animationend", function (evento) {
        if (evento.animationName === "revelarImagen") {
            setTimeout(() => {
                boton2026.classList.add("mostrar");
            }, 500);
        }
    });
}


const pantallaInvitacion = document.querySelector("#pantallaInvitacion");

if (boton2026 && pantallaInvitacion) {
    boton2026.addEventListener("click", function () {
        pantallaInvitacion.classList.add("visible");
    });
}


const imagenInvitacion = document.querySelector(
    "#pantallaInvitacion img"
);

if (imagenInvitacion) {
    imagenInvitacion.addEventListener("click", function () {
        imagenInvitacion.classList.toggle("ampliada");
    });
}


