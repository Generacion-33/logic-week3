require('dotenv').config()
const axios = require('axios');
const { countLetter } = require('../exercices/16-cuenta-las-letras/countLetter');

axios.post(
  `${process.env.URL}/exercice16`,
  { countLetter: countLetter.toString() })
  .then(response => {
    const { message } = response.data;
    console.info(message);
  })
  .catch(error => {
    console.error('Hubo un error al comunicarse con la API', error);
  });
