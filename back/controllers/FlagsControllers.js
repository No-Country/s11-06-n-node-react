require("dotenv").config();
const axios = require('axios');

async function getAllFlags(req, res) {
  try {
    const flagsResponse = await axios.get('https://demo1063061.mockable.io/idiomas_banderas');
    const flags = flagsResponse.data;

    console.log("banderas",flags);

    if (flags.length) {
      res.status(200).send(flags);
    } 
    
else {
      res.status(500).json({ error: "Error al obtener paises del server" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener paises del server" });
  }
}

module.exports = {
  getAllFlags
};