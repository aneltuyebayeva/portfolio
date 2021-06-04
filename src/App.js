import './App.css';
import {Route} from 'react-router-dom'


import About from './components/About';
import Navbar from './components/Navbar';
import AllProjects from './pages/AllProjects';
import Skills from './components/Skills';
import Header from './pages/Header'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route path = "/" exact render={() => {return <Header />}}/>
      <Skills />
      <Route path="/" exact render={() => {return <About />}}/>
      <AllProjects />

    </div>
  );
}

export default App;
