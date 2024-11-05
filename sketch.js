let crossSize = 20; // dimensione fissa dei fiori
let rotationAngles = []; // array per memorizzare l'angolo di rotazione di ogni fiore
let lineCounts = []; // array per memorizzare il numero di linee (petali) di ogni fiore

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(34, 49, 38); 
  noLoop();
  initializeRotationAngles(); // inizializza gli angoli di rotazione
  initializeLineCounts(); // inizializza il numero di linee (petali) per ogni fiore
}

function draw() {
  background(0,128,128); 

  // calcola il numero di colonne e righe
  let cols = floor(width / (crossSize * 2));
  let rows = floor(height / (crossSize * 2));

  // distanza tra i fiori
  let cellWidth = width / cols;
  let cellHeight = height / rows;

  // controlla se gli array hanno bisogno di essere aggiornati
  if (rotationAngles.length !== cols || rotationAngles[0].length !== rows) {
    initializeRotationAngles(cols, rows);
    initializeLineCounts(cols, rows);
  }

  // ciclo annidato per disegnare i fiori all'interno di una griglia
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * cellWidth + cellWidth / 2;
      let y = j * cellHeight + cellHeight / 2;

      
      drawCross(x, y, crossSize, rotationAngles[i][j], lineCounts[i][j]);
    }
  }
}

// funzione per disegnare un fiore data la posizione centrale (x, y), la dimensione, l'angolo di rotazione e il numero di linee (petali)
function drawCross(x, y, size, angle, lines) {
  push(); // salva lo stato di trasformazione corrente
  translate(x, y); // trasla al centro del fiore
  rotate(angle); // ruota il fiore di un angolo specifico
  stroke(255,255,0); 
  strokeWeight(1.5);

  // disegna le linee (petali) in base al numero specificato
  for (let i = 0; i < lines; i++) {
    let a = (TWO_PI / lines) * i;
    line(cos(a) * -size / 2, sin(a) * -size / 2, cos(a) * size / 2, sin(a) * size / 2);
  }
  pop(); // ripristina lo stato di trasformazione
}

// funzione per inizializzare l'array rotationAngles con angoli di rotazione casuali
function initializeRotationAngles(cols = floor(width / (crossSize * 2)), rows = floor(height / (crossSize * 2))) {
  rotationAngles = [];
  for (let i = 0; i < cols; i++) {
    rotationAngles[i] = [];
    for (let j = 0; j < rows; j++) {
      rotationAngles[i][j] = random(TWO_PI); // assegna un angolo casuale a ogni fiore
    }
  }
}

// funzione per inizializzare l'array lineCounts con un numero casuale di linee (petali) per ogni fiore
function initializeLineCounts(cols = floor(width / (crossSize * 2)), rows = floor(height / (crossSize * 2))) {
  lineCounts = [];
  for (let i = 0; i < cols; i++) {
    lineCounts[i] = [];
    for (let j = 0; j < rows; j++) {
      lineCounts[i][j] = floor(random(5, 15)); // assegna un numero casuale di linee (petali) tra 3 e 7 a ogni fiore
    }
  }
}

// funzione chiamata automaticamente quando la finestra viene ridimensionata
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  initializeRotationAngles(); // inizializza nuovamente gli angoli di rotazione
  initializeLineCounts(); // inizializza nuovbamente il numero di linee (petali)
  draw();
}

// funzione per aggiornare casualmente il numero di petali e l'angolo di rotazione di ogni fiore al clic del mouse
function mousePressed() {
  initializeRotationAngles();
  initializeLineCounts(); 
  draw();
}
