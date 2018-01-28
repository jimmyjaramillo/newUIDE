import React, { Component} from 'react';
import { Container } from 'semantic-ui-react';
import { NavLink, Route, Switch } from 'react-router-dom';
import InvestigacionPage from './investigacion';
import VinculacionPage from './vinculacion';
import RepotenciacionPage from './repotenciacion';
class ServiciosPage extends Component {
  render() {
    return (
      <Container>
        <div>
        <div className="ui three item menu">
            <NavLink className="item" activeClassName="active" exact to="/servicios/investigacion">
              Investigacion
            </NavLink>
            <NavLink className="item" activeClassName="active" exact to="/servicios/vinculacion">
              Vinculacion
             </NavLink>
             <NavLink className="item" activeClassName="active" exact to="/servicios/repotenciacion">
              Repotenciacion
             </NavLink>
          </div>
        </div>
        <Switch>
            <Route path="/servicios/investigacion" component={InvestigacionPage}/>
            <Route path= "/servicios/vinculacion" component={VinculacionPage}/>
            <Route path="/servicios/repotenciacion" component={RepotenciacionPage}/>
          </Switch>
    </Container>
    )
  }
}

export default ServiciosPage;