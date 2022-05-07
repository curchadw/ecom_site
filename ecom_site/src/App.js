
import './App.scss';
import { Switch,Route } from 'react-router';
import HomePage from './components/home-page';
import NotFound from './components/NotFound';
import Shop from './components/pages/shop/shop';
import SingleProduct from './components/single-product/single-product';



function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={Shop}/>
        <Route exact path='/products/:id' component={SingleProduct}/>
        <Route exact path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
