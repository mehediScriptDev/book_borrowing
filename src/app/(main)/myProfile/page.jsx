import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

const MyProfile = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) redirect("/login");

  const { name, email, image, createdAt } = session.user;

  const memberSince = new Date(createdAt).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <section className="min-h-screen py-12 px-4 bg-base-200">
      <div className="max-w-xl mx-auto">
        <div className="bg-base-100 border border-base-200 rounded-2xl overflow-hidden">

          {/* Cover Banner */}
          <div className="h-24 bg-linear-to-r from-primaryy to-orange-400 relative">
            <div className="avatar absolute -bottom-9 left-6">
              <div className="w-18 rounded-full ring ring-white ring-offset-0">
                <img
                  src={image || `https://api.dicebear.com/7.x/initials/svg?seed=${name}`}
                  alt={name}
                />
              </div>
            </div>
          </div>

          <div className="pt-12 px-6 pb-6">
            <div className="flex items-start justify-between flex-wrap gap-3 mb-5">
              <div>
                <h2 className="text-xl font-bold">{name}</h2>
                <p className="text-sm text-base-content/60">{email}</p>
              </div>
              <Link
                href="/updateProfile"
                className="bg-primaryy active:scale-105 text-white text-sm rounded-full px-4 py-2"
              >
                Update Profile
              </Link>
            </div>

            <div className="divider my-0 mb-4"></div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-base-200 rounded-xl p-3">
                <p className="text-xs text-base-content/50 mb-1">Full Name</p>
                <p className="text-sm font-medium">{name}</p>
              </div>
              <div className="bg-base-200 rounded-xl p-3">
                <p className="text-xs text-base-content/50 mb-1">Email</p>
                <p className="text-sm font-medium truncate">{email}</p>
              </div>
              <div className="bg-base-200 rounded-xl p-3">
                <p className="text-xs text-base-content/50 mb-1">Member Since</p>
                <p className="text-sm font-medium">{memberSince}</p>
              </div>
              <div className="bg-base-200 rounded-xl p-3">
                <p className="text-xs text-base-content/50 mb-1">Books Borrowed</p>
                <p className="text-sm font-medium text-primaryy">Unknown</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MyProfile;