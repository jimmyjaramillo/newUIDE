import React, { Component} from 'react';
import { Grid, Image } from 'semantic-ui-react';
import img3 from '../images/img3.jpeg';
import img5 from '../images/img5.jpeg';

class RepotenciacionPage extends Component {
  render() {
    return (
      <div className="BodyVinculacion">
      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column>
            <Image src={img3} size='massive' />
          </Grid.Column>
          <Grid.Column >
              <h1>Repontenciación de Equipos</h1>
              <p>
                Revisar los computadores y saber que componentes actualizar
                para mejorar el rendimiento de los mismos
                </p>
          </Grid.Column>
          <Grid.Column >
            <Image src={img5} size='massive' circular />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </div>
    )
  }
}

export default RepotenciacionPage;