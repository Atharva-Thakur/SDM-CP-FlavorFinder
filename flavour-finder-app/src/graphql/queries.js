/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRestarurant = /* GraphQL */ `
  query GetRestarurant($id: ID!) {
    getRestarurant(id: $id) {
      id
      name
      Dishes {
        items {
          id
          name
          description
          rating
          price
          createdAt
          updatedAt
          restarurantDishesId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listRestarurants = /* GraphQL */ `
  query ListRestarurants(
    $filter: ModelRestarurantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRestarurants(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        Dishes {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getDishes = /* GraphQL */ `
  query GetDishes($id: ID!) {
    getDishes(id: $id) {
      id
      name
      description
      rating
      price
      Dish {
        id
        name
        Dishes {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      reviews {
        items {
          id
          content
          createdAt
          updatedAt
          dishesReviewsId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      restarurantDishesId
      __typename
    }
  }
`;
export const listDishes = /* GraphQL */ `
  query ListDishes(
    $filter: ModelDishesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDishes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        rating
        price
        Dish {
          id
          name
          createdAt
          updatedAt
          __typename
        }
        reviews {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        restarurantDishesId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getReviews = /* GraphQL */ `
  query GetReviews($id: ID!) {
    getReviews(id: $id) {
      id
      dish {
        id
        name
        description
        rating
        price
        Dish {
          id
          name
          createdAt
          updatedAt
          __typename
        }
        reviews {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        restarurantDishesId
        __typename
      }
      content
      createdAt
      updatedAt
      dishesReviewsId
      __typename
    }
  }
`;
export const listReviews = /* GraphQL */ `
  query ListReviews(
    $filter: ModelReviewsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        dish {
          id
          name
          description
          rating
          price
          createdAt
          updatedAt
          restarurantDishesId
          __typename
        }
        content
        createdAt
        updatedAt
        dishesReviewsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
