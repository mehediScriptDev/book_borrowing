import React from "react";

const FeaturedCard = ({book}) => {
    const { title, author, description, category, available_quantity, image_url } = book;
  return (
    <div>
      <div className="card w-auto  bg-base-100 shadow-sm border border-base-200">
        <figure className="relative">
          <img
            src={image_url}
            alt={title}
            className="w-full h-48 object-cover"
          />
          <span className="badge rounded-tl-none border-none rounded-tr-none bg-primaryy text-white absolute top-0 left-3 text-xs">
            {category}
          </span>
        </figure>
        <div className="card-body p-5">
          <h2 className="card-title line-clamp-1 text-base font-medium">
            {title}
          </h2>

          <p className="text-sm text-base-content/60 -mt-2">
            by <span className="font-semibold">{author}</span>
          </p>

          <p className="text-sm text-base-content/60 line-clamp-2 lg:leading-relaxed">
                            {description}
          </p>
          <div className="divider my-1"></div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-base-content/60">
              Available:{" "}
              <span className="font-medium text-red-300">{available_quantity} copies</span>
            </span>
            <button className="btn btn-outline btn-sm bg-primaryy text-white rounded-full">
              Borrow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
