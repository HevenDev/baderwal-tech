// // "use client";

// // import { useState, useRef, useEffect } from "react";
// // import Link from "next/link";

// // type Project = {
// //   id: number;
// //   name: string;
// //   location: string;
// //   status: "Completed" | "Upcoming" | "Ongoing";
// //   image: string;
// //   link: string;
// // };

// // const categories = [
// //   "All Projects",
// //   "Completed Projects",
// //   "Upcoming Projects",
// //   "Ongoing Projects",
// // ];

// // const projects: Project[] = [
// //   {
// //     id: 1,
// //     name: "Eldeco Eden",
// //     location: "Sector 22D, Yamuna Expressway",
// //     status: "Completed",
// //     image: "/assets/images/home/usp.jpg",
// //     link: "/projects/eden",
// //   },
// //   {
// //     id: 2,
// //     name: "Song of Life",
// //     location: "Sector 22D, Yamuna Expressway",
// //     status: "Upcoming",
// //     image: "/assets/images/home/usp.jpg",
// //     link: "/projects/song-of-life",
// //   },
// //   {
// //     id: 3,
// //     name: "River View Residences",
// //     location: "Mahendergarh",
// //     status: "Ongoing",
// //     image: "/assets/images/home/usp.jpg",
// //     link: "/projects/river-view",
// //   },
// //   {
// //     id: 4,
// //     name: "Green Heights",
// //     location: "Yamunanagar",
// //     status: "Completed",
// //     image: "/assets/images/home/usp.jpg",
// //     link: "/projects/green-heights",
// //   },
// //   // add more projects as needed
// // ];

// // export default function ProjectsPageSection() {
// //   const [activeCategory, setActiveCategory] = useState("All Projects");
// //   const rightSideRef = useRef<HTMLDivElement>(null);

// //   // Filter projects by category
// //   const filteredProjects =
// //     activeCategory === "All Projects"
// //       ? projects
// //       : projects.filter(
// //           (p) =>
// //             (activeCategory === "Completed Projects" &&
// //               p.status === "Completed") ||
// //             (activeCategory === "Upcoming Projects" &&
// //               p.status === "Upcoming") ||
// //             (activeCategory === "Ongoing Projects" && p.status === "Ongoing")
// //         );

// //   // Scroll snapping on right side container - optional helper effect to scroll top when category changes
// //   useEffect(() => {
// //     if (rightSideRef.current) {
// //       rightSideRef.current.scrollTo({ top: 0, behavior: "smooth" });
// //     }
// //   }, [activeCategory]);

// //   return (
// //     <section className="flex h-screen w-full bg-gray-50">
// //       {/* Left side - Categories Tabs */}
// //       <aside className="w-1/4 md:w-1/5 bg-white border-r border-gray-300 flex flex-col">
// //         <nav className="flex flex-col mt-16">
// //           {categories.map((category) => {
// //             const isActive = category === activeCategory;
// //             return (
// //               <button
// //                 key={category}
// //                 onClick={() => setActiveCategory(category)}
// //                 className={`text-left px-6 py-4 text-lg font-semibold border-l-4 transition-colors ${
// //                   isActive
// //                     ? "border-blue-600 text-blue-700 bg-blue-50"
// //                     : "border-transparent hover:bg-gray-100 hover:text-gray-800"
// //                 }`}
// //               >
// //                 {category}
// //               </button>
// //             );
// //           })}
// //         </nav>
// //       </aside>

// //       {/* Right side - Projects list */}
// //       <main
// //         ref={rightSideRef}
// //         className="w-3/4 md:w-4/5 overflow-y-auto snap-y snap-mandatory"
// //         style={{ scrollBehavior: "smooth" }}
// //       >
// //         <div className="flex  flex-col sm:flex-row space-y-8 p-8">
// //           {filteredProjects.map((project) => (
// //             <article
// //               key={project.id}
// //               className="relative h-[70vh] snap-start rounded-lg shadow-lg overflow-hidden cursor-pointer group"
// //               style={{
// //                 backgroundImage: `url(${project.image})`,
// //                 backgroundSize: "cover",
// //                 backgroundPosition: "center",
// //               }}
// //             >
// //               {/* Overlay */}
// //               <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/60"></div>

// //               {/* Content */}
// //               <div className="absolute bottom-8 left-8 right-8 text-white z-10">
// //                 <p
// //                   className={`inline-block px-3 py-1 mb-2 rounded text-sm font-semibold ${
// //                     project.status === "Completed"
// //                       ? "bg-green-600"
// //                       : project.status === "Upcoming"
// //                       ? "bg-yellow-500"
// //                       : "bg-blue-600"
// //                   }`}
// //                 >
// //                   {project.status}
// //                 </p>
// //                 <h2 className="text-3xl font-bold mb-2">{project.name}</h2>
// //                 <p className="text-lg mb-4">{project.location}</p>

// //                 <Link
// //                   href={project.link}
// //                   className="inline-block border-b-2 border-white text-white text-lg font-semibold hover:text-blue-400 transition"
// //                 >
// //                   View Project
// //                 </Link>
// //               </div>
// //             </article>
// //           ))}
// //           {filteredProjects.length === 0 && (
// //             <p className="text-center text-gray-600 text-xl mt-20">
// //               No projects available in this category.
// //             </p>
// //           )}
// //         </div>
// //       </main>
// //     </section>
// //   );
// // }

// "use client";

// import { useState, useRef, useEffect } from "react";
// import Link from "next/link";

// type Project = {
//   id: number;
//   name: string;
//   location: string;
//   status: "Completed" | "Upcoming" | "Ongoing";
//   image: string;
//   link: string;
// };

// const categories = [
//   "All Projects",
//   "Completed Projects",
//   "Upcoming Projects",
//   "Ongoing Projects",
// ];

// const projects: Project[] = [
//   {
//     id: 1,
//     name: "Eldeco Eden",
//     location: "Sector 22D, Yamuna Expressway",
//     status: "Completed",
//     image: "/assets/images/home/usp.jpg",
//     link: "/projects/eden",
//   },
//   {
//     id: 2,
//     name: "Song of Life",
//     location: "Sector 22D, Yamuna Expressway",
//     status: "Upcoming",
//     image: "/assets/images/home/usp.jpg",
//     link: "/projects/song-of-life",
//   },
//   {
//     id: 3,
//     name: "River View Residences",
//     location: "Mahendergarh",
//     status: "Ongoing",
//     image: "/assets/images/home/usp.jpg",
//     link: "/projects/river-view",
//   },
//   {
//     id: 4,
//     name: "Green Heights",
//     location: "Yamunanagar",
//     status: "Completed",
//     image: "/assets/images/home/usp.jpg",
//     link: "/projects/green-heights",
//   },
// ];

// export default function ProjectsPageSection() {
//   const [activeCategory, setActiveCategory] = useState("All Projects");
//   const rightSideRef = useRef<HTMLDivElement>(null);

//   const filteredProjects =
//     activeCategory === "All Projects"
//       ? projects
//       : projects.filter(
//           (p) => p.status === activeCategory.replace(" Projects", "")
//         );

//   useEffect(() => {
//     if (rightSideRef.current) {
//       rightSideRef.current.scrollTo({ top: 0, behavior: "smooth" });
//     }
//   }, [activeCategory]);

//   return (
//     <section className="flex flex-col md:flex-row h-screen w-full bg-gray-50 mt-5">
//       {/* Category Tabs */}
//       <aside className="w-full md:w-[260px] bg-white border-b md:border-b-0 md:border-r border-gray-300">
//         <nav className="flex flex-col md:mt-16">
//           {categories.map((category) => {
//             const isActive = category === activeCategory;
//             return (
//               <button
//                 key={category}
//                 onClick={() => setActiveCategory(category)}
//                 className={`w-full text-left px-5 py-4 text-base md:text-lg font-semibold border-l-4 transition-colors ${
//                   isActive
//                     ? "border-blue-600 text-blue-700 bg-blue-50"
//                     : "border-transparent hover:bg-gray-100 hover:text-gray-800"
//                 }`}
//               >
//                 {category}
//               </button>
//             );
//           })}
//         </nav>
//       </aside>

//       {/* Project List */}
//       <main
//         ref={rightSideRef}
//         className="flex-1 overflow-y-auto snap-y snap-mandatory"
//         style={{ scrollBehavior: "smooth" }}
//       >
//         <div className="flex flex-col space-y-8 p-4 md:p-8">
//           {filteredProjects.map((project) => (
//             <article
//               key={project.id}
//               className="relative h-[60vh] md:h-[70vh] snap-start rounded-lg shadow-lg overflow-hidden cursor-pointer group"
//               style={{
//                 backgroundImage: `url(${project.image})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             >
//               {/* Overlay */}
//               <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/60"></div>

