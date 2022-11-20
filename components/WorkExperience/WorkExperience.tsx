import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

import WorkExperienceCard from './Card/WorkExperienceCard';
import { IExperience } from '../../typings';

type Props = {
  experiences: IExperience[];
};

export default function WorkExperience({ experiences }: Props) {
  return (
    <section id="experience" className="snap-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-screen m-auto flex items-center p-4 md:p-0 max-w-xl">
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          grabCursor={true}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="min-h-[300px] max-h-[700px] h-full flex justify-center items-center">
          {experiences.map((experience) => (
            <SwiperSlide key={experience._id}>
              <WorkExperienceCard experience={experience} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}
