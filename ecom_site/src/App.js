
import './App.scss';
import Header from './components/Header';
import Hero from './hero/hero';
import MainSection from './components/main-section';
import Footer from './components/footer/footer';
import { Switch,Route } from 'react-router';
import HomePage from './components/home-page';
import NotFound from './components/NotFound';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
