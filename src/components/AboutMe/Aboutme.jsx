import "./aboutme.css";
const ABOUT_TEXT = [
  "I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.",
  "My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project."
];
// Updated data to include levels
const SKILLS_DATA = [
  { name: "HTML & CSS", level: 60 },
  { name: "JavaScript", level: 90 },
  { name: "React", level: 84 },
  { name: "Node.js", level: 78 }
];
const AboutMe = () => {
  return (
    <section id="aboutme" className="aboutme">
      <h2 className="aboutme-title">About Me</h2>
      <div className="aboutme-bottom">
        <div className="aboutme-image">
          <img 
            src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdlYiUyMGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D" 
            alt="Saeed Ahmed" 
          />
        </div>
        <div className="aboutme-bottom-right">
          <div className="aboutme-paragraph">
            {ABOUT_TEXT.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
          <div className="aboutme-skills">
            {SKILLS_DATA.map((skill) => (
              <div key={skill.name} className="bar-section">
                <h3>{skill.name}</h3>
                <div className="aboutme-skill">
                  <span 
                    className="gradient-bg skill-bar" 
                    style={{ width: `${skill.level}%` }}
                    data-level={`${skill.level}%`}
                  ></span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
export default AboutMe;