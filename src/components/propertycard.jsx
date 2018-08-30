import React from "react";

const PropertyCard = () => (
  <div>
    <p>{this.props.title}</p>
    <p>{this.props.type}</p>
    <p>{this.props.bathrooms}</p>
    <p>{this.props.bedrooms}</p>
    <p>{this.props.price}</p>
    <p>{this.props.city}</p>
    <button>email</button>
  </div>
);

export default PropertyCard;
