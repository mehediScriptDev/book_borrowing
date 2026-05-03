
"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const LogOut = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/login");
    router.refresh();
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 cursor-pointer text-white rounded-full px-4 py-1 active:scale-95"
    >
      Logout
    </button>
  );
};

export default LogOut;