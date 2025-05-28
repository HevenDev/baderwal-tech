"use client";

import { useState, useRef, useEffect } from "react";
import Banner from "@/components/Banner/Banner";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { Suspense } from 'react'
type CardData = {
    img: string;
    date: string;
    title: string;
    description: string;
    url: string;
};

// Dummy blog data
const blogData: CardData[] = Array.from({ length: 20 }, (_, i) => ({
    img: `https://images.unsplash.com/photo-1747607176057-175b357ef4ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D`,
    date: `May ${i + 1}, 2025`,
    title: `Blog Post Title ${i + 1}`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.`,
    url: `/blog/${i + 1}`,
}));

// Utility to truncate description to 15 words
const truncateWords = (text: string, count: number): string => {
    const words = text.split(" ");
    return words.length > count ? words.slice(0, count).join(" ") + "..." : text;
};

const BlogPage = () => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const pageFromURL = parseInt(searchParams.get("page") || "1", 10);
    const [currentPage, setCurrentPage] = useState(pageFromURL);

    const [isLargeScreen, setIsLargeScreen] = useState(false);
    const cardsPerPage = isLargeScreen ? 9 : 8;

    const sectionRef = useRef<HTMLDivElement>(null);

    // On URL change, update the state (for back/forward navigation)
    useEffect(() => {
        const page = parseInt(searchParams.get("page") || "1", 10);
        setCurrentPage(page);
    }, [searchParams]);

    // Screen size logic
    useEffect(() => {
        const checkScreenSize = () => {
            const width = window.innerWidth;
            setIsLargeScreen(width >= 768 && width < 1024); // lg breakpoint ~1024px
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);


    const totalPages = Math.ceil(blogData.length / cardsPerPage);
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const currentCards = blogData.slice(startIndex, endIndex);

    const handlePageChange = (newPage: number) => {
        router.push(`?page=${newPage}`);
    };

    return (
        <><Suspense>
            <Banner title="Blog" />
            <section ref={sectionRef} className="lg:py-[5rem] py-[3rem]">
                <div className="b_container">
                    <div className="flex justify-center">
                        <div className="w-full max-w-[1200px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {currentCards.map((card, i) => (
                                <Link
                                    href={card.url}
                                    key={i}
                                    className="shadow hover:shadow-lg transition overflow-hidden"
                                >
                                    <img
                                        src={card.img}
                                        alt={card.title}
                                        className="rounded-lg w-full object-fill"
                                    />
                                    <div className="p-4">
                                        <h2 className="text-xl font-semibold">{card.title}</h2>
                                        <p className="text-gray-700 text-m my-2">
                                            {truncateWords(card.description, 10)}
                                        </p>
                                        <p className="text-sm text-gray-500">{card.date}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center items-center mt-10 gap-4">
                        <button
                            onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                            disabled={currentPage === 1}
                            className="px-4 py-2 border rounded cursor-pointer disabled:opacity-50"
                        >
                            Previous
                        </button>
                        <span>
                            Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong>
                        </span>
                        <button
                            onClick={() =>
                                handlePageChange(Math.min(currentPage + 1, totalPages))
                            }
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 border rounded cursor-pointer disabled:opacity-50"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </section>
        </Suspense>
        </>
    );
};

export default BlogPage;
