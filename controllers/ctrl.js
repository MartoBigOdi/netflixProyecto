const axios = require('axios');
const queryString = require('query-string');
const API_KEY = "658d34148bcfeeac411fef3a8e6cea76";
const BASE_URL = "https://api.themoviedb.org/3";

const ctrl = {};

//Mejorar la Paginacón con la query dinámica
ctrl.index = async function (req, res, next) {
   
    //Este Objeto se llena con los objetos que queremos mostrar.
    let filters = {
        api_key: API_KEY,
        language: 'en-EN'
    };
    //Acá le agrego un género a la busqueda.
    //filters.with_genres = '28';

    filters.page = req.query.pagina;

    let query = queryString.stringify(filters);

    await axios.get(`${BASE_URL}/discover/movie/?${query}`)
        .then(({
            data
        }) => {
            console.log(data.results)
            //Acá esta el render que mostramos en el index.ejs
            res.render('index', {
                movies: data.results,
            });
        }).catch((err) => {
            console.log(err);
        });
        
};


ctrl.accion = async function (req, res, next) {
   
    //Este Objeto se llena con los objetos que queremos mostrar.
    let filters = {
        api_key: API_KEY,
        language: 'es-ES'
    };
    //Acá le agrego un género a la busqueda.
    filters.with_genres = '28';

    let query = queryString.stringify(filters);

    await axios.get(`${BASE_URL}/discover/movie/?${query}`)
        .then(({
            data
        }) => {
            console.log(data.results)
            //Acá esta el render que mostramos en el index.ejs
            res.render('index', {
                movies: data.results,
            });
        }).catch((err) => {
            console.log(err);
        });
        
};


ctrl.infantil = async function (req, res, next) {
   
    //Este Objeto se llena con los objetos que queremos mostrar.
    let filters = {
        api_key: API_KEY,
        language: 'es-ES'
    };
    //Acá le agrego un género a la busqueda.
    //filters.with_genres = '28';

    filters.with_genres = '16';

    let query = queryString.stringify(filters);

    await axios.get(`${BASE_URL}/discover/movie/?${query}`)
        .then(({
            data
        }) => {
            console.log(data.results)
            //Acá esta el render que mostramos en el index.ejs
            res.render('index', {
                movies: data.results,
            });
        }).catch((err) => {
            console.log(err);
        });
        
};


ctrl.terror = async function (req, res, next) {
   
    //Este Objeto se llena con los objetos que queremos mostrar.
    let filters = {
        api_key: API_KEY,
        language: 'es-ES'
    };
    //Acá le agrego un género a la busqueda.
    //filters.with_genres = '28';

    filters.with_genres = '27';

    let query = queryString.stringify(filters);

    await axios.get(`${BASE_URL}/discover/movie/?${query}`)
        .then(({
            data
        }) => {
            console.log(data.genre_ids)
            //Acá esta el render que mostramos en el index.ejs
            res.render('index', {
                movies: data.results,

            });
        }).catch((err) => {
            console.log(err);
        });
        
};

module.exports = ctrl;