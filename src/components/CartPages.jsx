import { useDispatch, useSelector } from "react-redux";
import "./CartPages.scss";

const CartPages = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleRemove = (item) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        id: item.id,
        selectedSize: item.selectedSize,
      },
    });
  };

  const calculateSubtotal = (items) => {
    return items.reduce((total, item) => total + item.span * item.quantity, 0);
  };

  const calculateDiscount = (items) => {
    const subtotal = calculateSubtotal(items);
    return Math.floor(subtotal * 0.3);
  };

  const calculateTotal = (items) => {
    const subtotal = calculateSubtotal(items);
    const discount = calculateDiscount(items);
    return subtotal - discount;
  };

  return (
    <>
      <div className="cart-page-main">
        <div className="sub-cart-page-main">
          <div className="main-heading-addtocart pb-5">
            <p className="heading-tocart">Shopping Bag</p>
            <p>{cartItems.length} items in your bag</p>
          </div>

          <div className="all-item-section-tocart ">
            {/* Header row */}
            <div className="product-list-heading">
              <p className=" product-listing-item ">Product</p>
              <p className=" product-listing-item-quantity ">Quantity</p>
              <p className=" product-listing-item-price ">Price</p>
            </div>

            {/* Cart Items */}
            {cartItems.length === 0 ? (
              <p className="mt-4">Your bag is empty.</p>
            ) : (
              <>
                {/* Cart Items */}
                {cartItems.map((item) => (
                  <div
                    key={`${item.id}-${item.selectedSize}`}
                    className=" item-section-all-addcart"
                  >
                    {/* Image and Product Info */}
                    <div className=" image-section-toaddcart">
                      <img
                        src={item.image}
                        alt={item.name}
                        className=" main-image-section-cart"
                      />
                      <div className="all-itemsname">
                        <p className="product-item-name">{item.name}</p>
                        <p className="product-size-name">
                          Size: {item.selectedSize}
                        </p>
                        <button
                          onClick={() => handleRemove(item)}
                          className="product-remove-button"
                        >
                          Remove
                        </button>
                      </div>
                    </div>

                    <div className=" product-quantity ">
                      <p className="product-quantity-text">{item.quantity}</p>
                      {/* Quantity: */}
                    </div>

                    <div className="product-price">
                      <p className="product-price-text">{item.span}</p>
                      {/* Price: ₹ */}
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
        <div className="order-summary-section  ">
          <h2 className=" order-summary-section-text">Order Summary</h2>

          {/* Subtotal */}
          <div className=" order-section-subtotal">
            <p>Subtotal</p>
            <p>₹{calculateSubtotal(cartItems)}</p>
          </div>

          {/* Discount (you can modify this logic) */}
          <div className="order-section-discount">
            <p>Discount</p>
            <p>- ₹{calculateDiscount(cartItems)}</p>
          </div>

          <hr className="my-4" />

          {/* Total */}
          <div className="order-section-total">
            <p>Total</p>
            <p>₹{calculateTotal(cartItems)}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPages;
