import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getProperty } from "../../utils/api";
import { PuffLoader } from "react-spinners";
import "./Property.css";

import { FaShower } from "react-icons/fa";
import { MdLocationPin, MdMeetingRoom } from "react-icons/md";
import Heart from "../../components/Heart/Heart";
import { useEffect, useState } from "react";
import PropertySwipper from "./PropertySwipper";

const Property = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("properties.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  console.log(typeof data?.data?.listing?.images[0]);
  // const { propertyId } = useParams();
  // const { data: property, isLoading, isError } = useQuery(["property", propertyId], () =>
  //   getProperty(propertyId)
  // );

  // if (isLoading) {
  //   return (
  //     <div className="wrapper">
  //       <div className="flexCenter paddings">
  //         <PuffLoader />
  //       </div>
  //     </div>
  //   );

  // if (isError) {
  //   return (
  //     <div className="wrapper">
  //       <div className="flexCenter paddings">
  //         <span>Error while fetching the property details</span>
  //       </div>
  //     </div>
  //   );
  // }

  if (!data?.data?.listing) {
    return <div>Loading...</div>; // or a loader
  }
  return (
    <div className="wrapper">
      <div className="flexColStart paddings innerWidth property-container">
        {/* like button */}
        <div className="like">
          <Heart />
        </div>
        {data?.data?.listing?.images?.length > 0 && <PropertySwipper images={data?.data?.listing?.images} />}
        <div className="flexCenter property-details">
          {/* left */}
          <div className="flexColStart left">
            {/* head */}
            <div className="flexStart head">
              <span className="primaryText">{data?.data?.listing?.title}</span>
              <span className="orangeText" style={{ fontSize: "1.5rem" }}>
                ৳ {data?.data?.listing?.price}
              </span>
            </div>
            {/* facilities */}
            <div className="flexStart facilities">
              {/* bathrooms */}
              <div className="flexStart facility">
                <FaShower size={20} color="#1F3E72" />
                <span>{data?.data?.listing?.bathrooms} Bathrooms</span>
              </div>
              {/* rooms */}
              <div className="flexStart facility">
                <MdMeetingRoom size={20} color="#1F3E72" />
                <span>{data?.data?.listing?.bedrooms} Room/s</span>
              </div>
            </div>
            {/* description */}
            <span className="secondaryText" style={{ textAlign: "justify" }}>
              {data?.data?.listing?.description}
            </span>
            {/* address */}
            <div className="flexStart" style={{ gap: "1rem" }}>
              <MdLocationPin size={25} />
              <span className="secondaryText">
                {data?.data?.listing?.street_address}, {""}
                {data?.data?.listing?.city}, {data?.data?.listing?.country}
              </span>
            </div>

            <div className="flex justify-between w-full">
              <div>
                <h4 className="mb-2">Facilities</h4>
                {data?.data?.listing?.features?.map((feature) => (
                  <h6 className="secondaryText">{feature} </h6>
                ))}
              </div>
              <div className="mb-4">
                <h4 className="mb-2">Property owner information</h4>
                <h6 className="secondaryText">
                  Name: {data?.data?.listing?.user?.name}
                </h6>
                <h6 className="secondaryText">
                  Email: {data?.data?.listing?.user?.email}
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
