import './App.css';
import { Bootstrap } from './Bootstrap-tutorial';
import { FAQ } from './Faq/faq';
import { Footer } from './footer/Footer';
import { NavBar } from './Nav-Bar/NavBar';
import { YoutubeClone } from './youtube-clone';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Bootstrap />
      <YoutubeClone /> 
      <FAQ />
      <Footer />

    </div>
  );
}

export default App;
