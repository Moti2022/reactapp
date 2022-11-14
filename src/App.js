import React from 'react';
import './App.css';
import SeeQueries from './components/seeQueries.js';
import SeeQuery from './components/seeQuery.js';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
           <div>
            <ul>
              <li>
                <Link to="/">Queries</Link>
                
              </li>
            </ul>
           <Routes>
                  <Route exact path='/' element={< SeeQueries />}></Route>
                 <Route exact path='/seequery/:id' element={< SeeQuery />}></Route>
          </Routes>
          </div>
       </Router>
    </div>
  );
}

export default App;
