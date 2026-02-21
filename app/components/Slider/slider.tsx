import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";

function BannerSwiper() {
  return (
    <div className="w-full">

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000 }}
        loop={true}
        speed={800}
        className="w-full h-[252px]"
      >

        <SwiperSlide>
            <div
                className="relative w-full h-[252px] bg-cover bg-center"
                style={{
                backgroundImage: "url('./carousel/bg-about-1920x252.jpg')",
                }}
            >

                <div className="absolute inset-0 flex items-center justify-end px-10 md:px-20 wrapper max-w-[960px]  mx-auto">
                    <div className="max-w-[600px] text-left text-white">

                        <h2 className="text-3xl md:text-5xl font-bold italic uppercase leading-tight">
                            We deliver your <br /> orders on time
                        </h2>

                    </div>
                </div>

            </div>
            </SwiperSlide>



        <SwiperSlide>
            <div
                className="relative w-full h-[252px] bg-cover bg-center"
                style={{
                backgroundImage: "url('./carousel/slide1-1920x253.jpg')",
                }}
            >

                <div className="absolute inset-0 flex items-center justify-end px-10 md:px-20 wrapper max-w-[960px] mx-auto">
                    <div className="max-w-[600px] text-left text-white ">
                        <h2 className="text-2xl md:text-4xl font-bold italic uppercase leading-tight ">
                            Transportation services <br />
                            tailored to your needs
                        </h2>
                    </div>
                </div>

            </div>
        </SwiperSlide>


      </Swiper>
    </div>
  );
}

export default BannerSwiper;
