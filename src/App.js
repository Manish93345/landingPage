import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Card from './Card';



function App() {

  const cardsData = [
    {
      title: 'Managed Services',
      description: 'Free up your internal resources to focus on the business by letting us handle day to day support services, management and monitoring your IT.',
      imageUrl: 'demo-image.png',
    },
    {
      title: 'IT Consulting and Advisory',
      description: 'Free up your internal resources to focus on the business by letting us handle day to day support services, management and monitoring your IT.',
      imageUrl: 'demo-image.png',
    },
    {
      title: 'Cyber security',
      description: 'Free up your internal resources to focus on the business by letting us handle day to day support services, management and monitoring your IT.',
      imageUrl: 'demo-image.png',
    },
    {
      title: 'Web Development',
      description: 'Free up your internal resources to focus on the business by letting us handle day to day support services, management and monitoring your IT..',
      imageUrl: 'demo-image.png',
    },
    {
      title: 'Mobile Development',
      description: 'Free up your internal resources to focus on the business by letting us handle day to day support services, management and monitoring your IT..',
      imageUrl: 'demo-image.png',
    },
    {
      title: 'Cloud Services',
      description: 'Free up your internal resources to focus on the business by letting us handle day to day support services, management and monitoring your IT.',
      imageUrl: './demo-image.png',
    },
    
  ];

  return (
    <div>
      
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#">Intelion</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse navigation-bar" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item"><a className="nav-link home" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Services</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
            </ul>
          </div>
          <button className="contact-btn">
            <a>Contact Us</a>
          </button>
        </div>
      </nav>

      <section className="solutions container">
        <h2>Solutions and Services</h2>
          <div className="app">
            <div className="card-container">
              {cardsData.map((card, index) => (
                <Card
                  key={index}
                  title={card.title}
                  description={card.description}
                  imageUrl={card.imageUrl}
                />
              ))}
            </div>
          </div>
        
      </section>

      
      <section className="container text-center my-5">
        <h2>Our Features</h2>
        <div className="row">
          <div className="col-md-4">
            <i className="bi bi-lightbulb-fill display-4 text-primary"></i>
            <h4>Innovative Solutions</h4>
            <p>We bring cutting-edge solutions to your business.</p>
          </div>
          <div className="col-md-4">
            <i className="bi bi-shield-lock-fill display-4 text-primary"></i>
            <h4>Secure & Reliable</h4>
            <p>Ensuring security and reliability in every step.</p>
          </div>
          <div className="col-md-4">
            <i className="bi bi-gear-fill display-4 text-primary"></i>
            <h4>Customizable Services</h4>
            <p>Solutions tailored to meet your needs.</p>
          </div>
        </div>
      </section>

      
      <footer>
        <div className="footer">

          <div className="footer1">
            <div className="solution footer1-child">
              <h3>Solutions</h3>
              <ul className="footer-links">
                <li><a href="#">Innovation</a></li>
                <li><a href="#">Security</a></li>
                <li><a href="#">Customization</a></li>
              </ul>
            </div>
            <div className="company footer1-child">
              <h3>Company</h3>
              <ul className="footer-links">
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="cpFooter">
            <p>&copy; 2025 Intelion. All Rights Reserved.</p>
          </div>

        </div>
      </footer>
    </div>
  );
}

export default App;

