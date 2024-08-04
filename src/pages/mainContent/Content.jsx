import Banner from "./Banner";
import FeaturedTestimonial from "./FeaturedTestimonial";
import FeaturedTherapist from "./FeaturedTherapist";

const Content = () => {
  return (
    <div>
      <div className="bg-white mx-0 lg:mx-10 rounded-2xl">
        <Banner></Banner>
      </div>
      <h1 className="text-2xl g-white mx-0 lg:mx-10 rounded-2xl my-6">
        Featured Therapist
      </h1>
      <div className="bg-white mx-0 lg:mx-10 rounded-2xl">
        <FeaturedTherapist></FeaturedTherapist>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 mx-0 lg:mx-10 rounded-2xl">
        <div className="flex-1 ">
          <h1 className="text-2xl g-white mx-0 lg:mx-10 rounded-2xl my-6">
            Featured Testimonial
          </h1>
          <div className="bg-white p-5 rounded">
            <FeaturedTestimonial></FeaturedTestimonial>
          </div>
        </div>
        <div className="flex-1">
          <h1 className="text-2xl g-white mx-0 lg:mx-10 rounded-2xl my-6">
            Popular Cities
          </h1>
          <div className="bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Content;
