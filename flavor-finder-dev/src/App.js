import logo from './logo.svg';
import './App.css';
import { Nav,  ProductCardCollection, RestaurantCreateForm} from './ui-components'


function App() {
  return (
    <div>
      <Nav width="100%" marginBottom='20px' />
      <div>
        <ProductCardCollection />  
      </div>
      <div>
        <RestaurantCreateForm />  
      </div>
    </div>
  );
}

export default App;
