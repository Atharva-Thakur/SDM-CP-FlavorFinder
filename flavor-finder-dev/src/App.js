import logo from './logo.svg';
import './App.css';
import { Nav,  ProductCardCollection, RestaurantCreateForm, SuggestedRestaurantsCreateForm} from './ui-components'
import { Routes, Route, Link } from "react-router-dom";


<Routes>
   <Route path="/" Component={<App />} />
   <Route path="/product" Component={<ProductCardCollection />} />
   <Route path="/suggest" Component={<SuggestedRestaurantsCreateForm />} />
</Routes>

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
