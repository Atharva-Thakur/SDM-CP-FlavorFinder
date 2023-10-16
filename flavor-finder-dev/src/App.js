import logo from './logo.svg';
import './App.css';
import { Nav,  ProductCardCollection, RestaurantCreateForm, SuggestedRestaurantsCreateForm} from './ui-components'
import { Routes, Route, Link } from "react-router-dom";
import { withAuthenticator } from '@aws-amplify/ui-react';

<Routes>
   <Route path="/" Component={<App />} />
   <Route path="/product" element={<ProductCardCollection />} />
   <Route path="/suggest" Component={<SuggestedRestaurantsCreateForm />} />
</Routes>

function App({user}) {
  return (
    <div>
      <Nav user = {user} width="100%" marginBottom='20px' />
      <div>
        <ProductCardCollection />  
      </div>
      <div>
        <RestaurantCreateForm />  
      </div>
      <h1>Suggest restaurant</h1>
      <div>
        <SuggestedRestaurantsCreateForm />  
      </div>
    </div>

  );
}

export default withAuthenticator(App);
