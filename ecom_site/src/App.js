import logo from './logo.svg';
import './App.scss';
import Header from './components/Header';
import Hero from './hero/hero';
import MainSection from './components/main-section';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <MainSection />
    </div>
  );
}

export default App;
