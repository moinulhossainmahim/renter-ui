import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useQueryClient } from "react-query";
import useCreateProperty from "../../hooks/useCreateProperty";
import { useNavigate } from 'react-router-dom';

const AddPropertyModal = ({ opened, onClose }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [images, setImages] = useState([]);
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const features = ["Balcony", "Elevator", "Kitchen", "Wifi", "Pool"];

  const createProperty = useCreateProperty();

  const {
    register,
    handleSubmit,
    reset,
  } = useForm();

  const handleImageUpdate = (files) => {
    const newImages = Array.from(files);
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const handleRemoveImage = (indexToRemove) => {
    setImages((prevImages) =>
      prevImages.filter((_, index) => index !== indexToRemove)
    );
  };

  const handleChange = (e) => {
    const options = Array.from(e.target.selectedOptions);
    const values = options.map((option) => option.value);
    const newValues = values.filter((val) => !selectedFeatures.includes(val));

    if (newValues.length > 0) {
      setSelectedFeatures((prev) => [...prev, ...newValues]);
    } else {
      toast.error("You can't select the same feature twice");
    }
  };

  const onSubmit = async (formData) => {
    const propertyData = {
      ...formData,
      bathrooms: Number(formData.bathrooms),
      bedrooms: Number(formData.bedrooms),
      price: Number(formData.price),
      latitude: Number(formData.latitude),
      longitude: Number(formData.longitude),
      postal_code: Number(formData.postal_code),
      images: images,
      features: selectedFeatures,
    };

    createProperty.mutate(propertyData, {
      onSuccess: (response) => {
        toast.success(response?.message);
        reset();
        setImages([]);
        setSelectedFeatures([]);
        onClose?.();
        navigate('/properties');
        queryClient.invalidateQueries('allProperties');
      },
      onError: (error) => {
        toast.error(response?.message);
        console.error('Error creating property:', error);
      },
    });
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
            {/* bedroom  */}
            <div className="relative mb-2">
              <input
                autoComplete="off"
                type="number"
                className="w-full h-10 mb-2 text-gray-900 placeholder-transparent border-b-2 border-gray-200 peer focus:outline-none focus:borer-rose-600"
                placeholder="Title"
                {...register("bedrooms", { required: true })}
              />
              <label
                htmlFor="bedrooms"
                className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
              >
                Bedroom
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
            {/* street_address */}
            <div className="relative mb-2">
              <input
                autoComplete="off"
                type="text"
                className="w-full h-10 mb-2 text-gray-900 placeholder-transparent border-b-2 border-gray-200 peer focus:outline-none focus:borer-rose-600"
                placeholder="Street Address"
                {...register("street_address", { required: true })}
              />
              <label
                htmlFor="street_address"
                className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
              >
                Street Address
              </label>
            </div>
            {/* postal code  */}
            <div className="relative mb-2">
              <input
                autoComplete="off"
                type="number"
                className="w-full h-10 mb-2 text-gray-900 placeholder-transparent border-b-2 border-gray-200 peer focus:outline-none focus:borer-rose-600"
                placeholder="Postal Code"
                {...register("postal_code", { required: true })}
              />
              <label
                htmlFor="postal_code"
                className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
              >
                Postal Code
              </label>
            </div>
            {/* latitude */}
            <div className="relative mb-2">
              <input
                autoComplete="off"
                type="number"
                className="w-full h-10 mb-2 text-gray-900 placeholder-transparent border-b-2 border-gray-200 peer focus:outline-none focus:borer-rose-600"
                placeholder="latitude"
                {...register("latitude", { required: true })}
              />
              <label
                htmlFor="latitude"
                className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
              >
                Latitude
              </label>
            </div>
            {/* feature select  */}
            <div>
              <label
                htmlFor="features"
                className="block text-sm font-medium text-gray-700"
              >
                Features
              </label>
              <select
                id="features"
                // multiple // Allow multiple selections
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={handleChange}
              >
                {features.map((feature) => (
                  <option key={feature} value={feature}>
                    {feature}
                  </option>
                ))}
              </select>
              {/* Display Selected Features */}
              {selectedFeatures.length > 0 && (
                <div style={{ marginTop: "10px" }}>
                  <strong>Selected Features:</strong>
                  <ul>
                    {selectedFeatures.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          {/* 2nd Column  */}
          <div>
            {/* description */}
            <div className="relative mb-2">
              <textarea
                autoComplete="off"
                type="text"
                className="w-full h-24 pt-2 text-gray-900 placeholder-transparent border-b-2 border-gray-200 peer focus:outline-none focus:borer-rose-600"
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
            {/* bathrooms  */}
            <div className="relative mb-2">
              <input
                autoComplete="off"
                type="number"
                className="w-full h-10 mb-2 text-gray-900 placeholder-transparent border-b-2 border-gray-200 peer focus:outline-none focus:borer-rose-600"
                placeholder="Bathroom"
                {...register("bathrooms", { required: true })}
              />
              <label
                htmlFor="bathrooms"
                className="absolute left-0 -top-3.5  text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
              >
                Bathroom
              </label>
            </div>
            {/*city*/}
            <div className="relative mb-2">
              <input
                autoComplete="off"
                type="text"
                className="w-full h-10 mb-2 text-gray-900 placeholder-transparent border-b-2 border-gray-200 peer focus:outline-none focus:borer-rose-600"
                placeholder="City"
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
                placeholder="State"
                {...register("state", { required: true })}
              />
              <label
                htmlFor="state"
                className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
              >
                State
              </label>
            </div>
            {/* longitude */}
            <div className="relative mb-2">
              <input
                autoComplete="off"
                type="text"
                className="w-full h-10 mb-2 text-gray-900 placeholder-transparent border-b-2 border-gray-200 peer focus:outline-none focus:borer-rose-600"
                placeholder="Longitude"
                {...register("longitude", { required: true })}
              />
              <label
                htmlFor="longitude"
                className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
              >
                Longitude
              </label>
            </div>
          </div>
        </div>
        {/* Upload Image  */}
        <div className="w-full p-4 m-auto bg-white rounded-lg ">
          <div className="relative px-5 py-3 border-4 border-gray-300 border-dotted rounded-lg file_upload">
            <div className="flex flex-col mx-auto text-center w-max">
              <label>
                <input
                  onChange={(event) => {
                    handleImageUpdate(event.target.files);
                  }}
                  className="hidden text-sm cursor-pointer w-36"
                  type="file"
                  name="image"
                  id="image"
                  // hidden
                  multiple
                />
                <div className="p-1 px-3 font-semibold text-white bg-blue-700 border border-gray-300 rounded cursor-pointer hover:bg-blue-500">
                  Upload Image
                </div>
              </label>
              {/* Display Uploaded Images */}
              {images.length === 0 ? (
                <p className="font-serif text-sm text-red-500">
                  Your first image is your feature image
                </p>
              ) : (
                <div className="grid grid-cols-9 gap-2 mt-4">
                  {images.map((image, index) => (
                    <div key={index} className="relative">
                      <img
                        src={URL.createObjectURL(image)}
                        // alt={`Uploaded ${index + 1}`}
                        className="w-12 h-12 border rounded-lg"
                      />
                      {/* Rounded X Button */}
                      <button
                        onClick={() => handleRemoveImage(index)}
                        className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 text-white bg-red-500 rounded-full hover:bg-red-700"
                      >
                        &times;
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="mb-6 text-center">
          <button
            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Property
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPropertyModal;
