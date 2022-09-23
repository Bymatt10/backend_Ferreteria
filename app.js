const express = require('express')
const cors = require('cors')
const Connection = require('./config/connection')
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger-output.json')
// const router = require('./routers/personRouter')
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
const PersonaRoutes = require('./routes/persona');
const UsuarioRoutes = require('./routes/usuario');
const VentaRoutes = require('./routes/venta');
const metodoPagoRoutes = require('./routes/forma_Pago');
const categoriaRoutes = require('./routes/categoria');

// routes for postman o insomnia
app.use('/persona', PersonaRoutes);
app.use('/usuario', UsuarioRoutes);
app.use('/venta', VentaRoutes);
app.use('/metodoPago', metodoPagoRoutes);
app.use('/categoria', categoriaRoutes);
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

const port = process.env.PORT || 3001;
// comienza a escuchar por el puerto 3000 y devuelve el sms

app.get('/', (req, res) => {
    res.send('Up and running');
});
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
    const connection = new Connection();
    connection.sequelize
        .authenticate()
        .then(() => {
            console.log('Database connectead');
            // associations().then(() => {
            //     console.log('Models associated')
            // })
        })
        .catch((error) => console.error(error));
});