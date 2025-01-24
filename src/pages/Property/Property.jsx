import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getProperty } from "../../utils/api";
import { PuffLoader } from "react-spinners";
import "./Property.css";

import { FaShower } from "react-icons/fa";
import { MdLocationPin, MdMeetingRoom } from "react-icons/md";
import Heart from "../../components/Heart/Heart";
import PropertySwipper from "./PropertySwipper";

const Property = () => {
  const { propertyId } = useParams();

  const { data: property, isLoading, isError } = useQuery(["property", propertyId], () =>
    getProperty(propertyId)
  );

  if (isLoading) {
    return (
      <div className="wrapper">
        <div className="flexCenter paddings">
          <PuffLoader />
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="wrapper">
        <div className="flexCenter paddings">
          <span>Error while fetching the property details</span>
        </div>
      </div>
    );
  }

  return (
    <div className="wrapper">
      <div className="flexColStart paddings innerWidth property-container">
        {/* like button */}
        <div className="like">
          <Heart />
        </div>
        {property?.images?.length > 0 && <PropertySwipper images={property?.images} />}
        <div className="flexCenter property-details">
          {/* left */}
          <div className="flexColStart left">
            {/* head */}
            <div className="flexStart head">
              <span className="primaryText">{property?.title}</span>
              <span className="orangeText" style={{ fontSize: "1.5rem" }}>
                ৳ {property?.price}
              </span>
            </div>
            {/* facilities */}
            <div className="flexStart facilities">
              {/* bathrooms */}
              <div className="flexStart facility">
                <FaShower size={20} color="#1F3E72" />
                <span>{property?.bathrooms} Bathrooms</span>
              </div>
              {/* rooms */}
              <div className="flexStart facility">
                <MdMeetingRoom size={20} color="#1F3E72" />
                <span>{property?.bedrooms} Room/s</span>
              </div>
            </div>
            {/* description */}
            <span className="secondaryText" style={{ textAlign: "justify" }}>
              {property?.description}
            </span>
            {/* address */}
            <div className="flexStart" style={{ gap: "1rem" }}>
              <MdLocationPin size={25} />
              <span className="secondaryText">
                {property?.street_address}, {""}
                {property?.city}, {property?.country}
              </span>
            </div>

            <div className="flex justify-between w-full">
              <div>
                <h4 className="mb-2">Facilities</h4>
                {property?.features?.map((feature) => (
                  <h6 className="secondaryText">{feature} </h6>
                ))}
              </div>
              <div className="mb-4">
                <h4 className="mb-2">Property owner information</h4>
                <h6 className="secondaryText">
                  Name: {property?.user?.name}
                </h6>
                <h6 className="secondaryText">
                  Email: {property?.user?.email}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
