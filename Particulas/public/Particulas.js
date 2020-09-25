//Systema de particulas, creado para fisica 3
//Proyecto No. 1
//Andree Toledo 18439
//Renato Estrada 181099

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var particles = [];
var num_particles = 1;//Cantidad de particulas en la window
var color; 
var masa;
var carga;
var tamanio;
var pressed = 0;
var aceleration; 
var time = 0; 
var direccion; 
var velocidadX;
var velocidadY;
var velX = 4 * Math.random() - 2;
var velY = 4 * Math.random() - 2;
var velocidadI;
var radianes;

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
var Particle = function (color, tamanio) {
    this.x = 0;
    this.y = canvas.height * 0.5;
    this.size = tamanio;
    this.Color = color;
}
//Se agregan dos metodos funcionales 
Particle.prototype.Draw = function (ctx) {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fillStyle = this.Color;
    //ctx.fillRect(this.x, this.y, 2, 2);
    ctx.fill();
}
Particle.prototype.Update = function () {
    if(direccion === 1){
        velocidadX = 0;
        velocidadY = velocidadI * (aceleration * time);
        console.log(velocidadX);
        console.log(velocidadY);
    }else if(direccion === 2){
        velocidadX = velocidadI;
        velocidadY = aceleration * time;
        console.log(velocidadX);
        console.log(velocidadY);
    }else if(direccion === 3){
        velocidadX = velocidadI * Math.cos(radianes);
        if(time === 0){
            velocidadY = velocidadI * Math.sin(radianes);
        }else{
            velocidadY += aceleracion * time; 
        }
        console.log(velocidadX);
        console.log(velocidadY);
    }
    this.x += velX;
    this.y += velY;
 
    if (this.x<0 || this.x > canvas.width)
        velX = -velX;
    
    if (this.y < 0 || this.y > canvas.height)
        velY = -velY;
}
function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < num_particles; i++) {
        particles[i].Update();
        particles[i].Draw(ctx);
    }
    requestAnimationFrame(loop);
    time += 1;
}
//Inicio de creacion de las particulas.

function createParticle(){
    var tipoParticula = document.getElementById('particula').value;
    var MagnitudP = document.getElementById('magnitudP').value;
    var DireccionP = document.getElementById('direccionP').value;
    var MagnitudE = document.getElementById('magnitudE').value;
    var DireccionE = document.getElementById('direccionE').value;
    var Size = document.getElementById('Tamaño').value;
    const Boton = document.getElementById('boton');
    
    velocidadI = MagnitudP;

    //Tamanio de las particulas
    if(Size === '1'){
        tamanio = 7;
    }else if(Size === '2'){
        tamanio = 5;
    }
    else if(Size === '3'){
        tamanio = 3;
    }

    //direccion del campo
    if(DireccionE === '2'){
        magnitudE *= -1;
    }

    //direccion de la particula
    if(DireccionP === 0 || DireccionP === 180){
        direccion = 1;
    }else if(DireccionP === 90){
        direccion = 2;
    }else{
        direccion = 3;
        degrees_to_radians(DireccionP);
    }


    switch(tipoParticula) {
        //Electron
        case '1':
            color = "rgb(" + 179 + "," + 0 + "," + 0 + ")";
            carga = -1.6 * Math.pow(10, -19);
            masa = 9.11 * Math.pow(10, -31);
            particles.push(new Particle(color, tamanio));
            break;
        //Positron
        case '2':
            color = "rgb(" + 230 + "," + 230 + "," + 230 + ")";
            carga = 1.6 * Math.pow(10, -19);
            masa = 9.11 * Math.pow(10, -31);
            particles.push(new Particle(color, tamanio));
            break;
        //Proton 
        case '3':
            color = "rgb(" + 204 + "," + 204 + "," + 0 + ")";
            carga = 1.6 * Math.pow(10, -19);
            masa = 1.67 * Math.pow(10, -27);
            particles.push(new Particle(color, tamanio));
            break;
        //Neutron
        case '4':
            color = "rgb(" + 179 + "," + 209 + "," + 255 + ")";
            carga = 0;
            masa = 1.67 * Math.pow(10, -27);
            particles.push(new Particle(color, tamanio));
            break;
        //Partícula alfa
        case '5':
            color = "rgb(" + 255 + "," + 102 + "," + 0 + ")";
            carga = 3.2 * Math.pow(10, -19);
            masa = 6.64 * Math.pow(10, -27);
            particles.push(new Particle(color, tamanio));
            break;
        //Núcleo de deuterio
        case '6':
            color = "rgb(" + 0 + "," + 230 + "," + 230 + ")";
            carga = 1.6 * Math.pow(10, -19);
            masa = 3.34 * Math.pow(10, -27);
            particles.push(new Particle(color, tamanio));
            break;
        //Muón
        case '7':
            color = "rgb(" + 102 + "," + 204 + "," + 0 + ")";
            carga = -1.6 * Math.pow(10, -19);
            masa = 1.88 * Math.pow(10, -28);
            particles.push(new Particle(color, tamanio));
            break;
        //Tau
        case '8':
            color = "rgb(" + 255 + "," + 77 + "," + 148 + ")";
            carga = -1.6 * Math.pow(10, -19);
            masa = 3.17 * Math.pow(10, -27);
            particles.push(new Particle(color, tamanio));
            break;
        //Bosón
        case '9':
            color = "rgb(" + 172 + "," + 0 + "," + 230 + ")";
            carga = -1.6 * Math.pow(10, -19);
            masa = 9.1 * Math.pow(10, -31);
            particles.push(new Particle(color, tamanio));
            break;
        //Mesón
        case '10':
            color = "rgb(" + 204 + "," + 102 + "," + 0 + ")";
            carga = -1.6 * Math.pow(10, -19);
            masa = 9.1 * Math.pow(10, -31);
            particles.push(new Particle(color, tamanio));
            break;
        default:
            // code block
        }
    loop();
    Boton.disabled = true;
}

const aceleracion = (masa, carga, magnitudE) =>{
    aceleration = ((carga*magnitudE)/masa)
}   

function degrees_to_radians(degrees)
{
  var pi = Math.PI;
  radianes = degrees * (pi/180);
}