const validarHora = (req, res, next) => {
    if (req.currentHour >=12){
        next();
    } else {
        return res.redirect('/?mensaje=Aun no es la hora; espera hasta las: 12:00<button><a href="/endroute">Entrar</a></button>');
    }
};

module.exports = validarHora;