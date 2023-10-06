const UsuarioServices = require('../services/usuarios-services');

async function getAllUsuarios(req, res) {
  try {
    const usuarios = await UsuarioServices.getAll();
    res.status(200).send(usuarios);
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

async function signUpUsuario(req, res) {
  const { nombre, email, password } = req.body;
  if (!nombre || !email || !password) {
    return res.status(400).json({ message: "Faltan datos obligatorios" });
  }
  if (typeof nombre !== 'string' || typeof email !== 'string' || typeof password !== 'string') {
    return res.status(400).json({ message: "Tipos de datos incorrectos" });
  }

  try {
    const response = await UsuarioServices.signUp(nombre, email, password);
    if (response === "Email existente") {
      return res.status(400).json({ error: response });
    }
    res.status(201).send(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function getUsuarioById(req, res) {
  const { id } = req.params;
  try {
    const response = await UsuarioServices.getById(id);
    if (response == "Usuario no encontrado") {
      return res.status(404).json({ error: response });
    } else {
      return res.status(200).send(response);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function getUsuarioByEmail(req, res) {
  const { email } = req.params;
    UsuarioServices.getByEmail(email).then((response) => {
      if (response == "Usuario no encontrado") {
        res.status(404).json({ error: 'usuario no encontrado' });
      } else {
        res.status(200).send(response);
      }
    }).catch ((error) => {
    res.status(400).json({ error: error.message });
  })
}

async function editUsuario(req, res) {
  const {
    id, nombre, email, password, avatar, location_lat, location_lng, localidad_id
  } = req.body;
  try {
    if ((id && typeof id !== "number") || 
    (nombre && typeof nombre !== "string") ||
    (email && typeof email !== "string") ||
    (location_lat && typeof location_lat !== "string") ||
    (location_lng && typeof location_lng !== "string") ||
    (localidad_id && typeof localidad_id !== "number") ||
    (password && typeof password !== "string")) {
      return res.status(400).json({ message: "Tipos de datos incorrectos" });
    }
    const response = await UsuarioServices.edit(
      id,
      nombre,
      email,
      password,
      avatar,
      location_lat,
      location_lng,
      localidad_id,
    );
    if (response == "Usuario no encontrado") {
      return res.status(404).send({error: response})
    }
    res.status(200).send(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function deleteUsuario(req, res) {
  const { id } = req.params;
  try {
    const response = await UsuarioServices.deleteUsuario(id);
    console.log(response)
    if (response == "Usuario no encontrado") {
      res.status(404).send({error: response})
    } else {
      res.status(200).send({response});

    }
  } catch (error) {
    res.status(404).json({ error: 'usuario no encontrado' });
  }
}

async function login (req, res, next) {
  const {email, password} = req.body
  try {
    const response = await UsuarioServices.login(email, password)
    if (response == "Usuario no encontrado") {
      return res.status(404).send({error: response})
    }
    res.status(200).send(response)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getAllUsuarios,
  signUpUsuario,
  getUsuarioById,
  getUsuarioByEmail,
  editUsuario,
  deleteUsuario,
  login
};
