import './aboutme.css'

const AboutMe = () => {
    return (
        <div className='aboutme'>
            <h1 className='aboutme-title'>About Me</h1>


            <div className='aboutme-bottom'>


                <div className='aboutme-image'>
                    <img src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdlYiUyMGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D" alt="profile-img" />

                </div>



                <div className='aboutme-bottom-right'>

                    <div className='aboutme-paragraph'>
                        <p>I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>

                        <p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
                    </div>


                    <div className='aboutme-skills'>
            

                        <div className='bar-section'>

                            <h3>HTML & CSS</h3>
                            <div className='aboutme-skill'>
                                <span className='htmlcss gradient-bg'></span>
                            </div>
                        </div>


                        <div className='bar-section'>

                            <h3>JavaScript</h3>
                            <div className='aboutme-skill '>
                                <span className='javascript gradient-bg'></span>
                            </div>
                        </div>


                        <div className='bar-section'>

                            <h3>React</h3>
                            <div className='aboutme-skill'>
                                <span className='react gradient-bg'></span>
                            </div>
                        </div>


                        <div className='bar-section'>

                            <h3>Node.js</h3>
                            <div className='aboutme-skill'>
                                <span className='nodejs gradient-bg'></span>
                            </div>
                        </div>



                    </div>


                </div>


            </div>
        </div>
    )
}

export default AboutMe