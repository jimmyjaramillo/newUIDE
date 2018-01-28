import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react';

class MisionPage extends Component {
  render() {
    return (
      <Container>
        <Grid centered columns={2}>
          <Grid.Column>
            <div className="BodyMision">
              <h1>Misión</h1>
              <p >
                Club de soporte dedicado a satisfacer las necesidades de soporte tecnico
                y mantenimiento mediante la recuperacion de equipos garantizando el rendimiento
                en PCS de forma rapida y comoda para la entrega de los mismos a sectores vulnerables.
              </p>
              <h1>Titulación</h1>
              <h2>Ing. Tecnologias de la Información</h2>
            </div>
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}

export default MisionPage;