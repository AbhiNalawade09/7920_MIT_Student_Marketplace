"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    id: 1,
    name: "Ankur Soni",
    image: "https://media.licdn.com/dms/image/v2/D5603AQHnesEbSxxmuQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718601279143?e=2147483647&v=beta&t=kOMqm9SkwNmI0EAniHmJxM4IXtRwJJloOMh-_vH5z44",
    text: "MIT Marketplace has completely changed my student life! Their curated packages are a lifesaver.",
  },
  {
    id: 2,
    name: "Yogesh Bhat",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMXuZdd_XPIyFuZw42OvO0qEH6p8vRYdvgzg&s",
    text: "I love the exclusive discounts and the variety of options available. Highly recommend!",
  },
  {
    id: 3,
    name: "Aman Vats",
    image: "https://media.licdn.com/dms/image/v2/D5603AQEovKWQj7Z8RQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1731220514197?e=1742428800&v=beta&t=dy1ixSFuCS7zv68Bs2u87V0XCMhkl7pQsqeZuGXlmfQ",
    text: "The community-driven approach of MIT Marketplace is what sets them apart. Amazing service!",
  },
  {
    id: 4,
    name: "Disha Jain",
    image: "https://media.licdn.com/dms/image/v2/D5603AQHaGdwbegnTWg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1695804260836?e=1742428800&v=beta&t=JDTOUa0B7SqKBDFlEwI8ysSfKYzId5rpgejLbYJyUj8",
    text: "Great quality, excellent customer support, and affordable prices. Best experience ever!",
  },
];

const CommunityReviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="bg-gray-100 py-12 px-6 sm:px-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-8">
        Community Reviews
      </h2>

      <div className="max-w-4xl mx-auto">
        <Slider {...settings}>
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >

            {/* <a href="https://www.linkedin.com/in/ankur-soni-blogger/" target="_blank"> */}
              <img
                src={review.image}
                alt={review.name}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              {/* </a> */}

              <p className="text-gray-700 mb-4">"{review.text}"</p>
              <h4 className="text-lg font-semibold text-gray-800">
                {review.name}
              </h4>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CommunityReviews;