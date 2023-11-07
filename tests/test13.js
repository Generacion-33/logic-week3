require('dotenv').config()
const axios = require('axios');
const { getApplications } = require('../exercices/13-obtener-aplicaciones/getApplications');

axios.post(
  `${process.env.URL}/exercice13`,
  { getApplications: getApplications.toString() })
  .then(response => {
    const { message } = response.data;
    console.info(message);
  })
  .catch(error => {
    console.error('Hubo un error al comunicarse con la API', error);
  });
