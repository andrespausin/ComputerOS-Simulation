let fecha = new Date(); //Fecha local
let hour = fecha.getHours(); //Horas
let minute = fecha.getMinutes(); // Minutos

let day = fecha.getDate(); //Día
let month = fecha.getMonth() + 1;  //Mes 
let year = fecha.getFullYear(); //Año 

const rom = 500000; // Cantidad de Memoria ROM
const ram = 16000;

//Arreglo con json de aplicaciones
const aplicaciones = [
    {
        'id':1,
        'name':'Google Chrome',
        'memory':1025, //Los números se representan en MB
        'rom': 10580,//Memoria ROM o de ALmacenamiento en MB
        
    },
    {
        'id':2,
        'name':'Administrador de Almacenamiento',
        'memory': 3580,
        'rom': 5897,
    },
    {
        'id': 3,
        'name': 'Instagram',
        'memory': 1890,
        'rom': 19456,
    },
    {
        'id': 4,
        'name': 'Spotify',
        'memory': 1540,
        'rom': 13540,
    },
    {
        'id': 5,
        'name': 'Facebook',
        'memory': 3450,
        'rom': 8098,
    },
    {
        'id': 6,
        'name': 'Settings',
        'memory': 1350,
        'rom': 3570,
    },
    {
        'id': 7,
        'name': 'Visual Studio Code',
        'memory': 4970,
        'rom': 10987,
    },
    {
        'id': 8,
        'name': 'Basura',
        'memory': 1350,
        'rom': 1098,
    },
];


//Función que formatea la hora
const setTime = (hour, minute) => {
    let time = hour + ':' + minute;
    if(minute >= 0 & minute <= 9){
        if(hour >= 0 & hour <= 9){
            time = '0' + hour + ':' + '0' + minute;
        }else{
            time = hour + ':0' + minute;
        } 
    }
    if(hour >= 0 & hour <= 9){
        if(minute >= 0 & minute <= 9){
            time = '0' + hour + ':' + '0' + minute;
        }else{
            time = '0' + hour + ':' + minute;
        }
    }
    return time;
}

document.getElementById('time').innerHTML = setTime(hour, minute);

//Función que actualiza la hora cada 60 segundos
setInterval(()=>{
    let newDate = new Date();
    let hour = newDate.getHours();
    let minute = newDate.getMinutes();
    document.getElementById('time').innerHTML = setTime(hour, minute);
}, 60000);

//Arreglar la fecha, función que coloca la fecha
const setDate = (day, month, year) => {
    let date = day + '/' + month + '/' + year;

    if(day < 10 && day > 0){
        if(month < 10 && month > 0){
            date = '0' + day + '/' + '0' + month + '/' + year;
        }else{
            date = '0' + day + '/' + month + '/' + year;
        }
    }else{
        if(month < 10 && month > 0){
            date = day + '/' + '0' + month + '/' + year;
        }
    }

    return date; 
}

document.getElementById('date').innerHTML = setDate(day, month, year);

// Función que me permite cambiar el lenguaje del programa
const switchLanguage = () => {
    let element = document.getElementById('lenguaje');
    element.addEventListener('click', (e)=> {
        if(element.textContent === 'ENG'){
            element.innerHTML = 'ESP';
        }else{
            element.innerHTML = 'ENG';
        }
    });
}

// Función que me permite agregar o quitar el wifi
const switchWifi = () => {
    let element = document.getElementById('wifi');
    let wifi = document.getElementById('change-wifi');
    let i = 0;
    element.addEventListener('click', (e)=>{
        i++;
        if(i % 2 != 0){
            element.innerHTML = `<i class='bx bx-wifi-off' ></i>`;
            wifi.innerHTML = `<i class='bx bx-wifi-off' ><p><br>Desconectado</p></i>`;
        }else{
            element.innerHTML = `<i class='bx bx-wifi'></i>`;
            wifi.innerHTML = `<i class='bx bx-wifi'><p><br>Conectado<br>MERCUSYS_ABD30</p></i>`;
        }
    })

    wifi.addEventListener('click', ()=>{
        i++;
        if(i % 2 != 0){
            element.innerHTML = `<i class='bx bx-wifi-off' ></i>`;
            wifi.innerHTML = `<i class='bx bx-wifi-off' ><p><br>Desconectado</p></i>`;
        }else{
            element.innerHTML = `<i class='bx bx-wifi'></i>`;
            wifi.innerHTML = `<i class='bx bx-wifi'><p><br>Conectado<br>MERCUSYS_ABD30</p></i>`;
        }
    });


}

