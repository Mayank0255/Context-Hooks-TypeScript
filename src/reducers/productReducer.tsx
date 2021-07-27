import { ShoppingCartActions } from './shoppingCartReducer';

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      }
};

export enum ProductTypes {
  Create = "CREATE_PRODUCT",
  Delete = "DELETE_PRODUCT"
}

export type ProductType = {
  id: number;
  name: string;
  price: number;
};

type ProductPayload = {
  [ProductTypes.Create]: {
    id: number;
    name: string;
    price: number;
  };
  [ProductTypes.Delete]: {
    id: number;
  };
};

export type ProductActions = ActionMap<ProductPayload>[keyof ActionMap<
  ProductPayload
>];

export const productReducer = (
  state: ProductType[],
  action: ProductActions | ShoppingCartActions
) => {
  switch (action.type) {
    case ProductTypes.Create:
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price
        }
      ];
    case ProductTypes.Delete:
      return [...state.filter(product => product.id !== action.payload.id)];
    default:
      return state;
  }
};