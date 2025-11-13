interface CardProps {
  title: string;
  image: string;
  link: string;
  hasScrollEffect?: boolean;
}

function Card({ title, image, link, hasScrollEffect = true }: CardProps) {
  return (
    <div
      className="w-3/4 h-full lg:w-96 flex flex-col items-center text-center justify-center gap-3 p-4 rounded-2xl
         border border-white/10
         bg-white/6 backdrop-blur-md
         shadow-[0_0_15px_rgba(255,255,255,0.05)]
         hover:scale-105 hover:bg-white/4 hover:border-white/4
         transition-all duration-300 ease-in-out"
    >
      <p className="text-lg sm:text-xl font-semibold text-white">{title}</p>

      <div className="h-40 w-full border border-white/10 rounded-xl bg-black/40 overflow-hidden relative group">
        <img
          className={`w-full absolute top-0 left-0 ${
            hasScrollEffect
              ? "h-auto transition-transform duration-[5000ms] ease-linear group-hover:translate-y-[calc(-100%+10rem)]"
              : "h-full object-cover"
          }`}
          src={image}
          alt={title}
        />
      </div>

      <a
        href={link}
        target="_blank"
        className="mt-2 text-violet-400 font-medium hover:text-violet-300 transition-colors text-sm sm:text-base"
      >
        Ir al sitio →
      </a>
    </div>
  );
}

export default Card;
