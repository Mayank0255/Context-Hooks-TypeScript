import { ProductActions } from './productReducer';

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

export enum ShoppingCartTypes {
  Add = "ADD_PRODUCT"
}

type ShoppingCartPayload = {
  [ShoppingCartTypes.Add]: undefined;
};

export type ShoppingCartActions = ActionMap<
  ShoppingCartPayload
>[keyof ActionMap<ShoppingCartPayload>];

export const shoppingCartReducer = (
  state: number,
  action: ProductActions | ShoppingCartActions
) => {
  switch (action.type) {
    case ShoppingCartTypes.Add:
      return state + 1;
    default:
      return state;
  }
};
