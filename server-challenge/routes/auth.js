const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const saltRounds = 10;
const User = require("../models/User");

const withAuth = require("../helpers/middleware");

/**
 * @route   GET home
 * @desc    Load home
 * @access  Public
 */

// accedemos a una ruta privada usando el middleware withAuth que nos devuelva un json que diga en string algo
router.get("/home", withAuth, function (req, res, next) {
 
});

/**
 * @route   POST signup
 * @desc    Register new user
 * @access  Public
 */

router.post("/signup", async (req, res, next) => {
 //Cogemos el email y el password
  try {
    // chequea si el email ya existe en la BD
    
    // si el usuario ya existe, devuelve un error
    
      // en caso contrario, si el usuario no existe, hace hash del password y crea un nuevo usuario en la BD

      
      // definimos el payload que enviaremos junto con el token
      // creamos el token usando el método sign, el string de secret session y el expiring time
      // enviamos en la respuesta una cookie con el token
      // Este método de emisión de tokens es ideal para un entorno de navegador porque establece una cookie httpOnly que ayuda a proteger al cliente de ciertas vulnerabilidades como XSS.

    }
  } catch (error) {
//Le decimos que siga
  }
});

/**
 * @route   POST login
 * @desc    Login user
 * @access  Public
 */

router.post("/login", async function (req, res) {
 //Adquirimos el email y el password
  try {
    // revisa si el usuario existe en la BD
   
    // si el usuario no existe, devuelve un error
   
    // si el usuario existe, hace hash del password y lo compara con el de la BD
    // si coincide, creamos el token usando el método sign, el string de secret session y el expiring time
    // enviamos en la respuesta una cookie con el token
    
      // Issue token
      
      //La configuración httpOnly: true significa que la cookie no se puede leer con JavaScript, pero aún se puede enviar de vuelta al servidor en solicitudes HTTP. Sin esta configuración, un ataque XSS podría usar document.cookie para obtener una lista de cookies almacenadas y sus valores.

    } else {
      //En caso contrario que nos devuelva un json con un errorMessage que contenga algo
     
    }
  } catch (error) {
   //Le decimos que siga
  }
});

/**
 * @route   GET logout
 * @desc    Logout user
 * @access  Private
 */

// para hacer logout, configuramos un valor cualquiera para reemplazar el token
router.get("/logout", withAuth, function (req, res) {
  // seteamos el token con un valor vacío y una fecha de expiración en el pasado (Jan 1st 1970 00:00:00 GMT)
  
  //Y decimos que nos devuelva un status de 200 con un jsnon que envía un message con un mensaje
});

/**
 * @route   GET me
 * @desc    Get user data
 * @access  Private
 */

// obtenemos los datos del usuario
router.get("/me", withAuth, async function (req, res) {
  try {
    // si el token valida en el middleware withAuth, tenemos disponible el email del usuario en req.email
    
    // devolvemos el usuario
    
  } catch (error) {
    //Que devuelva el error
  }
});

module.exports = router;
