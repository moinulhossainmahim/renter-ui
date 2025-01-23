import React, { useState } from "react";

const ProfileEdit = ({ user }) => {
  const [nameEdit, setNameEdit] = useState(false);
  const [emailEdit, setEmailEdit] = useState(false);
  const [phoneNumberEdit, setPhoneNumberEdit] = useState(false);

  return (
    <div className="col-span-3">
      <p className="text-3xl font-semibold">Personal Info</p>
      {/* NOTE Name  */}
      <div className="flex items-center justify-between px-10 mt-10">
        <div>
          <p className="mb-1 font-semibold">Full Name</p>
          {nameEdit ? (
            <input
              onChange={(e) => (user.data.user.name = e.target.value)}
              className="px-2 py-1 bg-gray-900 rounded"
              type="text"
              name=""
              defaultValue={user.data.user.name}
              id=""
            />
          ) : (
            <p className="text-sm text-gray-400">{user?.data?.user?.name}</p>
          )}
        </div>
        <div>
          {nameEdit ? (
            <button
              onClick={() => setNameEdit(false)}
              className="px-3 py-2 bg-gray-900 rounded-sm hover:bg-gray-800"
            >
              Save
            </button>
          ) : (
            <button
              onClick={() => setNameEdit(true)}
              className="px-3 py-2 bg-gray-900 rounded-sm hover:bg-gray-800"
            >
              Edit
            </button>
          )}
        </div>
      </div>
      <div className="my-5 bg-gray-900 border-b-[1px] border-gray-700" />
      {/* NOTE Email */}
      <div className="flex items-center justify-between px-10 mt-10">
        <div>
          <p className="mb-1 font-semibold">Email</p>
          {emailEdit ? (
            <input
              onChange={(e) => (user.data.user.email = e.target.value)}
              className="px-2 py-1 bg-gray-900 rounded"
              type="email"
              name=""
              defaultValue={user.data.user.email}
              id=""
            />
          ) : (
            <p className="text-sm text-gray-400">{user?.data?.user?.email}</p>
          )}
        </div>
        <div>
          {emailEdit ? (
            <button
              onClick={() => setEmailEdit(false)}
              className="px-3 py-2 bg-gray-900 rounded-sm hover:bg-gray-800"
            >
              Save
            </button>
          ) : (
            <button
              onClick={() => setEmailEdit(true)}
              className="px-3 py-2 bg-gray-900 rounded-sm hover:bg-gray-800"
            >
              Edit
            </button>
          )}
        </div>
      </div>
      <div className="my-5 bg-gray-900 border-b-[1px] border-gray-700" />
      {/* NOTE Phone Number */}
      <div className="flex items-center justify-between px-10 mt-10">
        <div>
          <p className="mb-1 font-semibold">Phone Number</p>
          {phoneNumberEdit ? (
            <input
              onChange={(e) => (user.data.user.phone_number = e.target.value)}
              className="px-2 py-1 bg-gray-900 rounded"
              type="number"
              name=""
              defaultValue={user.data.user.phone_number}
              id=""
            />
          ) : (
            <p className="text-sm text-gray-400">
              {user?.data?.user?.phone_number}
            </p>
          )}
        </div>
        <div>
          {phoneNumberEdit ? (
            <button
              onClick={() => setPhoneNumberEdit(false)}
              className="px-3 py-2 bg-gray-900 rounded-sm hover:bg-gray-800"
            >
              Save
            </button>
          ) : (
            <button
              onClick={() => setPhoneNumberEdit(true)}
              className="px-3 py-2 bg-gray-900 rounded-sm hover:bg-gray-800"
            >
              Edit
            </button>
          )}
        </div>
      </div>
      <div className="my-5 bg-gray-900 border-b-[1px] border-gray-700" />
    </div>
  );
};

export default ProfileEdit;
