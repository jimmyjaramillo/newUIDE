import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';
import img2 from '../images/img2.jpeg';
import img4 from '../images/img4.jpeg';

class VinculacionPage extends Component {
  render() {
    return (
      <div className="BodyVinculacion">
      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column>
            <Image src={img4} size='massive' />
          </Grid.Column>
          <Grid.Column >
              <h1>Vinculación</h1>
              <p>
                Capacitacion personalizada en paquetes de Ofimatica participan
                integrantes del club de Soporte.
                </p>
              <p>
                Entidad beneficiada
                Fundacion Socio Cultural "Don Bosco"
                </p>
          </Grid.Column>
          <Grid.Column >
            <Image src={img2} size='massive' circular />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </div>
    )
  }
}

export default VinculacionPage;