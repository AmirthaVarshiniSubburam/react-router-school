import './App.css';
import Student from './Student';
import Teacher from './Teacher';
import {BrowserRouter as Router,Link,Routes,Route} from "react-router-dom"
import School from './School';

function App() {
  return (
    <div className="App">
    <Router>
    <Link to="/">Home 
      </Link>
      <Link to="/students">Student 
      </Link>
      <Link to="/teacher">Teacher 
      </Link>
      <Routes>
        <Route path='/' element={ <School /> } />
        <Route path='/students' element={ <Student /> } />
        <Route path='/teacher' element={ <Teacher /> } />
    
      </Routes>
    </Router>

     {/* <Student />  
     <Teacher /> */}
    </div>
  );
}

export default App;
