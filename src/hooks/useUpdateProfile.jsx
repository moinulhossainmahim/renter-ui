import { useMutation } from "react-query";
import { updateProfile } from "../utils/api";

const useUpdateProfile = () => {
  //   const token = localStorage.getItem("access_token");

  //   console.log({ profileData }, { token });
  //   const mutation = useMutation(
  //     (profileData) => updateProfile(token, profileData),
  //     {
  //       onSuccess: (data) => {
  //         console.log("Profile updated successfully:", data);
  //       },
  //       onError: (error) => {
  //         console.error("Failed to update profile:", error.message);
  //       },
  //     }
  //   );

  //   return mutation;
  return useMutation(updateProfile);
};

export default useUpdateProfile;
