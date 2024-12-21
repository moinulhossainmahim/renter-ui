import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../../../public/hero-image.png";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
const Registration = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { firstName, lastName, email, password, confirmPassword } =
      data || {};
    if (password === confirmPassword) {
      toast("Your Account Is Created", {
        position: "top-center",
      });
    } else {
      toast("Password Did Not Match ", {
        position: "top-center",
      });
    }
  };
  return (
    <div className="h-full bg-gray-900">
      <div className="mx-auto h-[92vh]">
        <div className="flex justify-center px-6 py-12">
          <div className="flex w-full xl:w-3/4 lg:w-11/12">
            <div
              className="hidden w-full h-auto bg-gray-400 bg-cover rounded-l-lg dark:bg-gray-800 lg:block lg:w-5/12"
              style={{
                backgroundImage: `url(${heroImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            {/* <!-- Col --> */}
            <div className="w-full lg:w-7/12  bg-[#0b0a1a] p-5 rounded-lg lg:rounded-l-none">
              <h3 className="py-4 text-2xl font-semibold text-center text-gray-800 dark:text-white">
                Create an Account!
              </h3>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="px-8 pt-6 pb-8 mb-4 dark:bg-[#131110] rounded"
              >
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                      htmlFor="firstName"
                    >
                      First Name
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="firstName"
                      type="text"
                      placeholder="First Name"
                      {...register("firstName", { required: true })}
                    />
                  </div>
                  <div className="md:ml-2">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                      htmlFor="lastName"
                    >
                      Last Name
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="lastName"
                      type="text"
                      placeholder="Last Name"
                      {...register("lastName", { required: true })}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Email"
                    {...register("email", { required: true })}
                  />
                </div>
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="password"
                      placeholder="******************"
                      {...register("password", { required: true })}
                    />
                  </div>
                  <div className="md:ml-2">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                      htmlFor="c_password"
                    >
                      Confirm Password
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="c_password"
                      placeholder="******************"
                      {...register("confirmPassword", { required: true })}
                    />
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
                <hr className="mb-6 border-t" />

                <div className="text-center">
                  <Link
                    to="/login"
                    className="inline-block text-sm text-blue-500 align-baseline dark:text-blue-500 hover:text-blue-800"
                  >
                    Already have an account? Login!
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
