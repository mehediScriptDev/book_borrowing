"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import { signIn } from "@/lib/auth-client";

const Login = () => {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await signIn.email({
      email: form.email,
      password: form.password,
    });
    if (error) return setError(error.message);
    router.push("/");
  };

  const handleGoogle = async () => {
    await signIn.social({ provider: "google", callbackURL: "/" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="bg-base-100 border border-base-200 rounded-2xl p-8 w-full max-w-md">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-1">Welcome back</h2>
          <p className="text-sm text-base-content/60">
            Sign in to your account
          </p>
        </div>

        {error && <div className="alert alert-error text-sm mb-4">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-control flex flex-col gap-2 mb-3">
            <label className="label">
              <span className="label-text text-xs font-medium">Email</span>
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="input input-bordered w-full input-sm focus:outline-none focus:border-primaryy"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>
          <div className="form-control mb-5 flex flex-col gap-2 w-full">
            <label className="label">
              <span className="label-text text-xs font-medium">Password</span>
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="input w-full input-bordered input-sm focus:outline-none focus:border-primaryy"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-block bg-primaryy text-white border-none rounded-full mb-2"
          >
            Login
          </button>
        </form>

        <div className="divider text-xs">or</div>

        <button className="btn w-full rounded-full mb-2 bg-white text-black border-[#e5e5e5]">
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
          Don't have an account?{" "}
          <Link href="/register" className="text-primaryy font-medium">
            Register
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
