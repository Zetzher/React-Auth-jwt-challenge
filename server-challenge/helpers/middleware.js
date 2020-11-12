const jwt = require("jsonwebtoken");

const secret = process.env.SECRET_SESSION;

const withAuth = function (req, res, next) {
    // obtenemos el token de las cookies
  
    // si no hay token, devolvemos un error
  
      // en caso contrario verificamos el token
    
          // si hay un error, devolvemos un mensaje
         
          // pero si el token valida, configuramos req.email con el valor del decoded email
         
        }
      });
    }
  };

module.exports = withAuth;
