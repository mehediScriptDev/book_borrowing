import FeaturedCard from "@/app/components/shared/FeaturedCard";
import books from "../../../../../public/books.json"

const Featured = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl text-center md:text-4xl font-bold mb-4">
        Featured <span className="text-primaryy">Books</span>
      </h1>
      

<div className="grid grid-cols-1 min-[420px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 gap-y-2 lg:gap-4">
    {
        books.slice(0, 4).map(book=>(
            <FeaturedCard book={book} key={book.id}/>
        ))
    }
</div>
      
    </div>
  );
};

export default Featured;
