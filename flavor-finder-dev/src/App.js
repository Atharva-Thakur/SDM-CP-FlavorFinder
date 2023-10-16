import './App.css';
import { Nav,  ProductCardCollection, ReviewCardCollection, ReviewsCreateForm, SuggestedRestaurantsCreateForm} from './ui-components'
import { withAuthenticator } from '@aws-amplify/ui-react';


function App({user}) {
  return (
    <div margin="10px 10px 10px 10px">
      <Nav user = {user} width="100%" marginBottom='20px' />
      <div>
        <h1 margin="10px 10px 10px 10px">Available Restaurants-</h1>
        <ProductCardCollection />  
      </div>
      <div>
        <h1>Search Reviews-</h1>
        <ReviewCardCollection />  
      </div>
      <div>
        <h1>Write a Review-</h1>
        <ReviewsCreateForm />  
      </div>
      <div>
        <h1>Suggest a Restaurant</h1>
        <SuggestedRestaurantsCreateForm />  
      </div>
    </div>

  );
}

export default withAuthenticator(App);
