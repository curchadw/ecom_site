
import './App.scss';
import Header from './components/Header';
import Hero from './hero/hero';
import MainSection from './components/main-section';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <MainSection />
      <Footer />
    </div>
  );
}

export default App;
