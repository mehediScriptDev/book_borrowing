"use client";
import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import { error } from "better-auth/api";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
// import { signUp, signIn } from "@/lib/auth-client";

const Register = () => {
  const showError = (message) => {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Oops!",
      text: message,
      iconColor: "#f97316",
      showConfirmButton: false,
      timer: 2000,
    });
  };
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const { data: res, error } = await authClient.signUp.email({
      name: data.name,
      email: data.email,
      password: data.password,
      image: data.image,
      callbackURL: "/",
    });
    if (error) return showError(error.message || "Registration failed!");
    router.push("/login");
  };
  return (
    <section className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="bg-base-100 border border-base-200 rounded-2xl p-8 w-full max-w-md">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-1">Create account</h2>
          <p className="text-sm text-base-content/60">
            Join MangoBookish today
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control flex flex-col gap-2 mb-3">
            <label className="label">
              <span className="label-text text-xs font-medium">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your full name"
              className="input input-bordered w-full input-sm focus:outline-none focus:border-primaryy"
              {...register("name", { required: "Name is required" })}
              required
            />
            {errors.name && (
              <div className="alert alert-error text-sm mb-4">
                {errors.name.message}
              </div>
            )}
          </div>
          <div className="form-control flex flex-col gap-2 mb-3">
            <label className="label">
              <span className="label-text text-xs font-medium">Email</span>
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="input input-bordered w-full input-sm focus:outline-none focus:border-primaryy"
              {...register("email", { required: "Email is required" })}
              required
            />
            {errors.email && (
              <div className="alert alert-error text-sm mb-4">
                {errors.email.message}
              </div>
            )}
          </div>
          <div className="form-control flex flex-col gap-2 mb-3">
            <label className="label">
              <span className="label-text text-xs font-medium">Photo URL</span>
            </label>
            <input
              type="url"
              placeholder="https://your-photo-url.com"
              className="input input-bordered w-full input-sm  focus:outline-none focus:border-primaryy"
              {...register("image", { required: "Photo URL is required" })}
            />
            {errors.image && (
              <div className="alert alert-error text-sm mb-4">
                {errors.image.message}
              </div>
            )}
          </div>
          <div className="form-control flex flex-col gap-2 mb-5">
            <label className="label">
              <span className="label-text text-xs font-medium">Password</span>
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="input input-bordered w-full input-sm focus:outline-none focus:border-primaryy"
              {...register("password", { required: "Password is required" })}
              required
            />
            {errors.password && (
              <div className="alert alert-error text-sm mb-4">
                {errors.password.message}
              </div>
            )}
          </div>
          <button
            type="submit"
            className="btn btn-block bg-primaryy text-white border-none rounded-full mb-2"
          >
            Register
          </button>
        </form>

        <div className="divider text-xs">or</div>

        <button className="btn mb-4 rounded-full w-full bg-white text-black border-[#e5e5e5]">
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>

        <p className="text-center text-xs text-base-content/60">
          Already have an account?{" "}
          <Link href="/login" className="text-primaryy font-medium">
            Login
          </Link>
          
        </p>
      </div>
    </section>
  );
};

export default Register;
