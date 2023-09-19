const express = require('express') //importando el módulo express

const app = express()
//http://localhost:3000/
app.get('/:nombre', (req, res) => {
    const params = req.params
    res.json({params})
})

// hhtp://localhost:3000/


/* Los navegadores sólo usan el método GET, por lo tanto los demás no se verán */
app.post('/', (req, res) => {
    res.json({msg: 'Hello GET'})
})

app.get('/:user/:pass', (req, res) => {
    const {user,pass}=req.params
    if (user == 'carlos' && pass == '123'){
        res.json({msg: 'Iniciaste sesión con éxito'})
    }
    res.json("Error en el usuario o contraseña")
})

app.patch('/', (req, res) => {
    res.json("Hola con PATCH")
})

app.delete('/', (req, res) => {
    res.json("Hola con DELETE")
})





app.listen(3000, () => {console.log('listening on port 3000')})