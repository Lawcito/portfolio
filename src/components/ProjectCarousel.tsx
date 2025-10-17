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
    <div className="relative w-full max-w-6xl mx-auto py-12">
      {/* Carrusel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {projects.map((project, index) => {
            const isCenter = index === selectedIndex;
            return (
              <div
                key={index}
                className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.333%] flex justify-center items-center p-4"
              >
                <div
                  className={`transition-all duration-500 ease-out ${
                    isCenter
                      ? "scale-110 opacity-100 z-10"
                      : "scale-75 opacity-40"
                  }`}
                >
                  <Card {...project} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Botones */}
      <button
        onClick={scrollPrev}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white text-2xl w-12 h-12 rounded-full backdrop-blur-sm transition z-20"
        aria-label="Proyecto anterior"
      >
        ‹
      </button>
      <button
        onClick={scrollNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white text-2xl w-12 h-12 rounded-full backdrop-blur-sm transition z-20"
        aria-label="Siguiente proyecto"
      >
        ›
      </button>
    </div>
  );
};

export default ProjectCarousel;
