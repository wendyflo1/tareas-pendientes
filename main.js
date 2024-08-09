//console.log("Hola mundo! desde la consola");
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Desarrolladora Web Jr')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Soporte Tecnico y Community Manager')
    .pauseFor(2500)
    .deleteChars(7)
    .typeString('<strong>Conoce mas de mi.</strong>')
    .pauseFor(2500)
    .start();