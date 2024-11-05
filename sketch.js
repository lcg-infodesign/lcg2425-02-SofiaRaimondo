let crossSize = 20; // dimensione fissa delle croci

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noLoop();
}

function draw() {
  background(255);

  // calcola il numero di colonne e righe in base alle dimensioni del canvas, assicurandosi che ci sia spazio sufficiente tra le croci
  let cols = floor(width / (crossSize * 2));
  let rows = floor(height / (crossSize * 2));

  // distanza tra le croci
  let cellWidth = width / cols;
  let cellHeight = height / rows;

  // // ciclo annidato per disegnare le croci in una griglia
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      
      let x = i * cellWidth + cellWidth / 2;
      let y = j * cellHeight + cellHeight / 2;
      
      drawCross(x, y, crossSize);
    }
  }
}

// funzione per disegnare una croce data la posizione centrale (x, y) e la dimensione
function drawCross(x, y, size) {
  stroke(0);
  strokeWeight(4);
  line(x - size / 2, y, x + size / 2, y); 
  line(x, y - size / 2, x, y + size / 2); 
}

// funzione chiamata automaticamente quando la finestra viene ridimensionata
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  draw(); 
}
