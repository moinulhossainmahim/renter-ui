import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { login } from "../../utils/api"; // Import the login function

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { email, password } = data;

    try {
      const response = await login(email, password);
      localStorage.setItem("isLoggedIn", true);
      if (response?.data?.token?.access_token && response?.data?.token?.refresh_token) {
        localStorage.setItem(
          'access_token',
          response.data.token.access_token,
        );
        localStorage.setItem(
          'refresh_token',
          response.data.token.refresh_token,
        );
        navigate('/properties');
        toast.success("Login Successfully", {
          position: "top-center",
        }, { autoClose: 1000 });
      }
    } catch (error) {
      const errorMessage = error.message || "Login failed. Please check your credentials.";
      toast.error(errorMessage, {
        position: "top-center",
      });
    }
  };

  return (
    <div className="flex flex-col justify-center min-h-screen py-6 bg-gray-100 sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 transform -skew-y-6 shadow-lg bg-gradient-to-r from-cyan-400 to-sky-500 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">
                Login to your account
                <span className="font-extrabold text-blue-600"></span>
              </h1>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="divide-y divide-gray-200"
            >
              <div className="py-8 space-y-4 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="email"
                    name="email"
                    type="text"
                    defaultValue={'moinul12@gmail.com'}
                    className="w-full h-10 text-gray-900 placeholder-transparent border-b-2 border-gray-300 peer focus:outline-none focus:borer-rose-600"
                    placeholder="Enter email address"
                    {...register("email", { required: true })}
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Email Address
                  </label>
                </div>
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="password"
                    name="password"
                    type="password"
                    defaultValue={'Moinul123@'}
                    className="w-full h-10 text-gray-900 placeholder-transparent border-b-2 border-gray-300 peer focus:outline-none focus:borer-rose-600"
                    placeholder="Enter password"
                    {...register("password", { required: true })}
                  />
                  <label
                    htmlFor="password"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Password
                  </label>
                </div>
                <div className="relative">
                  <button
                    className="px-2 py-1 text-white rounded-md bg-cyan-500"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div>
            Don't have an account?{" "}
            <Link to={"/registration"} className="font-semibold text-blue-600">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;