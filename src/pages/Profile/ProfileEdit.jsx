import React from "react";

const ProfileEdit = ({ user }) => {
  return (
    <div className="col-span-3">
      <p className="text-3xl font-semibold">Personal Info</p>
      <div className="flex items-center justify-between px-10 mt-10">
        <div>
          <p className="mb-1 font-semibold">Full Name</p>
          <p className="text-sm text-gray-400">{user.name}</p>
        </div>
        <div>
          <button className="px-3 py-2 bg-gray-900 rounded-sm hover:bg-gray-800">
            Edit
          </button>
        </div>
      </div>
      <div className="my-5 bg-gray-900 border-b-[1px] border-gray-700" />
      <div className="flex items-center justify-between px-10 mt-10">
        <div>
          <p className="mb-1 font-semibold">Email</p>
          <p className="text-sm text-gray-400">{user.email}</p>
        </div>
        <div>
          <button className="px-3 py-2 bg-gray-900 rounded-sm hover:bg-gray-800">
            Edit
          </button>
        </div>
      </div>
      <div className="my-5 bg-gray-900 border-b-[1px] border-gray-700" />
      <div className="flex items-center justify-between px-10 mt-10">
        <div>
          <p className="mb-1 font-semibold">Phone Number</p>
          <p className="text-sm text-gray-400">{user.phoneNumber}</p>
        </div>
        <div>
          <button className="px-3 py-2 bg-gray-900 rounded-sm hover:bg-gray-800">
            Add
          </button>
        </div>
      </div>
      <div className="my-5 bg-gray-900 border-b-[1px] border-gray-700" />
    </div>
  );
};

export default ProfileEdit;
