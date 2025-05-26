import React from "react";
import Image from "next/image";
import EnquiryForm from "@/app/(home)/projects/[slug]/Form";

type ProjectData = {
  slug: string;
  name: string;
  overview: string;
  gallery: string[];
  amenities: string[];
  sitePlanImage: string;
  locationMapEmbed: string; // iframe HTML string
  brochureUrl: string;
  enquiryEmail: string;
};

// All project data stored here locally
const projectsData: ProjectData[] = [
  {
    slug: "eden",
    name: "Eldeco Eden",
    overview:
      "Eldeco Eden offers luxurious villas in a gated township with private gardens and modern amenities.",
    gallery: [
      "/assets/images/home/usp.jpg",
      "/assets/images/home/usp.jpg",
      "/assets/images/home/usp.jpg",
    ],
    amenities: [
      "Clubhouse",
      "Swimming Pool",
      "Children's Play Area",
      "Jogging Track",
      "24/7 Security",
    ],
    sitePlanImage: "/assets/images/home/project1.jpg",
    locationMapEmbed:
      '<iframe src="https://www.google.com/maps/embed?pb=..." width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    brochureUrl: "/assets/brochures/eden.pdf",
    enquiryEmail: "info@eldecoeden.com",
  },
  {
    slug: "song-of-life",
    name: "Song of Life",
    overview:
      "Apartments with smart homes technology and eco-friendly design facing Yamuna Expressway.",
    gallery: [
      "/assets/images/projects/song-of-life/1.jpg",
      "/assets/images/projects/song-of-life/2.jpg",
    ],
    amenities: ["Green Certified", "Smart Home Features", "Community Hall"],
    sitePlanImage: "/assets/images/projects/song-of-life/siteplan.jpg",
    locationMapEmbed:
      '<iframe src="https://www.google.com/maps/embed?pb=..." width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    brochureUrl: "/assets/brochures/song-of-life.pdf",
    enquiryEmail: "contact@songoflife.com",
  },
  // Add more projects here as needed
];

interface Props {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: Props) {
  const { slug } = params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <h1 className="text-3xl font-bold">Project Not Found</h1>
      </div>
    );
  }

  return (
    <main className="max-w-7xl mx-auto p-6 space-y-16">
      {/* Overview */}
      <section>
        <h1 className="text-4xl font-bold mb-4">{project.name}</h1>
        <p className="text-lg leading-relaxed">{project.overview}</p>
      </section>

      {/* Gallery */}
      <section>
        <h2 className="text-3xl font-semibold mb-6">Project Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {project.gallery.map((img, i) => (
            <Image
              key={i}
              src={img}
              alt={`${project.name} image ${i + 1}`}
              width={400}
              height={300}
              className="rounded-lg object-cover w-full h-60"
              priority={i === 0}
            />
          ))}
        </div>
      </section>

      {/* Amenities */}
      <section>
        <h2 className="text-3xl font-semibold mb-6">Amenities</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          {project.amenities.map((amenity, i) => (
            <li key={i}>{amenity}</li>
          ))}
        </ul>
      </section>

      {/* Site Plan */}
      <section>
        <h2 className="text-3xl font-semibold mb-6">Site Plan</h2>
        <Image
          src={project.sitePlanImage}
          alt={`${project.name} Site Plan`}
          width={800}
          height={450}
          className="rounded-lg object-contain w-full max-w-4xl"
        />
      </section>

      {/* Location Map */}
      <section>
        <h2 className="text-3xl font-semibold mb-6">Location Map</h2>
        <div
          className="aspect-video rounded-lg overflow-hidden"
          dangerouslySetInnerHTML={{ __html: project.locationMapEmbed }}
        />
      </section>

      {/* Download Brochure */}
      <section className="text-center">
        <a
          href={project.brochureUrl}
          download
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Download Brochure
        </a>
      </section>

      {/* Enquire Now Form */}
      <section className="max-w-xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">Enquire Now</h2>
        <EnquiryForm enquiryEmail={project.enquiryEmail} />
      </section>
    </main>
  );
}
