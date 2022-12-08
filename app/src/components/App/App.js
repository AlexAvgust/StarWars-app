import './App.css';
import Person from '../Person/Person';
import Planets from '../Planets/Planets';
import Starships from '../Starships/Starships';
import { useState } from 'react';

function App() {

  const [currentPage,setCurrentPage] = useState(<Person />)

  const chengePage = (e) => {

    switch (e.target.value) {
      case 'people':
        setCurrentPage(<Person />)
        break
      case 'planets':
        setCurrentPage(<Planets />)
        break
      case 'starship':
        setCurrentPage(<Starships />)
        break
      default:
        setCurrentPage(<Person />)
    }
  }

    return (

      <div className="App">
        <div className='buttons'>
          <button onClick={(e) => chengePage(e)} value={'people'}>People</button>
          <button onClick={(e) => chengePage(e)} value={'planets'}>Planets</button>
          <button onClick={(e) => chengePage(e)} value={'starship'}>Starships</button>
        </div>
    
      {currentPage}
     
      </div>
    );
  

}

export default App;
