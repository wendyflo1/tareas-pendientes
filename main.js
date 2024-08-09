//''
//definir las constantes

const fecha = document.querySelector('#fecha');
const lista = document.querySelector('#lista');
const elemento = document.querySelector('#elemento');
const tarea = document.querySelector('#tarea');
const input = document.querySelector('#input');
const botonAgregar = document.querySelector('#botonAgregar');
const check = 'task_alt';
const tachado = 'tachado';
const uncheck = 'radio_button_unchecked';
let LIST; 
let ID;

const FECHA = new Date ();
fecha.innerHTML = FECHA.toLocaleDateString ('es-MX', {weekday:'long',month:'long', day:'numeric'});


// Funcion agregar tarea
function agregarTarea(tarea,id,hecho,eliminar) {
    if (eliminar) {
        return
    };
    const realizado = hecho ? check : uncheck;
    const LINE = hecho ? tachado : '';
    const elemento = `<li class="li" id=elemento>
                <span id="${id}" data="hecho"  class="material-symbols-outlined">${realizado}</span>
               <p class="tareas-lista text ${LINE}">${tarea}</p>
                <span id="${id}" data="eliminar" class="material-symbols-outlined">close</span></li>`
            lista.insertAdjacentHTML ("beforeend",elemento);
};

function tareaRealizada(element) {
        if (element.innerText === "radio_button_unchecked") {
        element.innerText = "task_alt";
    } else {
        element.innerText ="radio_button_unchecked"
    }

    element.parentNode.querySelector('.text').classList.toggle(tachado);
    LIST[element.id].realizado = LIST[element.id].realizado ?false :true;

    
};

function tareaEliminada(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.id].eliminar =true;
};

botonAgregar.addEventListener("click", () => {
    const tarea = input.value; 
    if(tarea){
        agregarTarea(tarea, id, false, false);
        LIST.push({nombre: tarea, id: id, hecho:false, eliminar: false,});
        localStorage.setItem("TODO", JSON.stringify(LIST));
        id++;
        input.value = "";
    }

});

lista.addEventListener("click", function (event){
    const element = event.target;
    const elementData = element.attributes.data.value;
    if (elementData =="hecho") {
        tareaRealizada(element);
        
    } else if (elementData == "eliminar") {
        tareaEliminada(element)};
        localStorage.setItem("TODO", JSON.stringify(LIST));

});

let data = localStorage.getItem ("TODO")
if (data) {
    LIST = JSON.parse(data);
    id=LIST.lenght;
    cargarLista(LIST);
} else {
    LIST =[];
    id = 0;  
}

function cargarLista(array) {
    array.forEach(
        function (item){
    agregarTarea(item.nombre, item.id, item.hecho, item.eliminar);
        }
    )
};