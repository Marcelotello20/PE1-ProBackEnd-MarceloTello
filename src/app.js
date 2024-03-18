const express = require('express')
const productsRouter = require('./router/products.router');
const cartsRouter = require('./router/carts.router')

const app = express();


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Endpoint principal
app.get('/', (req, res) => {
    res.send('¡Hola esta es mi PreEntrega 1!');
});

//Endpoint products
app.use('/products', productsRouter);

//Endpoint carts
app.use('/carts', cartsRouter);

app.listen(8080, () => console.log('Servidor Iniciado en el puerto 8080'));