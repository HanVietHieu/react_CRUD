import { Routes, Route, Link } from 'react-router-dom'
import Create from './Create'
import './App.css';
import Update from './Update'
import Read from './Read';
import styles from './components/a1.module.css'


function App() {
  return (
    <div>
    <div className="container">
    <img className="img_main" src="https://hvegjijo7jobj.vcdn.cloud/upload/web/background-web/logo_hoc_10.png" />
    <ul>
      <li>
        <Link to="/create">Create</Link>
      </li>
      <li>
        <Link to="/read">Read and Update</Link>
      </li>
     
     
    </ul>
  </div>
   <div  className="main">
   
    <div>
      <h1>HELLO WORD</h1>
      <h3 className={styles.nani}>test</h3>
      </div>
      <Routes>
          <Route path='/Create' element={<Create />} />
     
         <Route path='/Read' element={<Read />} />
      
          <Route path='/Update' element={<Update />} />
     
    </Routes>
    
    </div>
    </div>
  );
}

export default App;
