/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSuggestedRestaurants = /* GraphQL */ `
  mutation CreateSuggestedRestaurants(
    $input: CreateSuggestedRestaurantsInput!
    $condition: ModelSuggestedRestaurantsConditionInput
  ) {
    createSuggestedRestaurants(input: $input, condition: $condition) {
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
export const updateSuggestedRestaurants = /* GraphQL */ `
  mutation UpdateSuggestedRestaurants(
    $input: UpdateSuggestedRestaurantsInput!
    $condition: ModelSuggestedRestaurantsConditionInput
  ) {
    updateSuggestedRestaurants(input: $input, condition: $condition) {
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
export const deleteSuggestedRestaurants = /* GraphQL */ `
  mutation DeleteSuggestedRestaurants(
    $input: DeleteSuggestedRestaurantsInput!
    $condition: ModelSuggestedRestaurantsConditionInput
  ) {
    deleteSuggestedRestaurants(input: $input, condition: $condition) {
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
export const createReviews = /* GraphQL */ `
  mutation CreateReviews(
    $input: CreateReviewsInput!
    $condition: ModelReviewsConditionInput
  ) {
    createReviews(input: $input, condition: $condition) {
      id
      rating
      RestaurantName
      reviewBody
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateReviews = /* GraphQL */ `
  mutation UpdateReviews(
    $input: UpdateReviewsInput!
    $condition: ModelReviewsConditionInput
  ) {
    updateReviews(input: $input, condition: $condition) {
      id
      rating
      RestaurantName
      reviewBody
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteReviews = /* GraphQL */ `
  mutation DeleteReviews(
    $input: DeleteReviewsInput!
    $condition: ModelReviewsConditionInput
  ) {
    deleteReviews(input: $input, condition: $condition) {
      id
      rating
      RestaurantName
      reviewBody
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createRestaurant = /* GraphQL */ `
  mutation CreateRestaurant(
    $input: CreateRestaurantInput!
    $condition: ModelRestaurantConditionInput
  ) {
    createRestaurant(input: $input, condition: $condition) {
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
export const updateRestaurant = /* GraphQL */ `
  mutation UpdateRestaurant(
    $input: UpdateRestaurantInput!
    $condition: ModelRestaurantConditionInput
  ) {
    updateRestaurant(input: $input, condition: $condition) {
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
export const deleteRestaurant = /* GraphQL */ `
  mutation DeleteRestaurant(
    $input: DeleteRestaurantInput!
    $condition: ModelRestaurantConditionInput
  ) {
    deleteRestaurant(input: $input, condition: $condition) {
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
