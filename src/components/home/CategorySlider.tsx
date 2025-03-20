import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useRef } from "react";

interface Category {
  id: number;
  name: string;
  image: string;
  bgColor: string;
  quantity: number;
}

const categories: Category[] = [
  { id: 1, name: "Peach", image: "/peach.png", bgColor: "#FEEFEA", quantity: 100 },
  { id: 2, name: "Vegetables", image: "/vegetables.png", bgColor: "#FFF3FF", quantity: 100 },
  { id: 3, name: "strawberry", image: "/strawberry.png", bgColor: "#F2FCE4", quantity: 100 },
  { id: 4, name: "Apple", image: "/apple.png", bgColor: "#FEEFEA", quantity: 100 },
  { id: 5, name: "Orange", image: "/orange.png", bgColor: "#ECFFEC", quantity: 100 },
  { id: 6, name: "Potato", image: "/potato.png", bgColor: "#ECFFEC", quantity: 100 },
  { id: 7, name: "Carrot", image: "/carrot.png", bgColor: "#ECFFEC", quantity: 100 },
];

const CategorySlider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = 250; // Adjust scroll speed
      sliderRef.current.scrollBy({ left: direction === "right" ? scrollAmount : -scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full mx-auto overflow-hidden p-8">
      {/* Previous Button */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-[-2] top-1/2 transform -translate-y-1/2 bg-[#F2F3F4] text-[#253D4E] p-2 rounded-full z-10 shadow-md"
      >
        <ArrowLeft />
      </button>

      {/* Slider Content */}
      <div ref={sliderRef} className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide px-12">
        {categories.map((category) => (
          <div
            key={category.id}
            className="min-w-[150px] h-[180px] flex flex-col items-center justify-center rounded-lg shadow-md text-[#253D4E] text-lg font-semibold"
            style={{ backgroundColor: category.bgColor }}
          >
            <img src={category.image} alt={category.name} className="w-24 h-24 object-cover rounded-full mb-2" />
            <span className="" >{category.name}</span>

            <span className="text-sm text-gray-400" >{category.quantity} Items</span>
          </div>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#F2F3F4] text-[#253D4E] p-2 rounded-full z-10 shadow-md"
      >
        <ArrowRight />
      </button>
    </div>
  );
};

export default CategorySlider;
