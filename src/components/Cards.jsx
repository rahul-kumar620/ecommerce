import PropTypes from "prop-types";

const Cards = ({ mensImage }) => {
  return (
    <li style={{ width: "350px", padding: "10px", border: "1px solid #ddd" }}>
      <img
        className="mens_image"
        src={`https://picsum.photos/id/${mensImage.id}/150`}
        alt={mensImage.title}
        style={{ width: "100%" }}
      />
      <h4 style={{ fontSize: "14px" }}>{mensImage.title}</h4>
    </li>
  );
};

Cards.propTypes = {
  mensImage: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cards;
