import React, { Component} from 'react';
import { Container, Grid } from 'semantic-ui-react';

class VisionPage extends Component {
  render() {
    return (
      <Container>
        <Grid centered columns={2}>
          <Grid.Column>
            <div className="BodyMision">
              <h1>Visión</h1>
              <p >
                Ser un club de soporte lider en el mercado local brindando servicios
                de mantenimiento de computo, con atencion personalizada y una reparacion 
                constante de equipos.
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

export default VisionPage;