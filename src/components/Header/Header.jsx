import './header.css'

const Header = () =>{
  const menuItems=[
    {
      name:"Home",
      link:"/home",
    },
    {
      name:"Aboutme",
      link:"/aboutme",
    },
    {
      name:"Portfolio",
      link:"/portfolio",
    },
    {
      name:"Services",
      link:"/services",
    },
    {
      name:"ContactUs",
      link:"/contactus",
    },
  ]
  return (
    <header className='header'>
      <h1>Saeed.</h1>
      <ul className='menu-items'>
      {menuItems.map((item, index)=>(
        <li key={index}>{item.name}</li>
      ))}
      </ul>
      <button>Contact Us</button>
    </header>
  )
}

export default Header