import axios from "axios";

class Auth {
  constructor() {
    //Crearemos el shorcut auth con this y creando un axios con el método create
    //le añadimos la propiedad baseURL con nuestro link del server raíz y withCredentials con true
 
  }

  signup() {
    // le pasamos email y password a signup y hacemos que devuelva desde this.auth, con el método post llamamos a nuestra rua del back para enviar los datos
  
  }

  login() {
  // le pasamos email y password a signup y hacemos que devuelva desde this.auth, con el método post llamamos a nuestra rua del back para enviar los datos
  
  }

  logout() {
    //Hacemos que devuelva un get del metodo auth para realizar un logout
  }

  me() {
    //Hacemos que devuelva un get del método auth para que acceda al me
  }
}

const axiosRequestFunctions = new Auth();

export default axiosRequestFunctions;
