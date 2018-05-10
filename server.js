const express = require('express')
const bodyParser = require('body-parser');
const http = require('http')
const app = express()

const hostname = '127.0.0.1';
const PORT = process.env.PORT || 5000

let users = ['oscar', 'juan', 'marcos', 'julieta', 'Maye'];
let movies = [
    {titulo: 'El señor de los anillos', autor: 'J.R.R. Tolkien'},
    {titulo: "Cancion de hielo y fuego", autor: 'George RR Martin'}
    
];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ********************************************************************
// ********************************************************************

// URL raiz de la api
// http://127.0.0.1:5000
app.get('/', (req, res) => {
    res.status(200).send("Welcome to API REST")
})

// URL para listar todos los usuarios
// http://127.0.0.1:5000/users
app.get('/users', (req, res) => {
    res.send(users)
})

// URL para crear un usuario
// http://127.0.0.1:5000/users
app.post('/users', (req, res) => {
    let data = req.query;
    users.push(data.user_name)
    res.send("New user add")
})

// URL para actualizar un usuario
// http://127.0.0.1:5000/users/1
app.patch('/users/:id',(req, res) => {
    let params = req.params;
    let data = req.query;
    users[params.id] = data.user_name
    res.send("User update")
})

// URL para eliminar un usuario
// http://127.0.0.1:5000/users/1
app.delete('/users/:id',(req, res) => {
    let params = req.params;
    users.splice(params.id, 1);
    res.send('User delete')
})

// ********************************************************************

app.get('/', (req, res) => {
    res.status(200).send("Películas y más películas")
})

// URL para listar todos las películas
// http://127.0.0.1:5000/movies
app.get('/movies', (req, res) => {
    res.send(movies)
})

// URL para crear una película
// http://127.0.0.1:5000/movies
app.post('/movies', (req, res) => {
    let data = req.query;
    movies.push(data.movie_name)
    res.send("New movie added")
})

// URL para actualizar una película
// http://127.0.0.1:5000/movies/1
app.patch('/movies/:id',(req, res) => {
    let params = req.params;
    let data = req.query;
    movies[params.id] = data.movie_name
    res.send("Movie updated")
})

// URL para eliminar una película
// http://127.0.0.1:5000/movies/1
app.delete('/movies/:id',(req, res) => {
    let params = req.params;
    movies.splice(params.id, 1);
    res.send('Movie deleted')
})

// ********************************************************************





// Crear y lanzar el servidor
http.createServer(app).listen(PORT, () => {
    console.log(`Server running at http://${hostname}:${PORT}/`);
})