
import './App.css';
import Home from './components/Home';
import View from './components/View';
import Read from './components/Read';
import Update from './components/Update';
import Update2 from './components/Update2';
import{BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/view' element={<View/>}/>
      <Route path='/read/:id' element={<Read/>}/>
      <Route path='/update/:id' element={<Update/>}/>
      <Route path='/update2/:id' element={<Update2/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
