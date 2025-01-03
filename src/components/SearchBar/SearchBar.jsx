import React from "react";
import { useForm } from "react-hook-form";
import { HiLocationMarker } from "react-icons/hi";

const SearchBar = ({ onSearch, defaultValue }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: { searchInput: defaultValue },
  });

  const onSubmit = (data) => {
    onSearch(data.searchInput);
  };

  return (
    <form className="flexCenter search-bar" onSubmit={handleSubmit(onSubmit)}>
      <HiLocationMarker color="var(--blue)" size={25} />
      <input
        placeholder="Search by title/city/country..."
        type="text"
        {...register("searchInput")}
      />
      <button className="button" type="submit">Search</button>
    </form>
  );
};

export default SearchBar;