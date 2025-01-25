import { useState } from "react";
import { Pagination, RangeSlider } from "@mantine/core";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Properties.css";
import useProperties from "../../hooks/useProperties";
import { PuffLoader } from "react-spinners";
import PropertyCard from "../../components/PropertyCard/PropertyCard";

const Properties = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [priceRange, setPriceRange] = useState([1, 100000]);

  const { data: properties, isError, isLoading } = useProperties(searchQuery, page, priceRange[0], priceRange[1]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setPage(1);
  };

  const handlePriceChange = (range) => {
    setPriceRange(range);
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
        <div className="w-1/2 mt-6 mb-4">
          <span className="block mb-2 text-lg font-medium text-gray-700">Filter by Price (Taka):</span>
          <RangeSlider
            value={priceRange}
            onChange={handlePriceChange}
            min={1}
            max={100000}
            marks={[
              { value: 1, label: "1" },
              { value: 25000, label: "25k" },
              { value: 50000, label: "50k" },
              { value: 75000, label: "75k" },
              { value: 100000, label: "100k" },
            ]}
          />
        </div>
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
