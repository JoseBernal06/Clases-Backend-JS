
// variables

// let y const

//const algo fijo que no cambia

// tipos de datos
let data1=42; 
let data2= 2.5;
let data3="Mateo" ;
let data4=false;
let data5; 
let data6 ='@' ;//char
let data7 = null; //null

//console.log(data2);


//tipos de datos

//Array
let data8=["Mateo", "Juan", "Marcelo", 4]; 

// objeto
let datos={
    name:"Mateo",
    city:"Quito",
    age:20
}

//console.log(datos.age);

//------------------------------------------------------------------------------

// ?strings (propiedades y metodos)

let password="password";

//Metodos
console.log(password.length);
console.log(password.trim()); //remueve los espacios en blancos de las cadenas de texto
console.log(password.includes('6')); //compara si hay un elemento en la cadena de texto (valor booleano)
console.log(password.toLocaleUpperCase()); //convierte todo en mayusculas
console.log(password.toLocaleLowerCase()); //convierte todo en minusculas


//ES6 - nuevas caracteristicas
console.log(`El password es: ${password}`);

//-----------------------------------------------------------------------------

// ?Casting - ES6
let number_uno="100.15"
let number_dos=100

console.log(+number_uno+number_dos);

//jerarquia de operadores (* / + - ** ())

//-----------------------------------------------------------------------------

// ?Condiciones
let moneda_uno=12;
let moneda_dos=15;

if (moneda_uno<=moneda_dos) {
    console.log("uno")

}else{
    console.log("dos");
}

// ES6 - operador ternario
moneda_uno<=moneda_dos ? console.log("uno") : console.log("dos");

let nombre;
!nombre ? console.log("Sin nombre") : console.log("Hola");

//----------------------------------------------------------------------------

// ?Valores falso y verdaderos

//comparacion estricta
let vidas='6';
vidas === 6 ? console.log("Pasa nivel") : console.log("Sigue");
vidas == 6 ? console.log("Pasa nivel") : console.log("Sigue");

//---------------------------------------------------------------------------

// ?Loops

const goals=["Mateo", "Juan", "Marcelo", "Maria"]

goals.forEach(x => {
    console.log(x);
});



for (let i = 0; i < goals.length; i++) {
    const element = goals[i];
    console.log(element);
}

newGoals = goals.map((x)=>x.toLocaleUpperCase());
console.log(newGoals);

//-----------------------------------------------------------------------------

// ?Funciones
// funciones autoejecutadas y anonimas
(function() {
    console.log("Hola mundo")
})
()

//Funciones declaradas
function getGokuAvatar() {
    console.log("photo/avatar/goku.png")
}
getGokuAvatar();


//Funciones expresadas
const gokuBatalla = function() {
    console.log("Listo para pelear")
}
gokuBatalla()


//Funcion flecha
const batalla=()=>{
    console.log("..........Adios")
    //nfn
}
batalla()

const poder = (x) => { console.log("Golllllll") }
poder()

//------------------------------------------------------------------------------

// ?Argumentos

const email=function(mail, token) {
    console.log(`El token ${token} del email`)
}
email("mateo@gmail.com", 1546)



// Argumetos opcionales
const email_dos=function(token, mail="Mateo@gmail.com"){
    console.log(`El token ${token} del email ${mail}`)
}
email_dos(1546)

//Retorno
function retornoCapitulo() {
    //return "Nuevo Capitulo";
    //return 5;
    //return {nombre: "Hola", episodio: 74}
    return function() {
        return 5
    }
}
console.log(retornoCapitulo()())


//----------------------------------------------------------------------------

//Objetos

const orense = {
    name:"Orense",
    age:20,
    address:{city:"Machala", telephone:123456},
    friends:["cocodrilo","leon"],
    status:true
}

console.log(orense)
console.log(orense.name)
console.log(orense.age)
console.log(orense.address.city)
orense.friends.forEach(x=>console.log(x));


//Desestructuracion

//let name=orense.name
//let age=orense.age

let {name:nombre_equipo, age:edad, friends:amigos}=orense
console.log("-------------------------------------------------------------------")
console.log(nombre_equipo)
console.log(edad)
console.log(amigos)


//Metodos

const datosBB = {
    name:"Bunny",
    age:10,
    address:{city:"Orlando", telephone:9999},
    friends:["a","b"],
    status:false
}

//agregar datos a objetos
datosBB.photo = "bunny.jpg"
console.log(datosBB)

//borrar dato
delete datosBB.age
console.log(datosBB)


//----------------------------------------------------------------------------------------

//verifica si las claves tienen valores
Object.keys(datosBB).includes("") ? console.log("Falta clave"):console.log("Tiene clave");


//verifica si los valores no tienen valores
Object.values(datosBB).includes("") ? console.log("Falta valor"):console.log("Tiene valor");

//----------------------------------------------------------------------------------------

const datosBB_2= {
    nameN:"Naruto",
    ageN:17,
    addressN:{city:"konoha", telephone:9999},
    friendsN:["a","b"],
    statusN:false
}

const union = {...datosBB, ...datosBB_2}
console.log(union)


//ES6
// Creacion de objetos
const producto="tele"
const precio = 700

const newProduct={
    producto, precio
}

console.log(newProduct);



// ------------------------------------------------------------------------------------

