import './herosection.css'
function Herosection() {
  return (
    <div className='herosection'>
      <div className='profile-picture'>
        <img src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdlYiUyMGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D" alt="profile-img" />
      </div>
      <div>
        <h1 className='main-title'>
       <span>I'm SaeedAhmed,</span>Front-end Developer based in Karachi,Pakistan.
        </h1>
        <p className='main-detail'>I'm Passionate frontend developer with experience in creating dynamic web applications.I specialize in JavaScript,React,Node.js, and more.</p>
      </div>
      <div className='buttons'>
        <button>Contact with me</button>
        <button>My Resume</button>
      </div>
    </div>
  );
}

export default Herosection;