import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cube";
import { SwiperSlide, Swiper } from "swiper/react";
import {
  A11y,
  Autoplay,
  EffectCube,
  Navigation,
  Pagination,
} from "swiper/modules";
import pokemonTrucho from "../assets/pokemon-trucho.png";
import sapuCraft from "../assets/SapuCraft.jpeg";
import tattooWeb from "../assets/tattooWeb.png";
import { useState } from "react";

export const pages = [
  {
    img: sapuCraft,
    href: "https://lawcito.github.io/minecraft-web/",
    title: "SapuCraft",
    description: `SapuCraft is a minecraft website, where I learned how to integrate a FireStore database. This project was in collaboration with NekobamBam`,
    colaboration: "NekoBamBam",
    colabLink: "https://github.com/NekoBamBam",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        className="bi bi-github"
        viewBox="0 0 16 16"
      >
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
      </svg>
    ),
  },
  {
    img: pokemonTrucho,
    href: "https://lawcito.github.io/pokemon-trucho/",
    title: "Pokemon Trucho",
    description: `"Pokemon Trucho" is a game of random battles vs the computer.`,
  },
  {
    img: tattooWeb,
    href: "https://nekobambam.github.io/tattoo-web/",
    title: "Tattoo-web",
    description: "Tattoo-web is a page of NekoBamBam, i'm participate in this page to create a Carousel links, Footer & the images.",
    colaboration: "NekoBamBam",
    colabLink: "https://github.com/NekoBamBam",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        className="bi bi-github"
        viewBox="0 0 16 16"
      >
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
      </svg>)
  },
];

function Works() {
  const [currentWork, setCurrentWork] = useState(undefined);

  return (
    <div className="h-full flex flex-col lg:flex-row justify-center items-center lg:justify-evenly gap-8 lg:gap-0">
      <div className="lg:w-1/3  lg:h-1/2 rounded-lg w-full">
        <Swiper
          modules={[Autoplay, Navigation, Pagination, A11y, EffectCube]}
          effect="cube"
          slidesPerView={1}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true, type: "fraction" }}
          navigation
          cubeEffect={{
            slideShadows: true,
            shadowOffset: 0.1,
            shadowScale: 0.94,
          }}
          className="lg:h-full lg:w-full"
        >
          {pages.map((page, index) => {
            return (
              <SwiperSlide key={index}>
                <button
                  onClick={() =>
                    setCurrentWork({
                      href: page.href,
                      title: page.title,
                      description: page.description,
                      colaboration: page.colaboration,
                      svg: page.svg,
                      colabLink: page.colabLink,
                    })
                  }
                  className="flex "
                >
                  <img
                    src={page.img}
                    alt=""
                    className="h-full w-full rounded-lg border border-[#]"
                  />
                </button>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="lg:h-1/2 lg:w-1/2 h-1/4">
        {currentWork ? (
          <div className="flex flex-col gap-8 items-center lg:items-start">
            <span className="lg:text-2xl text-xl text-[#72B01D]">{currentWork.title}</span>
            <div className="h-full w-full lg:border-l">
              <p className="ml-5">{currentWork.description}</p>
            </div>
            <div className="flex justify-evenly w-full">
              <a
                href={currentWork.colabLink}
                className="flex flex-row gap-2 hover:text-[#72B01D] transition-transform transform hover:scale-110 duration-200 "
                target="blank_"
              >
                <span>{currentWork.colaboration}</span>
                <span>{currentWork.svg}</span>
              </a>
              <a
                href={currentWork.href}
                target="blank_"
                className="flex flex-row gap-2 text-[#3F7D20]"
              >
                <p>Go to website</p>
                <span className="animate-pulse">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        ) : (
          false
        )}
      </div>
    </div>
  );
}

export default Works;
