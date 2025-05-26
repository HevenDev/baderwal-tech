// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, EffectFade } from "swiper/modules"; // ✅ Import EffectFade
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/effect-fade"; // ✅ Import CSS for fade
// import Link from "next/link";

// type Project = {
//   name: string;
//   subtitle: string;
//   keypoints: string[];
//   link: string;
//   image: string;
// };

// const projects: Project[] = [
//   {
//     name: "Eldeco Eden",
//     subtitle: "Luxury Villas in Sector 22D",
//     keypoints: ["Gated Township", "Private Gardens", "Clubhouse & Pool"],
//     link: "/projects/eden",
//     image: "/assets/images/home/usp.jpg",
//   },
//   {
//     name: "Song of Life",
//     subtitle: "Apartments by Baderwal",
//     keypoints: ["Smart Homes", "Yamuna Expressway Facing", "Green Certified"],
//     link: "/projects/song-of-life",
//     image: "/assets/images/home/usp.jpg",
//   },
//   {
//     name: "Song of Life",
//     subtitle: "Apartments by Baderwal",
//     keypoints: ["Smart Homes", "Yamuna Expressway Facing", "Green Certified"],
//     link: "/projects/song-of-life",
//     image: "/assets/images/home/usp.jpg",
//   },
// ];

// export const ProjectsSection = () => {
//   return (
//     <section className="w-full h-screen ">
//       <Swiper
//         modules={[Autoplay, Pagination, EffectFade]} // ✅ Register EffectFade here
//         autoplay={{ delay: 5000, disableOnInteraction: false }}
//         pagination={{ clickable: true }}
//         effect="fade" // ✅ Use the fade effect
//         loop
//         className="w-full h-full"
//       >
//         {projects.map((project, index) => (
//           <SwiperSlide key={index}>
//             <div
//               className="w-full h-screen bg-cover bg-center relative flex items-center justify-center"
//               style={{ backgroundImage: `url(${project.image})` }}
//             >
//               <div className="absolute inset-0 bg-black/40 z-0" />

//               <div className="relative z-10 px-6 text-center max-w-3xl text-white">
//                 <h1 className="text-3xl md:text-6xl font-bold mb-4">
//                   {project.name}
//                 </h1>
//                 <p className="text-lg md:text-2xl font-light mb-8">
//                   {project.subtitle}
//                 </p>

//                 <div className="flex justify-center items-center flex-wrap gap-x-6 gap-y-4 mb-10">
//                   {project.keypoints.map((point, idx) => (
//                     <div
//                       key={idx}
//                       className="flex items-center text-base md:text-lg relative px-3"
//                     >
//                       {idx !== 0 && (
//                         <div className="absolute left-0 top-1/2 -translate-y-1/2 h-4 border-l border-white opacity-40" />
//                       )}
//                       <span>{point}</span>
//                     </div>
//                   ))}
//                 </div>

//                 <Link
//                   href={project.link}
//                   className="inline-block border border-white px-6 py-3 rounded-md font-semibold text-white hover:bg-white hover:text-black transition-all duration-300 shadow-md hover:scale-105"
//                 >
//                   View Project
//                 </Link>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// };

// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, EffectFade } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/effect-fade";
// import Link from "next/link";

// type Project = {
//   name: string;
//   subtitle: string;
//   keypoints: string[];
//   link: string;
//   image: string;
// };

// const projects: Project[] = [
//   {
//     name: "Eldeco Eden",
//     subtitle: "Luxury Villas in Sector 22D",
//     keypoints: ["Gated Township", "Private Gardens", "Clubhouse & Pool"],
//     link: "/projects/eden",
//     image: "/assets/images/home/usp.jpg",
//   },
//   {
//     name: "Song of Life",
//     subtitle: "Apartments by Baderwal",
//     keypoints: ["Smart Homes", "Yamuna Expressway Facing", "Green Certified"],
//     link: "/projects/song-of-life",
//     image: "/assets/images/home/usp.jpg",
//   },
//   {
//     name: "Song of Life",
//     subtitle: "Apartments by Baderwal",
//     keypoints: ["Smart Homes", "Yamuna Expressway Facing", "Green Certified"],
//     link: "/projects/song-of-life",
//     image: "/assets/images/home/usp.jpg",
//   },
// ];

// export const ProjectsSection = () => {
//   return (
//     <section className="w-full h-screen bg-black">
//       {/* Section Header */}
//       <div className="text-white text-center py-8 px-4 ">
//         <h1 className="text-4xl md:text-5xl font-bold mb-4">
//           Featured Projects
//         </h1>
//         <p className="text-lg md:text-xl max-w-3xl mx-auto">
//           Explore some of our finest residential offerings featuring luxury,
//           sustainability, and smart living—all nestled in prime locations.
//         </p>
//       </div>

