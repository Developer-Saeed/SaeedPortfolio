
import { Link } from "react-scroll";
import "./herosection.css";
// 1. Content separated for easy editing
const PROFILE_CONTENT = {
  name: "Saeed Ahmed",
  role: "Full Stack Developer",
  location: "Karachi, Pakistan",
  description: "I'm a passionate full-stack developer with experience in creating dynamic web applications. I specialize in JavaScript, React, Node.js, and more.",
  profileImageUrl: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdlYiUyMGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D",
  resumeLink: "/Saeed_Resume.pdf"
};
const HeroSection = () => {
  const { name, role, location, description, profileImageUrl, resumeLink } = PROFILE_CONTENT;
  return (
    // 2. Changed to <section> and added ID for navigation
    <section className="herosection" id="home">
      <div className="profile-picture">
        <img 
          src={profileImageUrl} 
          alt={`${name} - ${role}`} // 3. Descriptive Alt text
        />
      </div>
      <h1 className="main-title">
        <span>I'm {name},</span> {role} based in {location}.
      </h1>
      <p className="main-detail">
        {description}
      </p>
      <div className="buttons">
        {/* 4. Connected to Contact Section */}
        <Link to="contact" smooth={true} duration={500} offset={-70}>
          <button type="button" className="btn-primary">Contact with me</button>
        </Link>
        {/* 5. Resume opens in new tab */}
        <a href={resumeLink} target="_blank" rel="noopener noreferrer">
          <button type="button" className="btn-secondary">My Resume</button>
        </a>
      </div>
    </section>
  );
};
export default HeroSection;
