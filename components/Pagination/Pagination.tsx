"use client";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const getPageNumbers = (current: number, total: number): (number | "...")[] => {
  const delta = 2;
  const range: (number | "...")[] = [];
  const left = Math.max(2, current - delta);
  const right = Math.min(total - 1, current + delta);

  range.push(1);

  if (left > 2) range.push("...");

  for (let i = left; i <= right; i++) {
    range.push(i);
  }

  if (right < total - 1) range.push("...");

  if (total > 1) range.push(total);

  return range;
};

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const pages = getPageNumbers(currentPage, totalPages);

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleClick = (page: number) => {
    onPageChange(page);
    scrollToTop();
  };

  return (
    <div className="flex justify-center items-center gap-1 flex-wrap">
      <Button
        size="sm"
        variant="outline"
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeft className="w-4 h-4" />
      </Button>

      {pages.map((page, index) =>
        page === "..." ? (
          <MoreHorizontal key={index} className="w-4 h-4 text-muted-foreground" />
        ) : (
          <Button
            key={index}
            size="sm"
            variant={page === currentPage ? "default" : "outline"}
            onClick={() => handleClick(page)}
          >
            {page}
          </Button>
        )
      )}

      <Button
        size="sm"
        variant="outline"
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <ChevronRight className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default Pagination;
