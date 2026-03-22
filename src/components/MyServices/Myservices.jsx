import "./myservices.css";
const SERVICES_DATA = [
  { id: 1, title: "Web Development", description: "Building responsive and modern websites.", price: "$1000" },
  { id: 2, title: "Graphic Design", description: "Creating visually appealing designs for your brand.", price: "$500" },
  { id: 3, title: "SEO Optimization", description: "Improving your website's visibility on search engines.", price: "$800" },
  { id: 4, title: "Content Writing", description: "Crafting engaging and SEO-friendly content for your website.", price: "$300" },
  { id: 5, title: "Social Media Management", description: "Managing your social media accounts and creating content.", price: "$600" },
  { id: 6, title: "App Development", description: "Developing mobile applications for iOS and Android.", price: "$2000" }
];
const MyServices = () => {
  return (
    <section id="services" className="services">
      <h2>My Services</h2>
      <div className="cards-container">
        {SERVICES_DATA.map((service) => (
          <article key={service.id} className="service-card">
            <span className="service-number">0{service.id}</span>
            <h3 className="gradient-text">{service.title}</h3>
            <p>{service.description}</p>
            <span className="service-price gradient-text">{service.price}</span>
          </article>
        ))}
      </div>
    </section>
  );
};
export default MyServices;