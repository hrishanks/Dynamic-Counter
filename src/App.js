import './App.css';
import { useState } from 'react';

const  App =() =>{
  const[counter, setcounter] = useState(0);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Basic Counter App</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div className="App">
      <button onClick={()=> setcounter((prevCount) => prevCount -1) }> - </button>
      <h1>{counter}</h1>
      <button onClick={()=> setcounter((prevCount) => prevCount +1)}> + </button>
    </div>
    </div>
  );
}

export default App;
