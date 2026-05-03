"use client";

import React from "react";
import FeaturedCard from "@/app/components/shared/FeaturedCard";
import CategorySidebar from "@/app/(main)/components/home/CategorySidebar";
import { animated, useSpring } from "@react-spring/web";



const AllBooks = () => {
  const animation = useSpring({
    from: { opacity: 0, y: 40 },
    to: { opacity: 1, y: 0 },
    config: { tension: 12, friction: 14 },
  });
  const [books, setBooks] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [activeCategory, setActiveCategory] = React.useState(null);

  React.useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch("/books.json");
      const data = await response.json();
      setBooks(data);
    };
    fetchBooks();
  }, []);

  const categories = [...new Set(books.map((book) => book.category))];

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory ? book.category === activeCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-base-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Explore Our <span className="text-primaryy">Collection</span>
          </h1>
          <p className="text-base-content/60">
            Browse and discover thousands of books from various genres
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search by book title or author..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input input-bordered w-full bg-white focus:outline-none focus:border-primaryy shadow-md"
          />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <CategorySidebar
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </div>

          {/* Books Grid */}
          <animated.div style={animation} className="lg:col-span-3">
            {filteredBooks.length > 0 ? (
              <div className="grid grid-cols-1 min-[420px]:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
                {filteredBooks.map((book) => (
                  <FeaturedCard book={book} key={book.id} />
                ))}
              </div>
            ) : (
              <div className="col-span-full flex items-center justify-center min-h-96">
                <div className="text-center">
                  <div className="text-6xl mb-4">📚</div>
                  <h3 className="text-2xl font-bold mb-2">No Books Found</h3>
                  <p className="text-base-content/60">
                    Try adjusting your search or filters
                  </p>
                </div>
              </div>
            )}
          </animated.div>
        </div>
      </div>
    </div>
  );
};

export default AllBooks;