//               {/* Content */}
//               <div className="absolute bottom-6 left-6 right-6 text-white z-10">
//                 <p
//                   className={`inline-block px-3 py-1 mb-2 rounded text-sm font-semibold ${
//                     project.status === "Completed"
//                       ? "bg-green-600"
//                       : project.status === "Upcoming"
//                       ? "bg-yellow-500"
//                       : "bg-blue-600"
//                   }`}
//                 >
//                   {project.status}
//                 </p>
//                 <h2 className="text-2xl md:text-3xl font-bold mb-2">
//                   {project.name}
//                 </h2>
//                 <p className="text-base md:text-lg mb-4">{project.location}</p>
//                 <Link
//                   href={project.link}
//                   className="inline-block border-b-2 border-white text-white text-base md:text-lg font-semibold hover:text-blue-400 transition"
//                 >
//                   View Project
//                 </Link>
//               </div>
//             </article>
//           ))}

//           {filteredProjects.length === 0 && (
//             <p className="text-center text-gray-600 text-xl mt-20">
//               No projects available in this category.
//             </p>
//           )}
//         </div>
//       </main>
//     </section>
//   );
// }

"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

type Project = {
  id: number;
  slug: string; // Add slug for dynamic routing
  name: string;
  location: string;
  status: "Completed" | "Upcoming" | "Ongoing";
  image: string;
};

const categories = [
  "All Projects",
  "Completed Projects",
  "Upcoming Projects",
  "Ongoing Projects",
];

const projects: Project[] = [
  {
    id: 1,
    slug: "eden",
    name: "Eldeco Eden",
    location: "Sector 22D, Yamuna Expressway",
    status: "Completed",
    image: "/assets/images/home/usp.jpg",
  },
  {
    id: 2,
    slug: "song-of-life",
    name: "Song of Life",
    location: "Sector 22D, Yamuna Expressway",
    status: "Upcoming",
    image: "/assets/images/home/usp.jpg",
  },
  {
    id: 3,
    slug: "river-view",
    name: "River View Residences",
    location: "Mahendergarh",
    status: "Ongoing",
    image: "/assets/images/home/usp.jpg",
  },
  {
    id: 4,
    slug: "green-heights",
    name: "Green Heights",
    location: "Yamunanagar",
    status: "Completed",
    image: "/assets/images/home/usp.jpg",
  },
];

export default function ProjectsPageSection() {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const rightSideRef = useRef<HTMLDivElement>(null);

  const filteredProjects =
    activeCategory === "All Projects"
      ? projects
      : projects.filter(
          (p) => p.status === activeCategory.replace(" Projects", "")
        );

  useEffect(() => {
    if (rightSideRef.current) {
      rightSideRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [activeCategory]);

  return (
    <section className="flex flex-col md:flex-row h-screen w-full bg-gray-50 mt-5">
      {/* Category Tabs */}
      <aside className="w-full md:w-[260px] bg-white border-b md:border-b-0 md:border-r border-gray-300">
        <nav className="flex flex-col md:mt-16">
          {categories.map((category) => {
            const isActive = category === activeCategory;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`w-full text-left px-5 py-4 text-base md:text-lg font-semibold border-l-4 transition-colors ${
                  isActive
                    ? "border-blue-600 text-blue-700 bg-blue-50"
                    : "border-transparent hover:bg-gray-100 hover:text-gray-800"
                }`}
              >
                {category}
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Project List */}
      <main
        ref={rightSideRef}
        className="flex-1 overflow-y-auto snap-y snap-mandatory"
        style={{ scrollBehavior: "smooth" }}
      >
        <div className="flex flex-col space-y-8 p-4 md:p-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="relative h-[60vh] md:h-[70vh] snap-start rounded-lg shadow-lg overflow-hidden cursor-pointer group"
              style={{
                backgroundImage: `url(${project.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/60"></div>

              {/* Content */}
              <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                <p
                  className={`inline-block px-3 py-1 mb-2 rounded text-sm font-semibold ${
                    project.status === "Completed"
                      ? "bg-green-600"
                      : project.status === "Upcoming"
                      ? "bg-yellow-500"
                      : "bg-blue-600"
                  }`}
                >
                  {project.status}
                </p>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  {project.name}
                </h2>
                <p className="text-base md:text-lg mb-4">{project.location}</p>

                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-block border-b-2 border-white text-white text-base md:text-lg font-semibold hover:text-blue-400 transition"
                >
                  View Project
                </Link>
              </div>
            </article>
          ))}

          {filteredProjects.length === 0 && (
            <p className="text-center text-gray-600 text-xl mt-20">
              No projects available in this category.
            </p>
          )}
        </div>
      </main>
    </section>
  );
}
