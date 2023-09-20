/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRestarurant = /* GraphQL */ `
  mutation CreateRestarurant(
    $input: CreateRestarurantInput!
    $condition: ModelRestarurantConditionInput
  ) {
    createRestarurant(input: $input, condition: $condition) {
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
export const updateRestarurant = /* GraphQL */ `
  mutation UpdateRestarurant(
    $input: UpdateRestarurantInput!
    $condition: ModelRestarurantConditionInput
  ) {
    updateRestarurant(input: $input, condition: $condition) {
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
export const deleteRestarurant = /* GraphQL */ `
  mutation DeleteRestarurant(
    $input: DeleteRestarurantInput!
    $condition: ModelRestarurantConditionInput
  ) {
    deleteRestarurant(input: $input, condition: $condition) {
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
export const createDishes = /* GraphQL */ `
  mutation CreateDishes(
    $input: CreateDishesInput!
    $condition: ModelDishesConditionInput
  ) {
    createDishes(input: $input, condition: $condition) {
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
export const updateDishes = /* GraphQL */ `
  mutation UpdateDishes(
    $input: UpdateDishesInput!
    $condition: ModelDishesConditionInput
  ) {
    updateDishes(input: $input, condition: $condition) {
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
export const deleteDishes = /* GraphQL */ `
  mutation DeleteDishes(
    $input: DeleteDishesInput!
    $condition: ModelDishesConditionInput
  ) {
    deleteDishes(input: $input, condition: $condition) {
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
export const createReviews = /* GraphQL */ `
  mutation CreateReviews(
    $input: CreateReviewsInput!
    $condition: ModelReviewsConditionInput
  ) {
    createReviews(input: $input, condition: $condition) {
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
export const updateReviews = /* GraphQL */ `
  mutation UpdateReviews(
    $input: UpdateReviewsInput!
    $condition: ModelReviewsConditionInput
  ) {
    updateReviews(input: $input, condition: $condition) {
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
export const deleteReviews = /* GraphQL */ `
  mutation DeleteReviews(
    $input: DeleteReviewsInput!
    $condition: ModelReviewsConditionInput
  ) {
    deleteReviews(input: $input, condition: $condition) {
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
