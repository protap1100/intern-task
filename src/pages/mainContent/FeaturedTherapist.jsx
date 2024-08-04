import { useState, useEffect } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const FeaturedTherapist = () => {
  const [therapists, setTherapists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("Therapist.json")
      .then((res) => res.json())
      .then((data) => {
        setTherapists(data);
        setLoading(false);
      })
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Swiper
    className="mx-20"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      navigation
      loop={true}
      scrollbar={{ draggable: true }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1536: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {therapists.map((therapist) => (
        <SwiperSlide className="mx-10 my-6" key={therapist.id}>
          <div className="border border-gray-400 rounded-2xl shadow-xl">
            <div className="p-3">
              <img
                className="w-full h-40 object-cover rounded-t-2xl"
                src={therapist.imgUrl}
                alt={therapist.name}
              />
              <h2 className="text-xl font-bold mt-2">{therapist.name}</h2>
              <p className="mt-2">{therapist.profession}</p>
              <p className="mt-2">{therapist.address}</p>
            </div>
            <button className="p-2 w-full mt-3 rounded-b-xl text-white text-center bg-blue-300 hover:bg-blue-400">
              See Details
            </button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FeaturedTherapist;
