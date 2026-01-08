const express = require ('express');
const app = express();

const horaMiddleware = require('./middlewares/horaMiddleware');
const validarHora = require('./middlewares/validarHora');

const indexRouter = require('./routes/index');
const endRouter = require('./routes/endroute');
const endrouteRouter =require('./routes/endroute');

const PORT = 3000;

app.use(horaMiddleware);
app.use('/endroute', validarHora, endrouteRouter);
app.use('/', indexRouter);

app.listen(PORT, ()=>{
    console.log(`El servidor está escuchando en el puerto http://localhost:${PORT}`);
});