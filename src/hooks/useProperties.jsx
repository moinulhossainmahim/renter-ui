import { useQuery } from "react-query";
import { getAllProperties } from "../utils/api";

const useProperties = (search, page) => {
  const { data, isLoading, isError, refetch } = useQuery(
    ["allProperties", search, page],
    () => getAllProperties(search, page),
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