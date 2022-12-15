import {Route, Switch} from 'react-router-dom'

import LoginPage from './components/LoginPage'
import Home from './components/Home'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginPage} />
    <Route path="/" component={Home} />
  </Switch>
)

export default App
