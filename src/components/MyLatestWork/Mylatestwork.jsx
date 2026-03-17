import './mylatestwork.css'

const MyLatestWork = () => {


  let latestWorkData = [
    {
      id: 1,
      name: "E-commerce Website",
      picture: "https://greatstack.in/portfolio/assets/project_1-5xYOfh0z.svg",
    },
    {
      id: 2,
      name: "Portfolio Website",
      picture: "https://greatstack.in/portfolio/assets/project_2-ko3fLZz-.svg",
    },
    {
      id: 3,
      name: "Blog Platform",
      picture: "https://greatstack.in/portfolio/assets/project_3-G9x9U39U.svg",
    },
    {
      id: 4,
      name: "Mobile App",
      picture: "https://greatstack.in/portfolio/assets/project_4-KRxErSUy.svg",
    },
    {
      id: 5,
      name: "Dashboard Design",
      picture: "https://greatstack.in/portfolio/assets/project_6-VGGcxYRF.svg",
    },
    {
      id: 6,
      name: "Portfolio Website",
      picture: "https://greatstack.in/portfolio/assets/project_2-ko3fLZz-.svg",
    },
  ]

  return (
    <div className='latestwork'>

      <h1>My Latest Work</h1>


      <div className='cards-container'>

        {
          latestWorkData.map((item) => (
            <div className='latestwork-ui'>
              <h2 className=''>0{item.id}</h2>
              <h1 className='gradient-text'>{item.name}</h1>
              <img src={item.picture} alt={item.name} />
            </div>
          ))
        }


      </div>
    </div>
  )
}

export default MyLatestWork