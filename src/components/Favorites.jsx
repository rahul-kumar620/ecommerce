import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Favorites.scss";

const Favorites = () => {
  const navigate = useNavigate();

  // ✅ Get likedItems from Redux store
  const likedItems = useSelector((state) => state.liked || {});
  const likedArray = Object.values(likedItems);

  return (
    <div className="wishlist-container">
      <h2 className="favorite-main-heading">Your Wishlist</h2>
      {likedArray.length === 0 ? (
        <p>No items in your wishlist.</p>
      ) : (
        <div className="wishlist-grid">
          {likedArray.map((item, index) => (
            <div key={`${item.id}-${index}`} className="wishlist-item">
              <img src={item.image} alt={item.title} />
              <p>{item.name}</p>
              <p>₹{item.price}</p>
              <button
                onClick={() =>
                  navigate(`/Productdetails/${item.id}`, {
                    state: { product: item },
                  })
                }
              >
                View
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
