import { useEffect, useState } from "react";
import location from "../../assets/images/Location.png";


const FeaturedTestimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("testimonial.json")
      .then((res) => res.json())
      .then((data) => {
        setTestimonials(data);
        setLoading(false);
      });
  }, []);

  const truncateReview = (review, wordLimit) => {
    const words = review.split(" ");
    if (words.length <= wordLimit) return review;
    return `${words.slice(0, wordLimit).join(" ")}...`;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {testimonials.map((test) => {
        const reviewWords = test.review.split(" ");
        const isLongReview = reviewWords.length > 20;
        const displayReview = isLongReview
          ? truncateReview(test.review, 20)
          : test.review;

        return (
          <div
            className="flex flex-col lg:flex-row gap-5 mt-10 p-2 border border-gray-200 rounded-xl"
            key={test.id}
          >
            <div className="flex-shrink-0">
              <img
                className="w-full object-cover rounded"
                src={test.photoUrl}
                alt={test.name}
              />
            </div>
            <div className="flex-grow">
              <h1 className="text-gray-500 flex gap-2 items-center"> <img src={location} alt="" /> {test.location}</h1>
              <h1 className="font-bold text-xl text-black">{test.name}</h1>
              <p>{displayReview}</p>
              {isLongReview && (
                <span className="text-blue-500 hover:underline">Read More</span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FeaturedTestimonial;
