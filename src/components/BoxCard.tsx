interface TechIcon {
  name: string;
  icon: string;
  link?: string;
  color?: string;
}

interface BoxCardProps {
  technologies: TechIcon[];
}

function BoxCard({ technologies }: BoxCardProps) {
  return (
    <div className="flex flex-col gap-4 p-6">
      <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm grid grid-cols-2 gap-[1px] overflow-hidden">
        {technologies.slice(0, 4).map((tech, index) => (
          <a
            key={index}
            href={tech.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black/60 hover:bg-white/5 transition-all duration-300 flex flex-col items-center justify-center gap-3 group cursor-pointer"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-300"
              />
            </div>
            <span className="text-xs sm:text-sm text-gray-400 group-hover:text-white transition-colors duration-300">
              {tech.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default BoxCard;