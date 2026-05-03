"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import Swal from "sweetalert2";

const UpdateProfile = () => {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: session?.user?.name || "",
      image: session?.user?.image || "",
    },
  });

  const onSubmit = async (data) => {
    const { error } = await authClient.updateUser({
      name: data.name,
      image: data.image,
    });

    if (error) {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: error.message || "Update failed!",
        iconColor: "#f97316",
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Updated!",
      text: "Profile updated successfully!",
      iconColor: "#f97316",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => router.push("/myProfile"));
  };

  return (
    <section className="min-h-screen py-12 px-4 bg-base-200">
      <div className="max-w-lg mx-auto">
        <div className="bg-base-100 border border-base-200 rounded-2xl overflow-hidden">

          {/* Banner */}
          <div className="h-20 bg-linear-to-r from-primaryy to-orange-400 relative">
            <div className="avatar absolute -bottom-8 left-6">
              <div className="w-16 rounded-full ring ring-white">
                <img
                  src={session?.user?.image || `https://api.dicebear.com/7.x/initials/svg?seed=${session?.user?.name}`}
                  alt={session?.user?.name}
                />
              </div>
            </div>
          </div>

          <div className="pt-12 px-6 pb-6">
            <h2 className="text-xl font-bold mb-1">Update Profile</h2>
            <p className="text-sm text-base-content/60 mb-6">
              Update your name and profile photo
            </p>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control flex flex-col gap-2 mb-4">
                <label className="label">
                  <span className="label-text text-xs font-medium">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="input input-bordered input-sm w-full focus:outline-none focus:border-primaryy"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <p className="text-xs text-red-500">{errors.name.message}</p>
                )}
              </div>

              <div className="form-control flex flex-col gap-2 mb-6">
                <label className="label">
                  <span className="label-text text-xs font-medium">Photo URL</span>
                </label>
                <input
                  type="url"
                  placeholder="https://your-photo-url.com"
                  className="input input-bordered input-sm w-full focus:outline-none focus:border-primaryy"
                  {...register("image")}
                />
                <p className="text-xs text-base-content/50">
                  Paste a direct image link for your profile photo
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-block bg-primaryy text-white border-none rounded-full mb-3"
              >
                {isSubmitting ? (
                  <span className="loading loading-spinner loading-sm"></span>
                ) : (
                  "Update Information"
                )}
              </button>

              <button
                type="button"
                onClick={() => router.back()}
                className="btn btn-block btn-outline rounded-full"
              >
                Cancel
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default UpdateProfile;