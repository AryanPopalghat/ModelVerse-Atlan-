import React from 'react';
import './App.css';
import Header from './Components/header';
import Footer from './Components/footer';
import MainContent from './Components/MainContent';
import Explore from './Components/Explore';
import Featured from './Components/featured';
import ModelDetails from './Components/ModelDetails';
import SubmitModelForm from './Components/SubmitModelForm';
import ModelCards from './Components/cardmodel';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
    return (
      <Router>
        <div className="App">
          <Header />
          <Routes>
          <Route exact path="/explore" element={<Explore/>} />
          <Route exact path="/featured" element={<Featured/>} />
          <Route exact path="/featured/:modelName" element={<ModelDetails/>} />
          <Route exact path='/form' element={<SubmitModelForm/>}/>
          <Route exact path='/usermodel' element={<ModelCards/>}/>
          <Route exact path="/" element={<MainContent />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    );
};

export default App;