//Función que permite quitar el volumen del dispositivo
const switchVolume = () => {
    let element = document.getElementById('volume');
    let volume = document.getElementById('change-volume');
    let i = 0;
    element.addEventListener('click', (e)=>{
        i++;
        if(i % 2 != 0){
            element.innerHTML = `<i class='bx bxs-volume-mute'></i>`;
            volume.innerHTML = `<i class='bx bxs-volume-mute'><p><br>Volumen</p></i>`;
        }else{
            element.innerHTML = `<i class='bx bxs-volume-full'></i>`;
            volume.innerHTML = `<i class='bx bxs-volume-full'><p><br>Volumen</p></i>`;
        }
    })

    volume.addEventListener('click', ()=>{
        i++;
        if(i % 2 != 0){
            element.innerHTML = `<i class='bx bxs-volume-mute'></i>`;
            volume.innerHTML = `<i class='bx bxs-volume-mute'><p><br>Volumen</p></i>`;
        }else{
            element.innerHTML = `<i class='bx bxs-volume-full'></i>`;
            volume.innerHTML = `<i class='bx bxs-volume-full'><p><br>Volumen</p></i>`;
        }
    });
}

//Función que abre el menú
const openMenu = () => {
    let logo = document.getElementById('logo');
    let menu = document.getElementById('menuBtn');
    logo.addEventListener('click', ()=>{
        menu.showModal();
    });
}

//Función que cierra el menú
const closeMenu = () => {
    let cerrar =  document.getElementById('closeMenu');
    let menu = document.getElementById('menuBtn');
    cerrar.addEventListener('click', () =>{
        menu.close();
    })
}

//Función que abre la ventana de configuración
const openConfig = () => {
    const config = document.getElementById('config');
    const configuration = document.getElementById('config-menu');
    const configModal = document.getElementById('configuracion');
    config.addEventListener('click', ()=>{
        configModal.showModal();
    });

    configuration.addEventListener('click', ()=>{
        configModal.showModal();
    })

}

//Función que cierra la ventana de configuración
const closeConfig = () => {
    const exit = document.getElementById('exit-config');
    const configModal = document.getElementById('configuracion');
    exit.addEventListener('click', ()=>{
        configModal.close();
    })
}

//Función que abre la ventana de administración de Almacenamiento
const openAdminAlmac = () => {
    let element = document.getElementById('admin-almac');
    let almMenu = document.getElementById('taskManager-menu');
    let almac = document.getElementById('taskManager');
    let almacen = document.getElementById('task-manager');
    almac.addEventListener('click', ()=> {
        element.showModal();
    })

    almMenu.addEventListener('click', ()=>{
        element.showModal();
    })

    almacen.addEventListener('click', ()=>{
        element.showModal();
    })


}

//Función que cierra la ventana de administración de Almacenamiento
const closeAdminAlmac = () => {
    let element = document.getElementById('admin-almac');
    let close = document.getElementById('exit-almac');
    close.addEventListener('click', ()=>{
        element.close();
    })
}

//Función que llena la tabla de aplicaciones
const llenarTabla = () => {
    const body = document.getElementById('cuerpo');
    for(let i = 0; i < aplicaciones.length; i++){
        const tr = document.createElement('tr');
        let nombre = document.createElement('td');
        let ram =  document.createElement('td');
        let rom = document.createElement('td');
        
        nombre.innerHTML = aplicaciones[i].name;
        ram.innerHTML = aplicaciones[i].memory;
        rom.innerHTML = aplicaciones[i].rom;

        tr.appendChild(nombre);
        tr.appendChild(ram);
        tr.appendChild(rom);

        body.appendChild(tr);
    }
}

// Función llenar memoria ROM
const llenarRom = () => {
    const memoria = document.getElementById('percentROM');
    let result = 0;
    for(let i = 0; i < aplicaciones.length; i++){
        result += aplicaciones[i].rom;
    }
    const actual = (result / rom) * 100;
    memoria.setAttribute('style', 'width:'+actual+'%;');
}

// Funcióno llenar memoria RAM
const llenarRam = () => {
    const memoria = document.getElementById('percentRAM');
    let result = 0;
    for(let i = 0; i < aplicaciones.length; i++){
        if(i % 2 == 0){
            result += aplicaciones[i].memory;
        }
    }
    const actual = (result / ram) * 100;
    memoria.setAttribute('style', 'height:'+actual+'%;');
}

//Opciones de Apagado
const opcionesApagado = () => {
    let element = document.getElementById('turn-off');
    let accion = document.getElementById('turnOff');
    accion.addEventListener('click', ()=>{
        element.showModal();
    })
}

//Función de reiniciar
const reiniciar = () => {
    let reiniciar = document.getElementById('reiniciar');
    reiniciar.addEventListener('click', ()=>{
        location.reload();
    })
}

