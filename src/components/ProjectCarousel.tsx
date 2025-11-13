import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Card from "./Card";

interface Project {
  title: string;
  image: string;
  link: string;
  hasScrollEffect: boolean;
}

interface ProjectCarouselProps {
  projects: Project[];
}

const ProjectCarousel = ({ projects }: ProjectCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    slidesToScroll: 1,
    skipSnaps: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-full  max-w-6xl mx-auto py-12 sm:py-16 sm:px-8 ">
      {/* Contenedor con overflow-x-hidden pero overflow-y-visible */}
      <div className="overflow-x-hidden overflow-y-visible">
        {/* Carrusel */}
        <div className="overflow-visible" ref={emblaRef}>
          <div className="flex">
            {projects.map((project, index) => {
              const isCenter = index === selectedIndex;
              return (
                <div
                  key={index}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.333%] flex justify-center items-center px-2 sm:px-4 py-4 sm:py-6"
                >
                  <div
                    className={`transition-all duration-500 ease-out w-full h-96 lg:h-full flex items-center justify-center ${
                      isCenter
                        ? "scale-100 sm:scale-110 opacity-100 z-10"
                        : "scale-90 sm:scale-75 opacity-40"
                    }`}
                  >
                    <Card {...project} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Botones */}
      <button
        onClick={scrollPrev}
        className="flex items-center justify-center absolute top-1/2 left-0 sm:left-2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white text-xl sm:text-2xl w-10 h-10 sm:w-12 sm:h-12 rounded-full backdrop-blur-sm transition z-20 cursor-pointer"
        aria-label="Proyecto anterior"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-caret-left-fill"
          viewBox="0 0 16 16"
        >
          <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
        </svg>
      </button>
      <button
        onClick={scrollNext}
        className="flex items-center justify-center absolute top-1/2 right-0 sm:right-2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white text-xl sm:text-2xl w-10 h-10 sm:w-12 sm:h-12 rounded-full backdrop-blur-sm transition z-20 cursor-pointer"
        aria-label="Siguiente proyecto"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-caret-right-fill"
          viewBox="0 0 16 16"
        >
          <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
        </svg>
      </button>
    </div>
  );
};

export default ProjectCarousel;
