const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

app.post('/', (request, response) => {
    /* forma de rescatar varibales */
    console.log(request.body)
    const operacion = request.body.resultadoParcial
    /* se realiza la operacion con el eval que fue el que utilizamos en el js del front */
    const resultadoOperacion = eval(operacion)
    const variableRespuesta = {resultadoOperacion}
    response.json(variableRespuesta) 
})

app.get('/',(request,response) => {
    /* send: va a mostar el text en el documento */
    response.send(
        "Holiii"
        
    )
})
/* url de la api */
/* http:localhost:3000 */
app.listen(3000,(error)=>{
    if(error){
        console.log("servidor incorrecto")
    }else{
        console.log("servidor correcto")
    }
})