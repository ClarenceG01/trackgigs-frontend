import { errorToast, successToast } from "../utils/toasts";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
export default function Signup() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const onSubmit = async (data) => {
    if (data.password !== data.cpassword) {
      return errorToast("Password must match", "not-matching");
    }
    try {
      const response = await fetch("/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        successToast("Account created successfully", "signup-success");
        setTimeout(() => {
          navigate("/verify", { state: { email: data.email } });
        }, 3000);
      } else {
        const errorData = await response.json();
        errorToast(errorData.message || "Something went wrong", "signup-error");
      }
    } catch (error) {
      console.error(error);
      return errorToast("Something went wrong", "signup-error");
    }
  };
  return (
    <div className="flex flex-col justify-center md:flex-row h-screen ">
      <div className="bg-green md:w-1/3 hidden md:block"></div>
      <div className="w-full md:w-2/3 flex flex-col justify-center">
        <div className="w-full md:w-2/3 mx-auto p-6 rounded-lg shadow-none md:shadow-md">
          <h1 className="font-logo text-green font-bold text-2xl md:text-3xl leading-6 text-center">
            TrackGigs
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label htmlFor="username" className="block mb-1 font-medium  ">
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="Enter your username"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
                {...register("username", {
                  required: true,
                })}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1 font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
                {...register("email", {
                  required: true,
                })}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block mb-1 font-medium">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
                  {...register("password")}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? "🫣" : "👁️"}
                </button>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="cpassword" className="block mb-1 font-medium">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  id="cpassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
                  {...register("cpassword")}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword((v) => !v)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  aria-label={
                    showConfirmPassword ? "Hide password" : "Show password"
                  }
                >
                  {showConfirmPassword ? "🫣" : "👁️"}
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-green text-white rounded-md font-bold hover:bg-green/90 transition-colors duration-300 mb-4 cursor-pointer"
            >
              Sign Up
            </button>
            <div className="text-center text-gray-500 mb-4">
              Already have an account?{" "}
              <Link to="/login" className="text-green font-semibold">
                Sign In
              </Link>
            </div>
            <div className="text-center my-4 text-gray-400">or</div>
            <button
              type="button"
              className="w-full py-2 bg-white border border-gray-300 rounded-md font-semibold flex items-center justify-center gap-2.5 hover:bg-gray-50 transition duration-300 cursor-pointer"
            >
              <FcGoogle className="text-2xl" />
              <span className="text-gray-700">Sign in with Google</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
