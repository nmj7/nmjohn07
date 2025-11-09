import { FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa';
import { RiTwitterXLine } from "react-icons/ri";
import './App.css';
import Timeline from './Timeline';
import Projects from './Projects';

const socialLinks = [
  { icon: <FaLinkedin size={24} />, url: "https://www.linkedin.com/in/nikitha-marium-john/" },
  { icon: <RiTwitterXLine size={24} />, url: "https://x.com/nikithamj7?t=yIVCBGpOGSym3aBGJwVx9A&s=09" },
  { icon: <FaGithub size={24} />, url: "https://github.com/nmj7" },
];


function App() {
  return (
    <main className="min-h-screen bg-black">
      {/* Side social bar */}
      <div className="fixed top-1/2 left-0 transform -translate-y-1/2 z-50 hidden md:block">
        <ul className="flex flex-col bg-white shadow-lg rounded-r-lg overflow-hidden">
          {socialLinks.map((link, index) => (
            <li
              key={index}
              className="w-12 h-12 flex justify-center items-center hover:bg-gray-100 transition duration-300"
            >
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-teal-700"
              >
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Header stays plain black */}
      <header className="sticky top-0 z-40 flex justify-end text-2xl mt-5 pr-10 mb-5 text-white font-Roboto bg-black shadow-md">
        <ul className="flex space-x-10">
          <li><a href="#home" className="hover:text-teal-700">HOME</a></li>
          <li><a href="#about" className="hover:text-teal-700">ABOUT</a></li>
          <li><a href="#education" className="hover:text-teal-700">EDUCATION</a></li>
          <li><a href="#projects" className="hover:text-teal-700">PROJECTS</a></li>
        </ul>
      </header>

      {/* Home Section — with the textured background */}
      <section
        id="home"
        className="bg-texture-dark min-h-screen flex flex-col justify-center items-center text-white pt-20"
      >
        <h1 className="font-Merriweather text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
          HEY, I'M NIKITHA :D
        </h1>
        <p className="mx-10 mt-6 text-lg font-Merriweather max-w-3xl text-center">
          I am a Computer Science Master's student specializing in developing and deploying secure, scalable software. I have practical experience building fault-tolerant distributed trading systems and full-stack applications, with deep skills in Java, Python, AWS, and Docker.
        </p>
        <a href = "https://drive.google.com/file/d/1fDrBC9GjXVoBDkapyipMauini-d24ICe/view?usp=sharing">
        <button className="flex items-center space-x-2 text-black hover:text-white py-2 px-4 rounded hover:bg-gray-700 px-6 py-4 mt-3 bg-white hover:bg-teal-700 font-Merriweather font-extrabold text-xl">
          <FaDownload className = "white center"></FaDownload>RESUME
        </button>
        </a>
        </section>
      <section
  id="about"
  className="bg-texture-dark min-h-screen flex flex-col justify-start items-center text-white pt-20"
>
  <h1 className="font-Merriweather text-5xl md:text-6xl font-extrabold tracking-tight mb-2">
    ABOUT ME
  </h1>
  <p className="mx-10 mt-4 text-lg font-Merriweather max-w-3xl text-center">
    Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology
  </p>

  {/* Two-column layout */}
  <div className="flex flex-col md:flex-row justify-center items-start w-full max-w-6xl mt-16 space-y-10 md:space-y-0 md:space-x-20 px-10">
    {/* Left side — About content */}
    <div className="md:w-1/2 space-y-6 text-left">
      <h2 className="font-Merriweather text-3xl font-extrabold tracking-tight mb-4">
        Get to know me!
      </h2>
      <p className="text-[18px] !text-[18px] leading-relaxed text-gray-200">
        I’m <span className="font-bold text-white">Nikitha Marium John</span>, a graduate student in Computer Science at the 
        <span className="font-semibold text-teal-400"> University of Massachusetts Amherst</span>, 
        where I focus on building reliable, scalable, and intelligent software systems. 
        I love solving complex problems that sit at the intersection of AI, distributed systems, 
        and software engineering, especially when they have real-world impact.
      </p>
      <p className="text-[18px] !text-[18px] leading-relaxed text-gray-200">
        I’ve worked on everything from fault-tolerant trading systems to machine learning pipelines 
        supporting projects in child rescue and accessibility. My experience includes internships at 
        <span className="font-semibold text-teal-400"> Honeywell International</span> and 
        <span className="font-semibold text-teal-400"> M.H. Alshaya</span>, where I worked on enterprise systems, 
        cybersecurity testing, and data-driven operations.
      </p>
      <p className="text-[18px] !text-[18px] leading-relaxed text-gray-200">
        Outside research and development, I co-chair the 
        <span className="font-semibold text-teal-400"> Voices of Data Science Conference</span> 
            at UMass Amherst, helping bridge the gap between data, innovation, and people.
      </p>
    </div>

    {/* Right side — Skills */}
    <div className="md:w-1/2 text-left">
      <h2 className="font-Merriweather text-3xl font-extrabold tracking-tight mb-6">
        My Skills
      </h2>
      <div className="flex flex-wrap gap-3 font-Merriweather">
        {[
          "Python",
          "Java",
          "JavaScript",
          "Vite",
          "React",
          "TailwindCSS",
          "Next.js",
          "Node.js",
          "AWS",
          "Docker",
          "OpenCV",
          "TensorFlow",
          "Cybersecurity",
          "Git",
          "CI/CD",
        ].map((skill, index) => (
          <span
            key={index}
            className="bg-gray-800 text-gray-100 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-teal-600 transition duration-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </div>
</section>
<section
  id="education"
  className="bg-texture-dark min-h-screen flex flex-col justify-start items-center text-white pt-20"
>
  {/* Education Section — with the textured background */}
  <h1 className="font-Merriweather text-4xl md:text-6xl font-extrabold tracking-tight mb-2">
    EDUCATION & EXPERIENCE
  </h1>
  <Timeline/>
  </section>
  {/* Projects Section — with the textured background */}
  <section
  id="projects"
  className="bg-texture-dark min-h-screen flex flex-col justify-start items-center text-white pt-15">
  <h1 className="font-Merriweather text-4xl md:text-6xl font-extrabold tracking-tight mb-2">
    PROJECTS
  </h1>
  <Projects/>
  </section>
    </main>
  );
}

export default App;
