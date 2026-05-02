const CategorySidebar = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="sticky top-20 h-fit">
      <div className="card bg-base-100 shadow-md border border-base-200">
        <div className="card-body">
          <h2 className="card-title text-lg font-bold">
            <span className="text-primaryy">Filter by</span> Category
          </h2>
          <div className="divider my-2"></div>
          <div className="space-y-2">
            <button
              onClick={() => onCategoryChange(null)}
              className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
                activeCategory === null
                  ? "bg-primaryy text-white font-semibold"
                  : "hover:bg-base-200"
              }`}
            >
              All Books
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
                  activeCategory === category
                    ? "bg-primaryy text-white font-semibold"
                    : "hover:bg-base-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySidebar;