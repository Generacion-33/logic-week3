require('dotenv').config()
const axios = require('axios');
const { sumEvens } = require('../exercices/14-sumar-los-numeros-pares/sumEvens');

axios.post(
  `${process.env.URL}/exercice14`,
  { sumEvens: sumEvens.toString() })
  .then(response => {
    const { message } = response.data;
    console.info(message);
  })
  .catch(error => {
    console.error('Hubo un error al comunicarse con la API', error);
  });
