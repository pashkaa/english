import logo from './logo.svg';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer'
import { CenterContent } from './components/centerContent/CenterContent.jsx'
import './App.css';
import { Routes, Route } from "react-router-dom"
import { Test } from './components/test/Test.jsx';
import { Tests } from './components/tests/Tests.jsx';
import { Learn } from './components/learn/Learn.jsx'
 
function App() {
  return (
    <div className="App">
      <Header />
      <div  className="App_container">
        <Routes>
          <Route path="/" element={ <CenterContent/> } />
          <Route path="/tests" element={ <Tests/> } />
          <Route path="/tests/test/:id" element={ <Test/> } />
          <Route path="/learn" element={ <Learn/> } />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App;
