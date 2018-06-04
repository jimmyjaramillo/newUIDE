import React, { Component } from 'react';
import uide from './images/uide.png';
import fmi from './images/fmi.png';
import MisionPage from './pages/mision';
import VisionPage from './pages/vision';
import IntegrantesPage from './pages/integrantes';
import ServiciosPage from './pages/servicios';
import { NavLink, Route } from 'react-router-dom';
import { Grid, Image, Label } from 'semantic-ui-react';
import CarruselPage from './pages/carrucel';
import './App.css';

class App extends Component {
  render() {

    return (
      <div className="Continer">
        <div className="Header">
          <div className="HeaderNavBar">
            <Grid celled='internally'>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Image src={uide} alt="Logo UIDE" aria-labelledby="UIDE" aria-describedby="Universidad Internacional del Ecuador"/>
                </Grid.Column>
                <Grid.Column width={10}>
                  <div className="BodyHeader">
                    <Label size="massive" >CLUB DE SOPORTE TECNOLOGICO</Label>
                  </div>
                  <div className="BodyHeader">
                    <Label size="big">TECNOLOGIAS DE LA INFORMACION Y COMUNICACION</Label>
                  </div>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Image src={fmi} />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </div>
        <div className="Body">
          <div className="ui five item menu">
            <NavLink className="item" activeClassName="active" exact to="/">
              Imagenes
            </NavLink>
            <NavLink className="item" activeClassName="active" exact to="/vision">
              Misión
            </NavLink>
            <NavLink className="item" activeClassName="active" exact to="/mision">
              Visión
             </NavLink>
            <NavLink className="item" activeClassName="active" exact to="/servicios">
              Servicios
             </NavLink>
            <NavLink className="item" activeClassName="active" exact to="/integrantes">
              Integrantes
             </NavLink>
          </div>
          <Route exact path="/" component={CarruselPage} />
          <Route path="/vision" component={MisionPage} />
          <Route path="/mision" component={VisionPage} />
          <Route path="/integrantes" component={IntegrantesPage} />
          <Route path="/servicios" component={ServiciosPage} />
        </div>
        <div className="Buttom">
          <Grid columns={3}>
            <Grid.Row>
              <Grid.Column>
                <h3>Contactos:  <p> Av.Manuel Agustin Aguirre y Mercadillo, instalaciones de la UIDE</p></h3>
              </Grid.Column>
              <Grid.Column>
                <h3>Telefono:  <p>2584567 Ext 2609</p></h3>
              </Grid.Column>
              <Grid.Column>
                <h3>Facebook:  <p><a href="https://www.facebook.com/informaticaymultimedialoja/?ref=br_rs">Escuela de informatica y multimedia</a></p></h3>
              </Grid.Column>
              <Grid.Column>
                <h4>Diseño y Programación: Diego Tinitana</h4>
              </Grid.Column>
              <Grid.Column>
                <h4>Contactos: 0987174750 - 2102737</h4>
              </Grid.Column>
              <Grid.Column>
                <h4>Descarga el Codigo: <a href="https://github.com/DiegoTinitana/InformaticaMultimediaUide">GitHub</a> </h4>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default App;
