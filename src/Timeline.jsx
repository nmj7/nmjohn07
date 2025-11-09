import timelineElements from './assets/timelineElements.js';
import school from './assets/school.svg';
import work from './assets/work.svg';

export default function Timeline({ defaultColor }) {
  const colorClasses = {
    teal: "bg-teal-600/50 border-teal-600",
    purple: "bg-purple-600/50 border-purple-600",
    blue: "bg-blue-600/50 border-blue-600",
    red: "bg-red-600/50 border-red-600",
  };

  return (
    <div className="relative pl-10">
      {timelineElements.map((element) => {
        const color = defaultColor || element.color;

        return (
          <div
            key={element.id}
            className="relative flex items-start mb-10"
          >
            {/* Continuous vertical line */}
            <div className="absolute left-6 top-0 w-1 h-full bg-gray-700 opacity-40"></div>

            {/* Icon and Date */}
            <div className="relative z-10 flex flex-col items-center">
              <div
                className={`
                  w-12 h-12 flex items-center justify-center rounded-full shadow-md
                  ${element.color === "teal" ? "bg-teal-700" : "bg-purple-700"}
                `}
              >
                <img
                  src={element.icon === 'School' ? school : work}
                  alt="icon"
                  className="w-6 h-6 opacity-90"
                />
              </div>
              <span className="mt-2 text-xs text-gray-300">{element.date}</span>
            </div>

            {/* Content Box */}
            <div
              className={`
                relative w-full rounded-xl px-8 py-4 text-center font-Merriweather text-white
                ${colorClasses[color] || "bg-gray-600/50 border-gray-600"}
                shadow-[0_0_25px_rgba(0,0,0,0.3)]
                hover:shadow-[0_0_35px_rgba(255,255,255,0.1)]
                transition-all duration-500 backdrop-blur-[2px]
                min-h-[220px] flex flex-col justify-between
              `}
            >
              <div className="font-bold text-xl text-white">{element.title}</div>
              <div>
                {element.location}{" "}
                <span className="sm:hidden">{element.date}</span>
              </div>

              {/* 🟢 Bullet Point Description */}
              {Array.isArray(element.description) ? (
                <ul className="list-disc list-inside text-left mt-3 space-y-1">
                  {element.description.map((point, index) => (
                    <li
                      key={index}
                      className="text-gray-100 text-sm leading-relaxed"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-100 text-sm leading-relaxed mt-3">
                  {element.description}
                </p>
              )}

              {/* Tech Stack */}
              <div className="flex flex-wrap justify-start items-center gap-2 mt-3">
                {element.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-black text-white text-sm px-2 py-1 rounded text-center"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
