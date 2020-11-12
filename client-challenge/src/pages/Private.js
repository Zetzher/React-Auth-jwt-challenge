import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";

class Private extends Component {
  render() {
    return (

      //Crearemos un texto de bienvenida que contenga el nombre del user que está logueado
     
    );
  }
}

export default withAuth(Private);
