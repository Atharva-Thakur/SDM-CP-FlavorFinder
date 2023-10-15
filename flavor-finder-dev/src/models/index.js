// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { SuggestedRestaurants, Reviews, User, Restaurant } = initSchema(schema);

export {
  SuggestedRestaurants,
  Reviews,
  User,
  Restaurant
};