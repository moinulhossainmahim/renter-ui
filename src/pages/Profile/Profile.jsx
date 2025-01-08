import React, { useEffect, useState } from "react";
import blankImage from "../../assets/blankImage.jpg";
import ProfileEdit from "./ProfileEdit";
import useProfile from "../../hooks/useProfile";
const Profile = () => {
  const user = {
    name: "Moinul Islam",
    email: "moinul12@gmail.com",
    phoneNumber: "01884444559",
    image: "https://avatars.githubusercontent.com/u/68756661?v=4",
  };

  const [imageSrc, setImageSrc] = useState(user.image || blankImage);
  const { data, isError, isLoading, refetch } = useProfile();
  //NOTE get the user from useProfile hook
  // const user = data?.data?.user;
  console.log(user);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newImageURL = URL.createObjectURL(file); // Generate a temporary URL
      setImageSrc(newImageURL); // Update the image source
    }
  };

  const triggerFileInput = () => {
    document.getElementById("fileInput").click(); // Trigger file input click
  };
  return (
    <div className="bg-[#0C0A09] text-white">
      <div className="grid w-4/6 grid-cols-4 gap-10 py-10 mx-auto">
        <div className="col-span-1">
          <div className="bg-[#1C1917] p-10 rounded-2xl ">
            <div>
              <img
                className="object-cover w-40 h-40 mx-auto rounded-full"
                src={imageSrc}
                alt="Profile"
              />
              <div className="mt-4 text-center">
                {/* {imageSrc == blankImage && ( */}
                <button
                  onClick={triggerFileInput}
                  className="px-3 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                >
                  Upload Image
                </button>
                {/* // )} */}
                <input
                  id="fileInput"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden" // Hide the file input
                />
              </div>
            </div>
            <div>
              <p className="pt-3 text-xl font-semibold text-center whitespace-nowrap">
                {user?.name}
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
