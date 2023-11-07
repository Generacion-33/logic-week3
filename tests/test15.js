require('dotenv').config()
const axios = require('axios');
const { getMultiples } = require('../exercices/15-encuentra-los-multiplos/getMultiples');

axios.post(
  `${process.env.URL}/exercice15`,
  { getMultiples: getMultiples.toString() })
  .then(response => {
    const { message } = response.data;
    console.info(message);
  })
  .catch(error => {
    console.error('Hubo un error al comunicarse con la API', error);
  });
