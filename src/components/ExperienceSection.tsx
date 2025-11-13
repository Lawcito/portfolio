interface Experience {
  company: string;
  logo: string;
  role: string;
  period: string;
  url?: string;
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
      <div className="flex flex-col gap-4">
        {experiences.map((exp, index) => (
          <a href={exp.url} key={index}>
            <div className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-white/2 backdrop-blur-sm hover:bg-white/5 hover:border-white/20 transition-all duration-300 group">
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
                <p className="text-md sm:text-sm text-gray-400">{exp.period}</p>
              </div>

              {/* Arrow indicator */}
              <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {exp.url && (
                  <svg
                    className="w-5 h-5 text-violet-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default ExperienceSection;
