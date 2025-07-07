// verify 6 digit otp ui only, no logic
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import { errorToast, successToast } from "../utils/toasts";

export default function VerifyEmail() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [otp, setOtp] = useState("");
  const { register, handleSubmit } = useForm();
  const email = state?.email || "";
  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/users/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, otp: data.otp.trim() }),
      });

      if (response.ok) {
        successToast("Email verified successfully", "verify-success");
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } else {
        const errorData = await response.json();
        errorToast(errorData.message || "Verification failed", "verify-error");
      }
    } catch (error) {
      console.error(error);
      errorToast("Something went wrong", "verify-error");
    }
  };
  const handleResendOtp = async (email) => {
    try {
      setOtp("");
      const response = await fetch("/api/users/resend-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        successToast(
          "OTP resent successfully. Check your email.",
          "resend-success"
        );
      } else {
        const errorData = await response.json();
        errorToast(errorData.message || "Failed to resend OTP", "resend-error");
      }
    } catch (error) {
      console.error(error);
      errorToast("Something went wrong", "resend-error");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Verify Your Email</h1>
      <div className="text-gray-600 mb-4">
        Please enter the 6-digit OTP sent to your email
        <p className="font-bold text-center">{email}</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm">
        <input
          type="text"
          placeholder="Enter your OTP"
          {...register("otp", { required: true })}
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />
        <button
          type="submit"
          className="w-full bg-green text-white p-2 rounded hover:bg-green-dark transition-colors"
        >
          Verify
        </button>
        {/* resend OTP span link */}
        <p
          onClick={() => handleResendOtp(email)}
          className="text-blue-500 cursor-pointer hover:underline text-center mt-4"
        >
          Resend OTP
        </p>
      </form>
    </div>
  );
}
