import * as React from "react";
import { AppContext } from "../contexts/context";
import { ShoppingCartTypes } from "../reducers/shoppingCartReducer";

const Products = () => {
  const { state, dispatch } = React.useContext(AppContext);

  return (
    <div>
      <button
        onClick={() => {
          dispatch({
            type: ShoppingCartTypes.Add
          });
        }}
      >
        click
      </button>
      {state.shoppingCart}
    </div>
  );
};

export default Products;
