import { useQuery } from "react-query";
import { getAllProperties } from "../utils/api";

const useProperties = (search, page, minPrice, maxPrice) => {
  const { data, isLoading, isError, refetch } = useQuery(
    ["allProperties", search, page, minPrice, maxPrice],
    () => getAllProperties(search, page, minPrice, maxPrice),
    { refetchOnWindowFocus: false }
  );

  return {
    data,
    isError,
    isLoading,
    refetch,
  };
};

export default useProperties;