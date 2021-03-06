import './App.css';
import Search from './components/search/search';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Body from './components/propertyBody/Body';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  console.log('search function branch');
  
  return (
    <div className="App">

    <div className = 'core-content-container'>
      <Navbar />
      <Router>
          <Switch>

            <Route exact path = '/'>
              <Search />
            </Route>

            <Route exact path = '/property/:id' component = { Body } />
          </Switch>
      </Router>
      <Footer />
      </div>
    </div>
  );
}

export default App;