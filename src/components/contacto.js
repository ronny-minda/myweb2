
import React from 'react';
import axios from 'axios';
import { MainFormulario as Main } from './styles/styles';
// import { Link } from 'react-router-dom';
// import { HEader } from './styles/styles';


class Contacto extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     count: 0
  //   };
  // }

  state = {
    nombre: '',
    email: '',
    mensaje: '',

    nombre1: false,
    email1: false,
    mensaje1: false,


    aviso: '',

    envioExito: false
  }

  async componentDidMount() {
    const res = await axios.get('https://apimiweb.herokuapp.com/api/halo');
    console.log('Server listo: ' + res.data.success);
  }

  onSubmit = async e => {
    e.preventDefault();
    document.getElementById("miform").reset();
    this.setState({
      nombre1: false,
      email1: false,
      mensaje1: false,
    })
    // console.log('enviado')
    let respuesta = await axios.post('https://apimiweb.herokuapp.com/api/email', {
      nombre: this.state.nombre,
      email: this.state.email,
      mensaje: this.state.mensaje
    })

    // const res = await axios.get('http://localhost:4000/email');
    console.log('Correo enviado: ' + respuesta.data.success);

    this.setState({
      envioExito: respuesta.data
    })


    setTimeout( () => {
      this.setState({
        envioExito: false
      })
    }, 5000);



  }

  onChangedatos = e => {
    // console.log(e.target)
    this.setState({
        // username: e.target.value
        [e.target.name]: e.target.value
    })
    
    const expresiones = {
      nombre: /./g,
      correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      mensaje: /./g
    }

    let nombre = expresiones.nombre.test(this.state.nombre);
    let email = expresiones.correo.test(this.state.email);
    let mensaje = expresiones.mensaje.test(this.state.mensaje);

    // console.log('nombre:qqq '+nombre)

    this.setState({
      nombre1: nombre,
      email1: email,
      mensaje1: mensaje,
    })

    setTimeout( () => {
      const expresiones = {
        nombre: /./g,
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        mensaje: /./g
      }
  
      let nombre = expresiones.nombre.test(this.state.nombre);
      let email = expresiones.correo.test(this.state.email);
      let mensaje = expresiones.mensaje.test(this.state.mensaje);
  
      this.setState({
        nombre1: nombre,
        email1: email,
        mensaje1: mensaje,
      })
    }, 1);

  

    // console.log("nombre: "+nombre)
    // console.log("email: "+email)
    // console.log("mensaje: "+mensaje)

    // if(!nombre){
    //   this.setState({
    //     aviso: 'Falta de rellenar el campo Nombre'
    //   })
    // }
    // if(!email){
    //   this.setState({
    //     aviso: 'Falta de rellenar el campo Email'
    //   })
    // }
    // if(!mensaje){
    //   this.setState({
    //     aviso: 'Falta de rellenar el campo Mensaje'
    //   })
    // }




  }



  // componentDidUpdate() {
  //   document.title = `You clicked ${this.state.count} times`;
  // }

  render() {
    return (
      <Main>

        <h2>Contacto</h2>

        <div className="contenedor">

          <section className="contacto">

            <a href="tel:0993105654" target="_blank" rel="noopener noreferrer" title="Telefono">
              
              <div className="ico num"></div>
              <span>0993105654</span>

            </a>
            <a href="mailto:ronny.michael.minda.vera@gmail.com" target="_blank" rel="noopener noreferrer" title="Email">
              
              <div className="ico email"></div>
              <span>ronny.michael.minda.vera@gmail.com</span>

            </a>
            <a href="https://github.com/ronny-minda"  target="_blank" rel="noopener noreferrer" title="GitHub">
              
              <div className="ico git"></div>
              <span>github.com/ronny-minda.com</span>

            </a>

          </section>

          <form id="miform" onSubmit={ this.onSubmit }>
            <label>
            
              <span>Nombre</span>

              <input placeholder="Nombre" name="nombre" type="text" autoFocus autocomplete="name" onChange={this.onChangedatos} required ></input>
            
            </label>
            <label>
              
              <span>Email</span>

              <input placeholder="Email" name="email" type="text" autocomplete="email" onChange={this.onChangedatos} required ></input>
            
            </label>
            <label>
              
              <span>Mensaje</span>

              <textarea className="mensaje" name="mensaje" placeholder="Escribe tu mensaje aquí..." onChange={this.onChangedatos}></textarea>
            
            </label>

            {
              this.state.nombre1 && this.state.email1 && this.state.mensaje1 && <h3 className="avisoBien">Todo correcto y listo para enviar</h3>
            }

            {
              !this.state.nombre1 && <h3 className="avisoMal">Falta de rellenar el campo Nombre</h3>
            }
            {
              !this.state.email1 && <h3 className="avisoMal">Falta de rellenar el campo Email o el correo es invalido</h3>
            }
            {
              !this.state.mensaje1 && <h3 className="avisoMal">Falta de rellenar el campo Mensaje</h3>
            }






            {
              this.state.nombre1 && this.state.email1 && this.state.mensaje1 && <button className="bien" type="submit">Enviar</button>
            }

            {
              (!this.state.nombre1 || !this.state.email1 || !this.state.mensaje1) && <button className="mal" type="">Enviar</button>
            }

            {
              this.state.envioExito && <h3 className="smsExito">Me a llegado tu correo con exito</h3>
            }
            

            

          </form>

        </div>


        <div className="sobre_mi"></div>
        <div className="section1"></div>
        <div className="proyectos"></div>
        <div className="certificados"></div>




      </Main>
    );
  }
}


export default Contacto;