require('dotenv').config()
const axios = require('axios');
const { countApplicationsByChannel } = require('../exercices/17-contar-aplicaciones-por-canal/countApplicationsByChannel');
axios.post(
  `${process.env.URL}/exercice17`,
  { countApplicationsByChannel: countApplicationsByChannel.toString() })
  .then(response => {
    const { message } = response.data;
    console.info(message);
  })
  .catch(error => {
    console.error('Hubo un error al comunicarse con la API', error);
  });