//       {/* Swiper Carousel */}
//       <Swiper
//         modules={[Autoplay, Pagination, EffectFade]}
//         autoplay={{ delay: 5000, disableOnInteraction: false }}
//         pagination={{ clickable: true }}
//         effect="fade"
//         loop
//         className="w-[90%] h-[80%]"
//       >
//         {projects.map((project, index) => (
//           <SwiperSlide key={index}>
//             <div
//               className="w-full h-[90%] bg-cover bg-center relative flex items-center justify-center"
//               style={{ backgroundImage: `url(${project.image})` }}
//             >
//               <div className="absolute inset-0 bg-black/40 z-0" />

//               <div className="relative z-10 px-6 text-center max-w-3xl text-white">
//                 <h1 className="text-3xl md:text-6xl font-bold mb-4">
//                   {project.name}
//                 </h1>
//                 <p className="text-lg md:text-2xl font-light mb-8">
//                   {project.subtitle}
//                 </p>

//                 <div className="flex justify-center items-center flex-wrap gap-x-6 gap-y-4 mb-10">
//                   {project.keypoints.map((point, idx) => (
//                     <div
//                       key={idx}
//                       className="flex items-center text-base md:text-lg relative px-3"
//                     >
//                       {idx !== 0 && (
//                         <div className="absolute left-0 top-1/2 -translate-y-1/2 h-4 border-l border-white opacity-40" />
//                       )}
//                       <span>{point}</span>
//                     </div>
//                   ))}
//                 </div>

//                 <Link
//                   href={project.link}
//                   className="inline-block border border-white px-6 py-3 rounded-md font-semibold text-white hover:bg-white hover:text-black transition-all duration-300 shadow-md hover:scale-105"
//                 >
//                   View Project
//                 </Link>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Swiper Pagination Bullet Style Override */}
//       <style jsx global>{`
//         .swiper-pagination-bullet {
//           background-color: white !important;
//           opacity: 0.6;
//         }
//         .swiper-pagination-bullet-active {
//           background-color: white !important;
//           opacity: 1;
//         }
//       `}</style>
//     </section>
//   );
// };

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Link from "next/link";

type Project = {
  name: string;
  subtitle: string;
  keypoints: string[];
  link: string;
  image: string;
};

const projects: Project[] = [
  {
    name: "Eldeco Eden",
    subtitle: "Luxury Villas in Sector 22D",
    keypoints: ["Gated Township", "Private Gardens", "Clubhouse & Pool"],
    link: "/projects/eden",
    image: "/assets/images/home/project1.jpg",
  },
  {
    name: "Song of Life",
    subtitle: "Apartments by Baderwal",
    keypoints: ["Smart Homes", "Yamuna Expressway Facing", "Green Certified"],
    link: "/projects/song-of-life",
    image: "/assets/images/home/usp.jpg",
  },
  {
    name: "Song of Life",
    subtitle: "Apartments by Baderwal",
    keypoints: ["Smart Homes", "Yamuna Expressway Facing", "Green Certified"],
    link: "/projects/song-of-life",
    image: "/assets/images/home/usp.jpg",
  },
];

export const ProjectsSection = () => {
  return (
    <section className="w-full min-h-screen bg-black">
      {/* Section Header */}
      <div className="text-white text-center py-8 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Featured Projects
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-2 sm:px-0">
          Explore some of our finest residential offerings featuring luxury,
          sustainability, and smart living—all nestled in prime locations.
        </p>
      </div>

      {/* Swiper Carousel */}
      <div className="w-full h-[80vh] sm:h-[85vh] md:h-[90vh] px-4 sm:px-8">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          effect="fade"
          loop
          className="w-full h-[90%]"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full h-[90%] bg-cover bg-center relative flex items-center justify-center"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="absolute inset-0 bg-black/40 z-0" />

                <div className="relative z-10 px-4 sm:px-6 text-center max-w-3xl text-white">
                  <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4">
                    {project.name}
                  </h1>
                  <p className="text-base sm:text-lg md:text-2xl font-light mb-6 sm:mb-8">
                    {project.subtitle}
                  </p>

                  <div className="flex justify-center items-center flex-wrap gap-x-4 sm:gap-x-6 gap-y-4 mb-8 sm:mb-10">
                    {project.keypoints.map((point, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-sm sm:text-base md:text-lg relative px-3"
                      >
                        {idx !== 0 && (
                          <div className="absolute left-0 top-1/2 -translate-y-1/2 h-4 border-l border-white opacity-40" />
                        )}
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={project.link}
                    className="inline-block border border-white px-5 py-2 sm:px-6 sm:py-3 rounded-md font-semibold text-white hover:bg-white hover:text-black transition-all duration-300 shadow-md hover:scale-105"
                  >
                    View Project
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Swiper Pagination Bullet Style Override */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background-color: white !important;
          opacity: 0.6;
        }
        .swiper-pagination-bullet-active {
          background-color: white !important;
          opacity: 1;
        }
      `}</style>
    </section>
  );
};
