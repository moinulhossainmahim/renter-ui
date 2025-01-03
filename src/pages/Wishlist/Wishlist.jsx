import React, { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import PropertyCard from "../../components/PropertyCard/PropertyCard";
import { properties } from "../../components/Residencies/residencies.data";
const Wishlist = () => {
  const [filter, setFilter] = useState("");
  return (
    <div className="bg-white">
      <div className="wrapper">
        <div className="flexColCenter paddings innerWidth properties-container">
          <div className="paddings flexCenter properties">
            {
              // data.map((card, i)=> (<PropertyCard card={card} key={i}/>))

              properties
                .filter(
                  (property) =>
                    property.title
                      .toLowerCase()
                      .includes(filter.toLowerCase()) ||
                    property.city
                      .toLowerCase()
                      .includes(filter.toLowerCase()) ||
                    property.country
                      .toLowerCase()
                      .includes(filter.toLowerCase())
                )
                .map((card, i) => (
                  <PropertyCard property={card} key={i} />
                ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
