import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';
import img1 from '../images/img1.jpeg';

class InvestigacionPage extends Component {
  render() {
    return (
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column>
              <div className="BodyIntegrantes">
                <h1>Creacion de un Cluster</h1>
              </div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <div className="BodyIntegrantes">
              <h1>Qué es un Cluster:</h1>
                <p>
                  El término clúster1​ (del inglés cluster, que significa grupo o racimo)
                  se aplica a los conjuntos o conglomerados de ordenadores unidos entre 
                  sí normalmente por una red de alta velocidad y que se comportan como si 
                  fuesen una única computadora.
                </p>
              </div>
            </Grid.Column>
            <Grid.Column >
              <div className="BodyIntegrantes">
                <h1>Objetivo:</h1>
                <p>
                  Entregar soluciones fiables a las instituciones educativas a travez de la 
                  repotenciacion de equipos informaticos.
                </p>
              </div>
            </Grid.Column>
            <Grid.Column >
              <Image src={img1} size='massive' circular/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    )
  }
}

export default InvestigacionPage;