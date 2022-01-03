
import './App.css';

import {
  AddReceipe
} from './Components/AddReceipe.jsx'
import {
  ShowReceipe
} from './Components/Showreccard.jsx'
import {Showrecinfo} from "./Components/Showrecinfo"
function App() {


const boxClick = ()=>{
  
  }
  
  return (

    <div className="App">
     
      <div className="view">
      < AddReceipe/>
        
      </div>
      <h3>Reload after adding recepie to see the information</h3>
       < div className = "view"> 
       <ShowReceipe />
       </div >
        < div >
        <Showrecinfo/>
        </div >
    </div>
  );
}

export default App;
