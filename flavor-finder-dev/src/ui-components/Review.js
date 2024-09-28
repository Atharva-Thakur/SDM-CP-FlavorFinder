// import { useEffect, useState } from "react";
import { DataStore, Predicates } from "@aws-amplify/datastore";
// import { Box, Text } from '@chakra-ui/react'
import { Reviews } from "../models";

// export function Review({ RestaurantID }) {
//   const [reviews, setReviews] = useState([])

//   useEffect(() => {
//     const getReviews = async () => {
//       const postReviews = await DataStore.query(Reviews, r => r.Restaurant.eq(RestaurantID))
//       setReviews(postReviews)
//     }
//     getReviews()
//   }, [RestaurantID])

//   return (
//     <Box>
//       {reviews.map(review => (
//         <Text key={review.id}>
//           <Text key={review.id}>
//             <Text as='b'>{review.rating}</Text>
//             {review.reviewBody}
//           </Text>
//         </Text>
//       ))}
//     </Box>
//   )
// }

import React, { Component } from 'react';
import { API, graphqlOperation } from 'aws-amplify'; // You may need to adjust this import based on your GraphQL client library

// Define your GraphQL query to fetch reviews for a specific restaurant
const getReviewsForRestaurant = await DataStore.query(Reviews, r => r.Restaurant.eq(restaurantId));

class RestaurantReviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    try {
      // Fetch reviews for the specific restaurant passed as a prop
      const { data } = await API.graphql(
        graphqlOperation(getReviewsForRestaurant, { id: this.props.restaurantId })
      );

      this.setState({ reviews: data.getReviewsForRestaurant });
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  }

  render() {
    const { reviews } = this.state;

    return (
      <div>
        <h2>Reviews for the {this.props.restaurantName}</h2>
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <h3>Rating: {review.rating}</h3>
              <p>{review.reviewBody}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default RestaurantReviews;


