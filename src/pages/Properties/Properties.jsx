import { useState } from "react";
import { Pagination } from '@mantine/core';
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Properties.css";
import useProperties from "../../hooks/useProperties";
import { PuffLoader } from "react-spinners";
import PropertyCard from "../../components/PropertyCard/PropertyCard";

const Properties = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);

  const { data: properties, isError, isLoading } = useProperties(searchQuery, page);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setPage(1);
  };

  if (isError) {
    return (
      <div className="wrapper">
        <span>Error while fetching data</span>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="wrapper flexCenter" style={{ height: "60vh" }}>
        <PuffLoader
          height="80"
          width="80"
          radius={1}
          color="#4066ff"
          aria-label="puff-loading"
        />
      </div>
    );
  }

  return (
    <div className="wrapper">
      <div className="flexColCenter paddings innerWidth properties-container">
        <SearchBar onSearch={handleSearch} defaultValue={searchQuery} />
        {(!isLoading && properties?.data?.length > 0) ? (
          <>
            <div className="paddings flexCenter properties">
              {properties?.data?.map((property) => (
                <PropertyCard key={property?.id} property={property} />
              ))}
            </div>
            <Pagination total={Math.ceil(properties?.total/10) || 1} value={page} onChange={setPage} mt="sm" />
          </>
        ) : (
          <div className="flexCenter" style={{ height: "60vh" }}>
            <span>No properties found</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Properties;
