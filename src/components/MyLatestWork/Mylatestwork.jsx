import "./mylatestwork.css";

// Data moved outside to prevent recreation on render
const PROJECTS_DATA = [
  {
    id: 1,
    title: "E-commerce Website",
    imageUrl: "https://greatstack.in/portfolio/assets/project_1-5xYOfh0z.svg",
    projectUrl: "#", // Replace with your real project link
  },
  {
    id: 2,
    title: "Portfolio Website",
    imageUrl: "https://greatstack.in/portfolio/assets/project_2-ko3fLZz-.svg",
    projectUrl: "#",
  },
  {
    id: 3,
    title: "Blog Platform",
    imageUrl: "https://greatstack.in/portfolio/assets/project_3-G9x9U39U.svg",
    projectUrl: "#",
  },
  {
    id: 4,
    title: "Mobile App",
    imageUrl: "https://greatstack.in/portfolio/assets/project_4-KRxErSUy.svg",
    projectUrl: "#",
  },
  {
    id: 5,
    title: "Dashboard Design",
    imageUrl: "https://greatstack.in/portfolio/assets/project_6-VGGcxYRF.svg",
    projectUrl: "#",
  },
  {
    id: 6,
    title: "Portfolio Website",
    imageUrl: "https://greatstack.in/portfolio/assets/project_2-ko3fLZz-.svg",
    projectUrl: "#",
  },
];

const MyLatestWork = () => {
  return (
    // ID added for react-scroll navigation from Header
    <section id="portfolio" className="latestwork">
      
      {/* Changed to h2 for proper SEO hierarchy */}
      <h2>My Latest Work</h2>

      <div className="cards-container">
        {PROJECTS_DATA.map((project) => (
          // Used <a> tag to make the whole card clickable
          <a
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            key={project.id}
            className="latestwork-ui"
          >
            {/* Numbering */}
            <span className="card-number">0{project.id}</span>
            
            {/* Changed to h3 (matches CSS update) */}
            <h3 className="gradient-text">{project.title}</h3>
            
            <img src={project.imageUrl} alt={project.title} />
          </a>
        ))}
      </div>
    </section>
  );
};

export default MyLatestWork;