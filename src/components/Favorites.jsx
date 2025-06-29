// Wishlist.jsx
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

// scss
import "./Favorites.scss";

const Favorites = ({ likedItems }) => {
  const navigate = useNavigate();
  const likedArray = Object.values(likedItems);

  return (
    <div className="wishlist-container">
      <h2 className="favorite-main-heading">Your Wishlist</h2>
      {likedArray.length === 0 ? (
        <p>No items in your wishlist.</p>
      ) : (
        <div className="wishlist-grid">
          {likedArray.map((item) => (
            <div key={item.id} className="wishlist-item">
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

Favorites.propTypes = {
  likedItems: PropTypes.object.isRequired,
};

export default Favorites;
