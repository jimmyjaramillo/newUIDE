import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react';

class IntegrantesPage extends Component {
  render() {
    return (
      <Container>
        <Grid centered columns={3}>
          <Grid.Row>
            <Grid.Column>
              <div className="BodyIntegrantes">
                <h1>Integrantes:</h1>
                <h1>Cordinador General:</h1>
                <h1>Cordinador Club soporte tecnico:</h1>
                <h1>Dirección Esc. Informática y Multimedia:</h1>
              </div>
            </Grid.Column>
            <Grid.Column >
              <div className="BodyIntegrantes">
                <h3>Estudiantes de la escuela de informática y multimedia</h3>
                <h3>Flavio Román</h3>
                <h1></h1>
                <h3>Angel Torres</h3>
                <h1></h1>
                <h1></h1>
                <h3>Ing. Vaneza Benavides</h3>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

export default IntegrantesPage;