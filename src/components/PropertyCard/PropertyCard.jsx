import './PropertyCard.css'
import { truncate } from 'lodash'
import { useNavigate } from "react-router-dom";
import Heart from "../Heart/Heart";
const PropertyCard = ({property}) => {
  const navigate = useNavigate();
  return (
    <div className="flexColStart r-card"
    onClick={()=>navigate(`../properties/${property.id}`)}
    >
      <Heart/>
      <img src={property?.images[0]} alt={property?.title} />
      <span className="secondaryText r-price">
        <span style={{ color: "orange" }}>৳</span>
        <span>{property.price}</span>
      </span>
      <span className="primaryText">{truncate(property.title, {length: 15})}</span>
      <span className="secondaryText">{truncate(property.description, {length: 80})}</span>
    </div>
  );
};

export default PropertyCard;
