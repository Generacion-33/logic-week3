require('dotenv').config()
const axios = require('axios');
const { countStudents } = require('../exercices/18-contar-estudiantes-por-pais/countStudents');

axios.post(
  `${process.env.URL}/exercice18`,
  { countStudents: countStudents.toString() })
  .then(response => {
    const { message } = response.data;
    console.info(message);
  })
  .catch(error => {
    console.error('Hubo un error al comunicarse con la API', error);
  });
