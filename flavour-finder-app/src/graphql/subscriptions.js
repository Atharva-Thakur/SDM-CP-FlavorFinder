/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRestarurant = /* GraphQL */ `
  subscription OnCreateRestarurant(
    $filter: ModelSubscriptionRestarurantFilterInput
  ) {
    onCreateRestarurant(filter: $filter) {
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
export const onUpdateRestarurant = /* GraphQL */ `
  subscription OnUpdateRestarurant(
    $filter: ModelSubscriptionRestarurantFilterInput
  ) {
    onUpdateRestarurant(filter: $filter) {
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
export const onDeleteRestarurant = /* GraphQL */ `
  subscription OnDeleteRestarurant(
    $filter: ModelSubscriptionRestarurantFilterInput
  ) {
    onDeleteRestarurant(filter: $filter) {
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
export const onCreateDishes = /* GraphQL */ `
  subscription OnCreateDishes($filter: ModelSubscriptionDishesFilterInput) {
    onCreateDishes(filter: $filter) {
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
export const onUpdateDishes = /* GraphQL */ `
  subscription OnUpdateDishes($filter: ModelSubscriptionDishesFilterInput) {
    onUpdateDishes(filter: $filter) {
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
export const onDeleteDishes = /* GraphQL */ `
  subscription OnDeleteDishes($filter: ModelSubscriptionDishesFilterInput) {
    onDeleteDishes(filter: $filter) {
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
export const onCreateReviews = /* GraphQL */ `
  subscription OnCreateReviews($filter: ModelSubscriptionReviewsFilterInput) {
    onCreateReviews(filter: $filter) {
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
export const onUpdateReviews = /* GraphQL */ `
  subscription OnUpdateReviews($filter: ModelSubscriptionReviewsFilterInput) {
    onUpdateReviews(filter: $filter) {
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
export const onDeleteReviews = /* GraphQL */ `
  subscription OnDeleteReviews($filter: ModelSubscriptionReviewsFilterInput) {
    onDeleteReviews(filter: $filter) {
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
