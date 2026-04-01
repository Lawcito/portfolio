interface Experience {
  company: string;
  logo: string;
  role: string;
  period: string;
  url?: string;
  description?: string;
}

interface ExperienceSectionProps {
  title: string;
  subtitle: string;
  experiences: Experience[];
}

function ExperienceSection({
  title,
  subtitle,
  experiences,
}: ExperienceSectionProps) {
  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      <div className="flex flex-col gap-6">
        {experiences.map((exp, index) => (
          <a
            href={exp.url ? exp.url : undefined}
            target={exp.url ? "_blank" : undefined}
            rel="noopener noreferrer"
            key={index}
            className="block group relative"
          >
            {/* Tarjeta principal */}
            <div className="relative flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-white/2 backdrop-blur-sm group-hover:bg-white/5 group-hover:border-purple-500/30 transition-all duration-300 z-10 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]">
              {/* Logo */}
              <div className="flex-shrink-0 w-16 h-16 sm:w-14 sm:h-14 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <h3 className="text-base sm:text-lg font-semibold text-white truncate">
                  {exp.role}
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 text-md sm:text-sm text-gray-400">
                  <span className="font-medium text-gray-300">
                    {exp.company}
                  </span>
                  <span className="hidden sm:inline text-gray-500">•</span>
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Arrow indicator */}
              <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {exp.url && (
                  <svg
                    className="w-5 h-5 text-purple-400 transform -rotate-45"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                )}
              </div>
            </div>

            {/* Burbuja flotante - Descripción tipo cómic/manga */}
            {exp.description && (
              <div
                className="absolute z-50 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] delay-75
                              /* Layout Mobile (por defecto) */
                              left-1/2 top-[105%] -translate-x-1/2 translate-y-4
                              group-hover:translate-y-0
                              /* Layout Desktop */
                              md:left-[103%] md:top-1/2 md:-translate-y-1/2 md:translate-x-4
                              md:group-hover:translate-x-0 md:group-hover:-translate-y-1/2
                              w-[260px] sm:w-[320px]"
              >
                {/* Contenedor de la burbuja */}
                <div className="relative p-5 rounded-2xl border border-purple-500/40 bg-black/90 backdrop-blur-xl shadow-[0_10px_40px_rgba(139,92,246,0.2)] text-sm sm:text-base text-gray-200 leading-relaxed font-medium">
                  {/* Flecha Desktop (apunta hacia la izquierda) */}
                  <div className="hidden md:block absolute top-1/2 -left-[14px] -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[14px] border-r-purple-500/40"></div>
                  <div className="hidden md:block absolute top-1/2 -left-[12px] -translate-y-1/2 w-0 h-0 border-t-[9px] border-t-transparent border-b-[9px] border-b-transparent border-r-[13px] border-r-black"></div>

                  {/* Flecha Mobile (apunta hacia arriba) */}
                  <div className="md:hidden absolute -top-[14px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[14px] border-b-purple-500/40"></div>
                  <div className="md:hidden absolute -top-[12px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[9px] border-l-transparent border-r-[9px] border-r-transparent border-b-[13px] border-b-black"></div>

                  {exp.description}
                </div>
              </div>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}

export default ExperienceSection;