// Función que apaga el sistema
const apagar = () => {
    let element = document.body;
    let turnOff = document.getElementById('apagar');
    turnOff.addEventListener('click', ()=>{
        console.log(element);
        element.setAttribute('style', 'color: #000;');
        element.innerHTML = '';
        element.setAttribute('style', 'background-color: #000;');
    });
}

//Función que cambia el color del body
const cambiarColor = () => {
    let body = document.body;
    const accion = document.getElementById('change-color');
    let i = 0;
    accion.addEventListener('click', ()=>{
        i++;
        if(i % 2 != 0){
            body.removeAttribute('style');
            body.setAttribute('style', 'color: #000;');
        }else{
            body.removeAttribute('style');
            body.setAttribute('style', 'color: #fff;');
        }
        
    })
}

// Fix this: Función que debería cambiar la fuente del SO
const cambiarFuente = () => {
    let body = document.body;
    let accion = document.getElementById('change-font');
    let i = 0;
    accion.addEventListener('click', ()=>{
        i++;
        console.log(i);
        if(i % 2 != 0){
            body.removeAttribute('style');
            body.setAttribute('style', 'font-family: Times New Roman;');
        }else{
            body.removeAttribute('style');
            body.setAttribute('style', 'font-family: "Poppins";');
        }
    })
}

//Funcion que abre instagram
const abrirIg = () => {
    let element = document.getElementById('ig');
    let accion = document.getElementById('instagram');
    let accionDos = document.getElementById('instagram-menu');
    accion.addEventListener('click', ()=>{
        element.showModal();
    })

    accionDos.addEventListener('click', ()=>{
        element.showModal();
    })
}

// Función que abre Google Chrome 
const abrirChrome = () => {
    let element = document.getElementById('chrome-modal');
    let accion = document.getElementById('chrome');
    let accionDos = document.getElementById('chrome-menu');
    accion.addEventListener('click', ()=>{
        element.showModal();
    })

    accionDos.addEventListener('click', ()=>{
        element.showModal();
    })
}

// Función que abre Faceboook
const abrirFacebook = () => {
    let element = document.getElementById('facebook-modal');
    let accion = document.getElementById('facebook');
    accion.addEventListener('click', ()=>{
        element.showModal();
    })
}

//Función que abre Spotify
const abrirSpotify = () => {
    let element = document.getElementById('spotify-modal');
    let accion = document.getElementById('spotify');
    let accionDos = document.getElementById('spotify-menu');
    accion.addEventListener('click', ()=>{
        element.showModal();
    })

    accionDos.addEventListener('click', ()=>{
        element.showModal();
    });
}

//Función que abre Visual Studio Code
const abrirVsc = () => {
    let element = document.getElementById('vsc-modal');
    let accion = document.getElementById('visual-studio');
    let accionDos = document.getElementById('visual-studio-menu');
    accion.addEventListener('click', ()=>{
        element.showModal();
    })

    accionDos.addEventListener('click', ()=>{
        element.showModal();
    })
}

//Función que cierra la ventana de Instagram
const cerrarIg = () => {
    let element = document.getElementById('ig');
    let close = document.getElementById('exit-ig');
    close.addEventListener('click', ()=>{
        element.close();
    })
}

//Función que cierra la ventana de Facebook
const cerrarFacebook = () => {
    let element = document.getElementById('facebook-modal');
    let close = document.getElementById('exit-facebook');
    close.addEventListener('click', ()=>{
        element.close();
    })
}

//Función que cierra la ventana de Spotify
const cerrarSpotify = () => {
    let element = document.getElementById('spotify-modal');
    let close = document.getElementById('exit-spotify');
    close.addEventListener('click', ()=>{
        element.close();
    })
}

//Función que cierra la ventana de google chrome
const cerrarChrome = () => {
    let element = document.getElementById('chrome-modal');
    let close = document.getElementById('exit-chrome');
    close.addEventListener('click', ()=>{
        element.close();
    })
}

//Función que cierra la ventana de VSC
const cerrarVsc = () => {
    let element = document.getElementById('vsc-modal');
    let close = document.getElementById('exit-vsc');
    close.addEventListener('click', ()=>{
        element.close();
    })
}

//Llamado de funciones
cambiarColor();
cambiarFuente();

abrirIg();
abrirFacebook();
abrirChrome();
abrirSpotify();
abrirVsc();

cerrarIg();
cerrarFacebook();
cerrarChrome();
cerrarSpotify();
cerrarVsc();

opcionesApagado();
reiniciar();
apagar();

openMenu();
closeMenu();

openConfig();
closeConfig();

openAdminAlmac();
closeAdminAlmac();

llenarTabla();
llenarRom();
llenarRam();

switchLanguage();

switchWifi();

switchVolume();