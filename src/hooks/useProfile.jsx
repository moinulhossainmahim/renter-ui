import { useQuery } from "react-query";
import { profileMe } from "../utils/api";

const useProfile = () => {
  const token = localStorage.getItem("access_token");

  const { data, isLoading, isError, refetch } = useQuery(
    "profile", () => profileMe(token),
    { refetchOnWindowFocus: false }
  );
  return {
    data,
    isLoading,
    isError,
    refetch,
  };
};

export default useProfile;
