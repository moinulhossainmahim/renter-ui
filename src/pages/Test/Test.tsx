import React from "react";

import { useForm } from "react-hook-form";

type FormData = {
  features: string[];
};
const Test = () => {
  const { register, handleSubmit } = useForm<FormData>();

  const features = ["Balcony", "Elevator", "Kitchen", "Wifi", "Pool"];

  const onSubmit = (data: FormData) => {
    console.log(data.features); // Logs the selected features as an array
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-sm mx-auto space-y-4 "
    >
      {/* Multi-Select Dropdown */}
      <label
        htmlFor="features"
        className="block text-sm font-medium text-gray-700"
      >
        Features
      </label>
      <select
        id="features"
        {...register("features")}
        // multiple
        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        {features.map((feature) => (
          <option key={feature} value={feature}>
            {feature}
          </option>
        ))}
      </select>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Submit
      </button>
    </form>
  );
};

export default Test;
