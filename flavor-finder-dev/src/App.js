import logo from './logo.svg';
import './App.css';
import { Nav,  ProductCardCollection} from './ui-components'


function App() {
  return (
    <div className="App">
      <Nav width="100%" marginBottom='20px' />
      <div className='container'>
        <ProductCardCollection />  
      </div>
    </div>
  );
}

export default App;
