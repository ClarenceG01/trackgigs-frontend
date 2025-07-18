import  { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import { errorToast, successToast } from "../utils/toasts";
import { useMutation } from "@tanstack/react-query";
import { verifyEmail, resendOtp } from "../api/api";


export default function VerifyEmail() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [otp, setOtp] = useState("");
  const { register, handleSubmit } = useForm();
  const verifyMutation = useMutation({
    mutationFn: verifyEmail,
    onError:(error)=>{
      errorToast(error.message);
    },
    onSuccess: () => {
      successToast(`Email ${email} verified successfully!`, "verify-success");
      navigate("/login");
    },
  });
  const resendOtpMutation = useMutation({
    mutationFn: resendOtp,
    onError: (error) => {
      errorToast(error.message);
    },
    onSuccess: () => {
      successToast("OTP resent successfully!", "otp-resend-success");
    },
  });
  const email = state?.email || "";
  const onSubmit = async (data) => {
    if (!data.otp) {
      return errorToast("OTP is required", "empty-otp");
    }
    verifyMutation.mutate({ email, otp: data.otp });
  };
  const handleResendOtp = async (email) => {
     resendOtpMutation.mutate(email);
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
          {...register("otp")}
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />
        <button
          type="submit"
          className="w-full bg-green text-white p-2 rounded hover:bg-green-dark transition-colors cursor-pointer"
        >
          {verifyMutation.isPending ? "Verifying..." : "Verify Email"}
        </button>
        {/* resend OTP span link */}
        <p
          onClick={() => handleResendOtp(email)}
          className="text-blue-500 cursor-pointer hover:underline text-center mt-4"
        >
          {resendOtpMutation.isPending ? "Resending OTP..." : "Resend OTP"}
        </p>
      </form>
    </div>
  );
}
