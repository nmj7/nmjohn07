import projects from './assets/projectElements.js';
import laptop from './assets/laptop.svg';
import { FaGithub } from 'react-icons/fa';

export default function Projects() {
  return (
    <div className="text-white p-8 grid gap-8 md:grid-cols-2">
      {projects.map((element) => (
        <div
          key={element.id}
          className="border border-grey-700 rounded-2xl p-6 shadow-md hover:shadow-lg transition font-Merriweather"
        >
          {/* Title + icon row */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <img
                src={laptop}
                alt="Laptop icon"
                className="w-8 h-8 filter brightness-0 invert"
              />
              <h3 className="text-xl font-semibold">{element.title}</h3>
            </div>

            {/* GitHub icon appears only if there's a link */}
            {element.link && (
              <a
                href={element.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-teal-400 transition"
                title="View on GitHub"
              >
                <FaGithub size={24} />
              </a>
            )}
          </div>

          {/* Description */}
          <ul className="list-disc list-inside space-y-2 text-teal-700 text-base">
            {element.description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>

          {/* Tech stack */}
          <div className="flex flex-wrap justify-start items-center gap-2 mt-3">
            {element.tech.map((tech, index) => (
              <span
                key={index}
                className="bg-white hover:bg-teal-700 text-black hover:text-white text-sm px-2 py-1 rounded text-center font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