// ?Arrays

const users=["Mateo", "Juan", "Luis", "Marcelo"]

users.forEach((user)=>{
    console.log(user)
});


const news=[
    {
        name:"Hallowen",
        date:"31-10-2024",
        place:"Fosh"
    },
    {
        name:"Fistas de quito",
        date:"06-12-2024",
        place:"EPN"
    }
]

news.forEach((n, index) => {
    console.log(n.date, index)
});


const aportaciones=[
    {   name: "Basic",
        mount: 5,
        imagen: "photo/plan/basic.png"
    },
    {   name: "Plus",
        mount: 10,
        imagen: "photo/plan/basic.png"
    }
]

const planes=aportaciones.map((aportacion)=>{
    return {
        name:aportacion.name,
        mount:aportacion.mount,
        iamgen:aportacion.imagen,
    }
});

console.log(planes);


//ES6
// etraccion de valores
const dishes = ["Arroz", "jugo", "sopa"]

const [dish1, dish2, dish3]=dishes

console.log(dish1)
console.log(dish2)
console.log(dish3)

//-------------------------------------------------------------------------------

const hoobies=["playa", "montaña", "rio", "piscina"]

//Metodos

hoobies.length >= 5 ? console.log("Hola") : console.log("adios")

//agrega un elemento al final del arreglo
hoobies.push("Zona")

// agrega un elemento al inicio
hoobies.unshift("Polimemes")

// remueve el ultimo elemento del arreglo
hoobies.pop()

// remueve el primer elemento del final
hoobies.shift()
console.log(hoobies);

// busca un elemento de un arreglo
let result = hoobies.find((hobie)=>{
    return hobie==="piscina"
})

//manera corta

/*let result = hoobies.find((hobie)=>(
        hobie==="piscina"
)) */

        console.log(result);

result ? console.log("El hobbie ya existe"):("El hobbie no existe")


// Devuelve un arreglo con todas las coincidencias
// en este caso los que empiezan con la letra p
let ho=hoobies.filter((f)=>(f.startsWith("p")))
console.log(ho)


hoobies.includes("piscina") ? console.log("Hobie"):console.log("No se encontraron cohinsidencias")

//----------------------------------------------------------------------------------------------------------

// Operador rest y spread

// spread--->expande
// permite agrupar multiples elementos en un objeto iterable
const userBasic=["jose", "ivonne", "marta"]
const userPremium=["Mateo", "Vero"]
const allUsers=[...userBasic, ...userPremium]
console.log(allUsers)

// rest--->agrupa
// expande un objeto iterable
const assitences=["Mateo", "Max", "Brenda", "Carlos"]
const [userOne, UserTwo, ...usersRest]=assitences
console.log(usersRest)


//-------------------------------------------------------------------------------------------------------

//! Programacion declarativva 






//! Programacion imperativa


//-------------------------------------------------------------------------------------------------------

//* Programacion asincrona 

// callback
const getUserBD = ()=> console.log({id:123, name:"Mateo", age:21})
setTimeout(getUserBD, 5000) // la funcion se ejecuta despues de 5 segundos

function getUserAPI(callback){
    setTimeout(()=>{
        const userBD = {id:473, name:"Jose", age:25}
        callback(userBD)
    }, 1000);
}

const getUserAge = (dataUser)=>console.log(dataUser.age)

getUserAPI(getUserAge)


// promesas
const conexionBD=(datosConexion)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            datosConexion ? resolve("Conexion ok") : reject("Conexion Bad")
        }, 3000);
    })
}

//-------------------------------------------------------------------------

conexionBD(true)
    .then(mensaje=>console.log(mensaje)) // captura el exito de la promesa
    .catch(error=>console.log(error)) // captura el error

//---------------------------------------------------------------------------

// manera de manejar codigo asincrono
const verifyConnection = async() => {
    try {
        console.log(await conexionBD(false)) 
    } catch (error) {
        console.log(error)
    }
}

verifyConnection()

//---------------------------------------------------------------------------

// promesa (api de perros)
const getDogs=fetch("https://dog.ceo/api/breeds/image/random")
    .then(respuesta=>respuesta.json())
    // convierte la imagen en formato en json
    .then(respuesta=>console.log(respuesta))
    // impriminos el json
    .then(dataApi=>console.log(dataApi))
    .catch(error=>console.log(error))

//----------------------------------------------------------------------

const drawDogs=async()=>{

    try {
        let getDogs = await fetch("https://dog.ceo/api/breeds/image/random")
        let data_api=await getDogs.json()
        console.log(data_api)

    } catch (error) {
        console.log(error)
    }
}

drawDogs()

//-------------------------------------------------------------------------

// ! CONSUMO DE UNA API EXTERNA
//? TAREA DESAFIO
//* consumir una api privada con fech y mostrar su data

const apiGIF="https://api.giphy.com/v1/stickers/trending"
const keyapi= "lerx9FDWD5PH78M207Cj95ac4KTt8G3v"

const verGif = async(url, key) => {
    try {
        const request =await fetch(`${url}?api_key=${key}`)
        const response = await request.json()
        console.log(response)
        
    } catch (error) {
        console.log(error)
    }
}

verGif(apiGIF, keyapi)

//-------------------------------------------------------------------------------------------------------

//* Programacion sincrona  