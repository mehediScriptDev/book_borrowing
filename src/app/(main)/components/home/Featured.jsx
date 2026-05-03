"use client"
import FeaturedCard from "@/app/components/shared/FeaturedCard";
import books from "../../../../../public/books.json"
import { animated, useSpring } from "@react-spring/web";

const Featured = () => {
  const animation = useSpring({
    from: { opacity: 0, y: 400 },
    to: { opacity: 1, y: 0 },
    config: { tension: 12, friction: 18 },
  });
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl text-center md:text-4xl font-bold mb-2">
        Featured <span className="text-primaryy">Books</span>
      </h1>
      <p className="text-center text-base text-gray-600 mb-6">
        Most borrowed books of the month
      </p>

<animated.div style={animation} className="grid grid-cols-1 min-[420px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 gap-y-2 lg:gap-4">
    {
        books.slice(0, 4).map(book=>(
            <FeaturedCard book={book} key={book.id}/>
        ))
    }
</animated.div>
      
    </div>
  );
};

export default Featured;
