const express = require('express');
const mongoose = require('mongoose');
const Course = require('./models/course');  // Importar el modelo Course
const Topic = require('./models/topic');    // Importar el modelo Topic
const Question = require('./models/question'); // Importar el modelo Question
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema'); // Ruta relativa al archivo schema.js

const app = express();

// URI de conexión de MongoDB Atlas
const uri = 'mongodb+srv://jairoprodev:dyyrH2aYlIJv0emi@cluster0.wpirnjp.mongodb.net/?retryWrites=true&w=majority';

// Conexión a la base de datos
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conexión exitosa a MongoDB Atlas');
  })
  .catch((error) => {
    console.error('Error de conexión a MongoDB Atlas:', error);
  });

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor en funcionamiento en el puerto 3000');
});


app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true, // Activa la interfaz gráfica de GraphQL

}));