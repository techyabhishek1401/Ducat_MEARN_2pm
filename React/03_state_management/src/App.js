
import Name from './Component/01Name';
import Form from './Pages/Form'
import Props from './Pages/02-Props';
import LifeCycleMethods from './Pages/03-LifeCycleMethods';
import Api from './Pages/03-Api';
import FunctionComponents from './Pages/FunctionComponents';
import { Container, Row, Col } from 'react-bootstrap'
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {

  const menus = [{ "name": "JAVASCRIPT", topic: [{ 'name': "Name", path: "/" }] }, { "name": "REACT", topic: [{ 'name': "welcome", path: "/welcome" }] },
  { "name": "Nodejs", topic: [{ 'name': "node", path: "/node" }, { 'name': "express", path: "/express" }] }]
  return (
    <div className="App">
      <BrowserRouter>
        <Row>
          <Col md="2"> <ul>

            {menus.map(menu => {
              return <ul>
                <li><b>{menu.name}</b></li>
                <li>
                  <ol>
                    {menu.topic.map(topic => {
                      return <li><Link to={topic.path}>{topic.name}</Link></li>
                    })}
                  </ol>
                </li>

              </ul>
            })}

            <li><Link to="/">Home</Link></li>
            <li><Link to="/name">name</Link></li>
            <li><Link to="/form">Form</Link></li>
            <li><Link to="/props">Props</Link></li>
            <li><Link to="/lifeCMethod">Life Cycle methods</Link></li>
            <li><Link to="/api">Api </Link></li>
            <li><Link to="/fnc">FunctionComponents</Link></li>
          </ul></Col>
          <Col>
            <Switch>
              {/* <Route path="/name" component={Name} /> */}
              <Route path="/" exact>
                <h1>I'm at Home</h1>
              </Route>
              <Route path="/name">
                <Name />
              </Route>
              <Route path="/form">
                <Form />
              </Route>
              <Route path="/props">
                <Props />
              </Route>
              <Route path="/lifeCMethod">
                <LifeCycleMethods />
              </Route>
              <Route path="/api">
                <Api />
              </Route>
              <Route path="/fnc">
                <FunctionComponents />
              </Route>

            </Switch>
          </Col>
        </Row>


      </BrowserRouter>

    </div>
  );
}

export default App;
