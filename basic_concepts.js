

//! Rutas (routes)
//* recurso que solicita un cliente atraves de un endpoint

// frontend (endpoints) (recurso)
// backend (rutas) (info)

//? ejemplo 
// manera de generar una ruta en express

const express = require('express')
const app=express() // inicializar la funcion express

app.get('/', (req, res)=>{
    res.send("Hola mundo")
})

app.get('/descuento', (req, res)=>{
    res.send("Tines un descuento")
})

app.listen(3000)
console.log("Serever ok")



//! Request
//* manera como se solicita la informacion 

app.use(express.json()) //especificamos el formato

app.post('/login', (req, res)=>{
    const {user, email}= req.body
    const response = user ==="Mateo" && email== "jose.bernal@epn.edu.ec" ? true:false
    response ? res.send("User registred"):res.send("Bad credentials")
})


//! Params

app.get('/products/:id', (req, res)=>{
    const {id}=req.params
    const products = [
        {
            id:1,
            product:"Laptop",
            price:700
        },
        {
            id:2,
            product:"Celular",
            price:500
        }
    ]
    console.log(typeof id) //ver el tipo de dato
    //pasamos el id a tipo numerico ya que se guarda por defecto como string
    const response = products.find((p)=>p.id===+id)
    response ? res.json(response) : res.json("Producto not found")
})


//! Query params

app.get('/search', (req, res)=>{
    const {data} = req.query
    const responses={
        "pollo":"pollo asado",
        "milanesa":"Milanesa de pollo"
    }

    const response = responses[data] || "No existe"
    res.json(response)
})


//? Tarea desafio

//* ejemplo 1

app.get('/auto/:type_auto/accesorios/:seguridad', (req, res)=>{
    const {type_auto}=req.params
    const {seguridad}=req.params
    const autos = [
        {
            id:1,
            type_auto:"montana",
            price:75000,
            seguridad:"poco-seguro"
        },
        {
            id:2,
            type_auto:"montañero",
            price:51000,
            seguridad:"muy-seguro"
        }
    ]
    const response = autos.find((auto)=>auto.type_auto===type_auto)&&autos.find((auto)=>auto.seguridad===seguridad)
    response ? res.json(response) : res.json("Producto not found")


})


//* ejemplo 2

app.get('/autos/:joy_hatchback/accesorios/:kit_confort', (req, res)=>{
    const {joy_hatchback}=req.params
    const {kit_confort}=req.params
    
    if (joy_hatchback==="joy"&&kit_confort==="confort"){
        res.json("Todo lo relacionado con el auto")
    }
    else if (joy_hatchback==="montana"&&kit_confort==="seguridad"){

    }
    else{
        res.json("No hay resultados")
    }
})


