"use client";
import Swal from "sweetalert2";
import { BookOpen } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { useParams, useRouter } from "next/navigation";
import books from "../../../../../public/books.json";


const BookDetails = () => {
  const router =useRouter();
  const { data: session } = authClient.useSession();
  const params = useParams();
  const book = books.find((book) => book.id == params.id);
  const {
    title,
    author,
    description,
    category,
    available_quantity,
    image_url,
  } = book;

 const handleBorrow = () => {
    if (!session) {
      router.push("/login"); 
      return;
    }
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Borrow request submitted!",
      iconColor: "#f97316",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <section className="py-8 px-4 container mx-auto">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* book pic */}
          <div className="w-full md:w-56 shrink-0">
            <div className="bg-base-100 rounded-2xl border border-base-200 overflow-hidden">
              <img
                src={image_url}
                alt={title}
                className="w-full h-72 object-cover"
              />
            </div>
            <div className="mt-3 bg-green-100 rounded-xl px-3 py-2 flex items-center gap-2">
              <span className="text-green-700 text-xs font-medium">
                {available_quantity} copies available
              </span>
            </div>
          </div>

          {/* right side */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="badge badge-info text-xs">{category}</span>
            </div>

            <h1 className="text-3xl font-bold mb-1">{title}</h1>
            <p className="text-base-content/60 mb-5">
              by <span className="text-base-content font-medium">{author}</span>
            </p>

            <div className="border-t border-base-200 pt-4 mb-5">
              <p className="text-sm text-base-content/70 leading-relaxed">
                {description}
              </p>
            </div>

            {/* grid layout */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-base-200 border border-base-200 rounded-xl p-3">
                <p className="text-xs text-base-content/50 mb-1">Category</p>
                <p className="text-sm font-medium">{category}</p>
              </div>
              <div className="bg-base-200 border border-base-200 rounded-xl p-3">
                <p className="text-xs text-base-content/50 mb-1">Available</p>
                <p className="text-sm font-medium text-green-600">
                  {available_quantity} copies
                </p>
              </div>
              <div className="bg-base-200 border border-base-200 rounded-xl p-3">
                <p className="text-xs text-base-content/50 mb-1">Author</p>
                <p className="text-sm font-medium">{author}</p>
              </div>
              <div className="bg-base-200 border border-base-200 rounded-xl p-3">
                <p className="text-xs text-base-content/50 mb-1">Format</p>
                <p className="text-sm font-medium">Paperback</p>
              </div>
            </div>

            <div>
              <button onClick={handleBorrow} className="btn w-auto btn-block bg-primaryy text-white border-none rounded-full gap-2">
                <BookOpen size={16} />
                Borrow this book
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
