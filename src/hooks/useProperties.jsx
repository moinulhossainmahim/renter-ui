import { useQuery } from "react-query";
import { getAllProperties } from "../utils/api";

const useProperties = (search) => {
  const { data, isLoading, isError, refetch } = useQuery(
    ["allProperties", search],
    () => getAllProperties(search),
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
