//  Load cart from localStorage
const savedCart = localStorage.getItem("cartItems");

const initialState = {
  cartItems: savedCart ? JSON.parse(savedCart) : [],
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    // ✅ ADD TO CART
    case "ADD_TO_CART": {
      const item = action.payload;

      const existingItem = state.cartItems.find(
        (i) => i.id === item.id && i.selectedSize === item.selectedSize
      );

      let updatedCart;

      if (existingItem) {
        updatedCart = state.cartItems.map((i) =>
          i.id === item.id && i.selectedSize === item.selectedSize
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
      } else {
        updatedCart = [...state.cartItems, item];
      }

      // ✅ Save to localStorage
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));

      return {
        ...state,
        cartItems: updatedCart,
      };
    }

    // ✅ REMOVE FROM CART
    case "REMOVE_FROM_CART": {
      const updatedCart = state.cartItems.filter(
        (i) =>
          !(
            i.id === action.payload.id &&
            i.selectedSize === action.payload.selectedSize
          )
      );

      // ✅ Update localStorage
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));

      return {
        ...state,
        cartItems: updatedCart,
      };
    }

    // ✅ CLEAR CART
    case "CLEAR_CART": {
      localStorage.removeItem("cartItems");

      return {
        ...state,
        cartItems: [],
      };
    }

    default:
      return state;
  }
};

export default CartReducer;
