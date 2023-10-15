/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSuggestedRestaurants = /* GraphQL */ `
  subscription OnCreateSuggestedRestaurants(
    $filter: ModelSubscriptionSuggestedRestaurantsFilterInput
  ) {
    onCreateSuggestedRestaurants(filter: $filter) {
      id
      name
      location
      price
      features
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateSuggestedRestaurants = /* GraphQL */ `
  subscription OnUpdateSuggestedRestaurants(
    $filter: ModelSubscriptionSuggestedRestaurantsFilterInput
  ) {
    onUpdateSuggestedRestaurants(filter: $filter) {
      id
      name
      location
      price
      features
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteSuggestedRestaurants = /* GraphQL */ `
  subscription OnDeleteSuggestedRestaurants(
    $filter: ModelSubscriptionSuggestedRestaurantsFilterInput
  ) {
    onDeleteSuggestedRestaurants(filter: $filter) {
      id
      name
      location
      price
      features
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateReviews = /* GraphQL */ `
  subscription OnCreateReviews($filter: ModelSubscriptionReviewsFilterInput) {
    onCreateReviews(filter: $filter) {
      id
      rating
      Restaurant {
        id
        name
        location
        price
        featues
        image
        createdAt
        updatedAt
        __typename
      }
      reviewBody
      createdAt
      updatedAt
      reviewsRestaurantId
      __typename
    }
  }
`;
export const onUpdateReviews = /* GraphQL */ `
  subscription OnUpdateReviews($filter: ModelSubscriptionReviewsFilterInput) {
    onUpdateReviews(filter: $filter) {
      id
      rating
      Restaurant {
        id
        name
        location
        price
        featues
        image
        createdAt
        updatedAt
        __typename
      }
      reviewBody
      createdAt
      updatedAt
      reviewsRestaurantId
      __typename
    }
  }
`;
export const onDeleteReviews = /* GraphQL */ `
  subscription OnDeleteReviews($filter: ModelSubscriptionReviewsFilterInput) {
    onDeleteReviews(filter: $filter) {
      id
      rating
      Restaurant {
        id
        name
        location
        price
        featues
        image
        createdAt
        updatedAt
        __typename
      }
      reviewBody
      createdAt
      updatedAt
      reviewsRestaurantId
      __typename
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateRestaurant = /* GraphQL */ `
  subscription OnCreateRestaurant(
    $filter: ModelSubscriptionRestaurantFilterInput
  ) {
    onCreateRestaurant(filter: $filter) {
      id
      name
      location
      price
      featues
      image
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateRestaurant = /* GraphQL */ `
  subscription OnUpdateRestaurant(
    $filter: ModelSubscriptionRestaurantFilterInput
  ) {
    onUpdateRestaurant(filter: $filter) {
      id
      name
      location
      price
      featues
      image
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteRestaurant = /* GraphQL */ `
  subscription OnDeleteRestaurant(
    $filter: ModelSubscriptionRestaurantFilterInput
  ) {
    onDeleteRestaurant(filter: $filter) {
      id
      name
      location
      price
      featues
      image
      createdAt
      updatedAt
      __typename
    }
  }
`;
