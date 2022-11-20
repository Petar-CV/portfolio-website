import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

import { IProject } from '../../typings';
import ProjectCard from './Card/ProjectCard';

type Props = {
  projects: IProject[];
};

export default function Projects({ projects }: Props) {
  return (
    <section id="projects" className="snap-start">
      {/* TODO: Implement a generic component for sections with same animation */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-screen relative m-auto flex items-center p-4 md:p-0 max-w-xl">
        {/* TODO: Implement a generic component for headers */}
        <h1 className="absolute top-24 uppercase tracking-wide-2xl text-gray-500 text-2xl w-full text-center">
          Projects
        </h1>

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
          className="min-h-[300px] max-h-[70%] h-full flex justify-center items-center">
          {projects.map((project, i) => (
            <SwiperSlide key={project._id}>
              <ProjectCard project={project} projectIndex={i + 1} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}
