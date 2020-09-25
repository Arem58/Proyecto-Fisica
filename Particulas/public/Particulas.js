//Systema de particulas, creado para fisica 3
//Proyecto No. 1
//Andree Toledo 18439
//Renato Estrada 181099

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var particles = [];
var num_particles = 1;//Cantidad de particulas en la window
var color 

//Funcion para obtener un color random, pero no colores oscuros.
function GetRandomColor() {
    var r = 0, g = 0, b = 0;
    while (r < 100 && g < 100 && b < 100)
    {
        r = Math.floor(Math.random() * 256);
        g = Math.floor(Math.random() * 256);
        b = Math.floor(Math.random() * 256);
    }

    return "rgb(" + r + "," + g + ","  + b + ")";
}
//Objeto: Particula. Inicia en una posicion random, velocidad y color
var Particle = function (color) {
    this.x = canvas.width * Math.random();
    this.y = canvas.height * Math.random();
    this.vx = 4 * Math.random() - 2;
    this.vy = 4 * Math.random() - 2;
    this.Color = color;
}
//Se agregan dos metodos funcionales 
Particle.prototype.Draw = function (ctx) {
    ctx.beginPath()
    ctx.arc(this.x, this.y, 5, 0, 2 * Math.PI);
    ctx.fillStyle = this.Color;
    //ctx.fillRect(this.x, this.y, 2, 2);
    ctx.fill();
}
Particle.prototype.Update = function () {
    this.x += this.vx;
    this.y += this.vy;
 
    if (this.x<0 || this.x > canvas.width)
        this.vx = -this.vx;
 
    if (this.y < 0 || this.y > canvas.height)
        this.vy = -this.vy;
}
function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < num_particles; i++) {
        particles[i].Update();
        particles[i].Draw(ctx);
    }
    requestAnimationFrame(loop);
}
//Inicio de creacion de las particulas.

function createParticle(){
    var tipoParticula = document.getElementById('particula').value;
    switch(tipoParticula) {
        case '1':
            color = "rgb(" + 179 + "," + 0 + "," + 0 + ")";
            particles.push(new Particle(color));
            break;
        case '2':
            color = "rgb(" + 230 + "," + 230 + "," + 230 + ")";
            particles.push(new Particle(color));
            break;
        case '3':
            color = "rgb(" + 204 + "," + 204 + "," + 0 + ")";
            particles.push(new Particle(color));
            break;
        case '4':
            color = "rgb(" + 0 + "," + 0 + "," + 153 + ")";
            particles.push(new Particle(color));
            break;
        case '5':
            color = "rgb(" + 255 + "," + 102 + "," + 0 + ")";
            particles.push(new Particle(color));
            break;
        case '6':
            color = "rgb(" + 0 + "," + 230 + "," + 230 + ")";
            particles.push(new Particle(color));
            break;
        case '7':
            color = "rgb(" + 102 + "," + 204 + "," + 0 + ")";
            particles.push(new Particle(color));
            break;
        case '8':
            color = "rgb(" + 255 + "," + 77 + "," + 148 + ")";
            particles.push(new Particle(color));
            break;
        case '9':
            color = "rgb(" + 172 + "," + 0 + "," + 230 + ")";
            particles.push(new Particle(color));
            break;
        case '10':
            color = "rgb(" + 204 + "," + 102 + "," + 0 + ")";
            particles.push(new Particle(color));
            break;
        default:
            // code block
        }
    loop();
}
