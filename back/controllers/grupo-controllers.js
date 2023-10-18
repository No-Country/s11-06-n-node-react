const GrupoServices = require("../services/grupos-services");

async function getAllGrupos(req, res) {
  try {
    const grupos = await GrupoServices.getAll();
    res.status(200).send(grupos);
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
}

// async function getAllUsuariosToDashboard(req, res) {
//   try {
//     const usuarios = await UsuarioServices.getAllToDashboard();
//     res.status(200).send(usuarios);
//   } catch (error) {
//     res.status(500).json({ error: "Error interno del servidor" });
//   }
// }


// async function signUpUsuario(req, res) {
//   return res.status(201).send({ message: "Usuario creado con éxito" });
// }

// async function signUpUsuarioFail(req, res) {
//   const { nombre, apellido, email, password } = req.body;
//   if (!nombre || !apellido ||  !email || !password) {
//     return res.status(400).json({ message: "Faltan datos obligatorios" });
//   }
//   if (
//     typeof nombre !== "string" ||
//     typeof apellido !== "string" ||
//     typeof email !== "string" ||
//     typeof password !== "string"
//   ) {
//     return res.status(400).json({ message: "Tipos de datos incorrectos" });
//   }
//   return res.status(400).json({ error: "Usuario ya existe" });
// }

// async function getUsuarioById(req, res) {
//   const { id } = req.params;
//   try {
//     const response = await UsuarioServices.getById(id);
//     if (response == "Usuario no encontrado") {
//       return res.status(404).json({ error: response });
//     } else {
//       return res.status(200).send(response);
//     }
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// }


// async function editUsuario(req, res) {
//   const {
//     id,
//     nombre,
//     apellido,
//     email,
//     password,
//     avatar,
//     pais,
//     idiomas,
//     fecha_nacimiento,
//     celular
//   } = req.body;
//   try {
//     if (
//       (nombre && typeof nombre !== "string") ||
//       (apellido && typeof apellido !== "string") ||
//       (email && typeof email !== "string") ||
//       (password && typeof password !== "string") || 
//       (fecha_nacimiento && typeof fecha_nacimiento !== "string") || 
//       (celular && typeof celular !== "string") || 
//       (pais && typeof pais !== "string") 
//     ) {
//       return res.status(400).json({ message: "Tipos de datos incorrectos" });
//     }
//     const response = await UsuarioServices.edit(
//       id,
//       nombre,
//       apellido,
//       email,
//       password,
//       avatar,
//       pais,
//       idiomas,
//       fecha_nacimiento,
//       celular
//     );
//     if (response == "Usuario no encontrado") {
//       return res.status(404).send({ error: response });
//     }
//     res.status(200).send(response);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// }

// async function deleteUsuario(req, res) {
//   const { id } = req.params;
//   try {
//     const response = await UsuarioServices.deleteUsuario(id);
//     if (response == "Usuario no encontrado") {
//       res.status(404).send({ error: response });
//     } else {
//       res.status(200).send({ response });
//     }
//   } catch (error) {
//     res.status(404).json({ error: "usuario no encontrado" });
//   }
// }

// async function login(req, res) {
//   const {email, password} = req.body
//   try {
//     const response = await UsuarioServices.login(email, password)
//     res.status(200).send(response)
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// }

// async function loginFail(req, res) {
//   return res.status(404).send({mensaje: "Usuario o contraseña incorrectos"});
// }

module.exports = {
  getAllUsuarios,
  signUpUsuarioFail,
  getUsuarioById,
  editUsuario,
  deleteUsuario,
  login,
  signUpUsuario,
  loginFail,
  getAllUsuariosToDashboard
};
