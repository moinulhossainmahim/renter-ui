import React, { useEffect, useState } from "react";
import blankImage from "../../assets/blankImage.jpg";
import ProfileEdit from "./ProfileEdit";
import useProfile from "../../hooks/useProfile";
import useUpdateProfile from "../../hooks/useUpdateProfile";
const Profile = () => {
  const user = {
    data: {
      user: {
        id: "01jj8kxe9anvxvbb819mbhm1ah",
        name: "MoinulHossain",
        email: "moinulhossainmahim@gmail.com",
        phone_number: "01884444559",
        profile_image: "https://avatars.githubusercontent.com/u/68756661?v=4",
        email_verified_at: null,
        created_at: "2025-01-23T03:39:54.000000Z",
        updated_at: "2025-01-23T03:39:54.000000Z",
      },
    },
    message: "Fetch auth user successful.",
  };

  const [imageSrc, setImageSrc] = useState(
    user?.data?.user?.profile_image || blankImage
  );
  const [newImageAdded, setNewImageAdded] = useState(false);
  const { data, isError, isLoading, refetch } = useProfile();

  //NOTE get the user from useProfile hook
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newImageURL = URL.createObjectURL(file); // Generate a temporary URL
      setImageSrc(newImageURL); // Update the image source
      setNewImageAdded(true);
    }
  };

  const triggerFileInput = () => {
    document.getElementById("fileInput").click(); // Trigger file input click
  };

  const updateImageUrl = useUpdateProfile();

  const updateImage = () => {
    setNewImageAdded(false);
    user.data.user.profile_image = imageSrc;
    updateImageUrl.mutate(
      { profile_image: user?.data?.user?.profile_image },
      {
        onSuccess: (response) => {
          toast.success(response?.message);
        },
        onError: (error) => {
          toast.error(response?.message);
          console.error("Error Updating Profile Images", error);
        },
      }
    );
  };

  const handleRemoveImage = () => {
    setNewImageAdded(false);
    setImageSrc(user?.data?.user?.profile_image);
  };

  return (
    <div className="bg-[#0C0A09] text-white">
      <div className="grid w-4/6 grid-cols-4 gap-10 py-10 mx-auto">
        <div className="col-span-1">
          <div className="bg-[#1C1917] p-10 rounded-2xl ">
            <div className="relative w-40 h-40 mx-auto">
              <img
                className="object-cover w-40 h-40 rounded-full"
                src={imageSrc}
                alt="Profile"
              />
              {/* X field */}
              {newImageAdded ? (
                <button
                  onClick={handleRemoveImage}
                  className="absolute px-2 py-1 text-white bg-red-500 rounded-full top-2 right-2 hover:bg-red-600"
                >
                  X
                </button>
              ) : (
                <></>
              )}
            </div>
            <div className="mt-4 text-center">
              {newImageAdded ? (
                <button
                  onClick={updateImage}
                  className="px-3 py-2 text-white bg-gray-500 rounded hover:bg-gray-600"
                >
                  Update Image
                </button>
              ) : (
                <button
                  onClick={triggerFileInput}
                  className="px-3 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                >
                  Upload Image
                </button>
              )}

              <input
                id="fileInput"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden" // Hide the file input
              />
            </div>
            <div>
              <p className="pt-3 text-xl font-semibold text-center whitespace-nowrap">
                {user?.data?.user?.name}
              </p>
            </div>
          </div>
        </div>
        <ProfileEdit user={user} />
      </div>
    </div>
  );
};

export default Profile;
