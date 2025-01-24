import { useQuery, useMutation, useQueryClient } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getProperty, deleteProperty } from "../../utils/api";
import { PuffLoader } from "react-spinners";
import "./Property.css";

import { FaShower } from "react-icons/fa";
import { MdLocationPin, MdMeetingRoom } from "react-icons/md";
import Heart from "../../components/Heart/Heart";
import PropertySwipper from "./PropertySwipper";
import useProfile from "../../hooks/useProfile";

const Property = () => {
  const { propertyId } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data: user, isError: isProfileError, isLoading: isProfileLoading } = useProfile();

  const mutation = useMutation(deleteProperty, {
    onSuccess: (response) => {
      toast.success(response.message);
      queryClient.invalidateQueries(["property", propertyId]);
      navigate('/properties');
    },
    onError: (error) => {
      toast.error("Failed to delete property");
      console.error('Error deleting property:', error);
    },
  });

  const { data: property, isLoading, isError } = useQuery(["property", propertyId], () =>
    getProperty(propertyId),
    {
      enabled: !!propertyId && !mutation.isSuccess,
    }
  );

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this property?")) {
      mutation.mutate(propertyId);
    }
  };

  if (isLoading || isProfileLoading) {
    return (
      <div className="wrapper">
        <div className="flexCenter paddings">
          <PuffLoader />
        </div>
      </div>
    );
  }

  if (isError || isProfileError) {
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
              {user?.data?.user?.id === property?.user?.id && (
                <button className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600" onClick={handleDelete}>Delete this property</button>
              )}
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
                  <h6 className="secondaryText" key={feature}>{feature} </h6>
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
