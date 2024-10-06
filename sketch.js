let petalCount = 0;
let drawStep = 0;

function setup() {
    createCanvas(600, 400);
    frameRate(1);  // Animación a 1 cuadro por segundo
}

function draw() {
    background(240);

    // Dibujar flores
    const flores = [
        { x: width / 2 - 80, y: 200, color: 'yellow' },  // Ajustar para centrar
        { x: width / 2, y: 200, color: 'yellow' },
        { x: width / 2 + 80, y: 200, color: 'yellow' },
        { x: width / 2 - 40, y: 280, color: 'purple' },
        { x: width / 2 + 40, y: 280, color: 'purple' }
    ];

    for (const flor of flores) {
        dibujarFlor(flor.x, flor.y, flor.color);
    }

    // Animar el proceso de dibujado de pétalos
    if (drawStep < 8) {
        petalCount++;
        drawStep++;
    } else {
        noLoop();  // Detener la animación una vez completada
        mostrarAlerta(); // Mostrar alerta al finalizar
    }
}

function dibujarFlor(x, y, color) {
    // Dibujar el tallo
    stroke(34, 139, 34); // Color verde para el tallo
    strokeWeight(4);
    line(x, y + 30, x, y + 100); // Tallo más largo

    // Dibujar los pétalos
    fill(color);
    noStroke(); // Sin contorno para las flores
    for (let i = 0; i < petalCount; i++) {
        let angle = TWO_PI / 8 * i;
        let xOffset = 30 * cos(angle);
        let yOffset = 30 * sin(angle);
        ellipse(x + xOffset, y + yOffset, 40, 60);  // Pétalos ovalados
    }

    // Centro de la flor
    fill('brown');
    ellipse(x, y, 30, 30);  // Círculo central
}

function mostrarAlerta() {
    alert("Te amo mi niña, ten un lindo día como tus lindos ojitos ❤️");
}
