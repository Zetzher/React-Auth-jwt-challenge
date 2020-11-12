import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";

class Login extends Component {
  state = { email: "", password: "" };

  handleFormSubmit = (event) => {
    //Usamos un método para que no se vayan los datos al hacer submit
    //Conseguimos email y password
    //Llamamos al método login que nos lo provee nuestro withAuth y le pasaremos email y password
  };

  handleChange = () => {
    //Cogemos el name y el value de lo que nos trae handleChange y lo seteamos al state
  };

  render() {
    //Conseguimos email y password del state

    return (
      //Hacemos un form que llame a un método para que haga el submit, así como los inputs que tengan un onChange que llame a otro método
      
    );
  }
}

export default withAuth(Login);
