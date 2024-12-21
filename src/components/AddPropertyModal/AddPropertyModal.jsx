import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddPropertyModal = ({ opened, onClose }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [propertyDetails, setPropertyDetails] = useState({
    title: "",
    description: "",
    price: 0,
    country: "",
    city: "",
    address: "",
    image: null,
    facilities: {
      bedrooms: 0,
      parkings: 0,
      bathrooms: 0,
    },
    email: "",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div opened={opened} closeOnClickOutside>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full px-8 pt-6 pb-8 mb-4 bg-white rounded"
      >
        <div className="flex justify-between">
          {/* 1st Column  */}
          <div>
            {/* title  */}
            <div className="relative mb-2">
              <input
                autoComplete="off"
                type="text"
                className="w-full h-10 mb-2 text-gray-900 placeholder-transparent border-b-2 border-gray-200 peer focus:outline-none focus:borer-rose-600"
                placeholder="Title"
                {...register("title", { required: true })}
              />
              <label
                htmlFor="title"
                className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
              >
                Title
              </label>
            </div>
            {/* price */}
            <div className="relative mb-2">
              <input
                autoComplete="off"
                type="number"
                className="w-full h-10 mb-2 text-gray-900 placeholder-transparent border-b-2 border-gray-200 peer focus:outline-none focus:borer-rose-600"
                placeholder="Price"
                {...register("price", { required: true })}
              />
              <label
                htmlFor="price"
                className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
              >
                Price
              </label>
            </div>
            {/* streetAddress */}
            <div className="relative mb-2">
              <input
                autoComplete="off"
                type="text"
                className="w-full h-10 mb-2 text-gray-900 placeholder-transparent border-b-2 border-gray-200 peer focus:outline-none focus:borer-rose-600"
                placeholder="Price"
                {...register("streetAddress", { required: true })}
              />
              <label
                htmlFor="streetAddress"
                className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
              >
                Street Address
              </label>
            </div>
          </div>
          {/* 2nd Column  */}
          <div>
            {/* description */}
            <div className="relative mb-2">
              <textarea
                autoComplete="off"
                type="text"
                className="w-full h-24 text-gray-900 placeholder-transparent border-b-2 border-gray-200 peer focus:outline-none focus:borer-rose-600"
                placeholder="Description"
                {...register("description", { required: true })}
              />
              <label
                htmlFor="description"
                className="absolute left-0 -top-3.5  text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
              >
                Description
              </label>
            </div>
            {/*city*/}
            <div className="relative mb-2">
              <input
                autoComplete="off"
                type="text"
                className="w-full h-10 mb-2 text-gray-900 placeholder-transparent border-b-2 border-gray-200 peer focus:outline-none focus:borer-rose-600"
                placeholder="Price"
                {...register("city", { required: true })}
              />
              <label
                htmlFor="city"
                className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
              >
                City
              </label>
            </div>
            {/*state*/}
            <div className="relative mb-2">
              <input
                autoComplete="off"
                type="text"
                className="w-full h-10 mb-2 text-gray-900 placeholder-transparent border-b-2 border-gray-200 peer focus:outline-none focus:borer-rose-600"
                placeholder="Price"
                {...register("state", { required: true })}
              />
              <label
                htmlFor="state"
                className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
              >
                State
              </label>
            </div>
          </div>
        </div>

        <div className="mb-6 text-center">
          <button
            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Register Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPropertyModal;
