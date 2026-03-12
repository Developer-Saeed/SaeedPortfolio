import './myservices.css'

const MyServices = () => {

  let servicesData = [
    {
      id: 1,
      name: "Web Development",
      description: "Building responsive and modern websites.",
      price: "$1000"
    },

    {
      id: 2,
      name: "Graphic Design",
      description: "Creating visually appealing designs for your brand.",
      price: "$500"
    },
    {
      id: 3,
      name: "SEO Optimization",
      description: "Improving your website's visibility on search engines.",
      price: "$800"
    },
    {
      id: 4,
      name: "Content Writing",
      description: "Crafting engaging and SEO-friendly content for your website.",
      price: "$300"
    },
    {
      id: 5,
      name: "Social Media Management",
      description: "Managing your social media accounts and creating content.",
      price: "$600"
    },
    {
      id: 6,
      name: "App Development",
      description: "Developing mobile applications for iOS and Android.",
      price: "$2000"
    }

  ]


  return (
    <div className='services'>
      <h1>My Services</h1>

      <div className='cards-container'>

        {
          servicesData.map((item) => (
            <div className='card-ui'>
              <h2>0{item.id}</h2>
              <h1 className='gradient-text'>{item.name}</h1>
              <p>{item.description}</p>
              <span className='gradient-text'>{item.price}</span>
            </div>
          ))
        }


      </div>

    </div>
  )
}

export default MyServices