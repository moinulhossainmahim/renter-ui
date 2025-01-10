import { useMutation } from "react-query";
import { createProperty } from "../utils/api";

const useCreateProperty = () => {
  return useMutation(createProperty);
};

export default useCreateProperty;
