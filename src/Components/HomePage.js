import React, { useState } from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';


  
function HomePage() {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://portfolio-backend-95wi.onrender.com/api/contact', formData);
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      setFormStatus('error');
    }
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  return (
    <div>
        <header class="header">
      <div class="header__content">
        <div class="header__logo-container">
          <div class="header__logo-img-cont">
            <img
              src="https://i.ibb.co/QNtDxrq/Whats-App-Image-2024-08-12-at-15-36-48.jpg" 
              alt="Aditya Barve Logo Image"
              class="header__logo-img"
            />
          </div>
          <span class="header__logo-sub">Aditya Barve </span>
        </div>
        <div class="header__main">
          <ul class="header__links">
            <li class="header__link-wrapper">
              <a href="/" class="header__link"> Home </a>
            </li>
            <li class="header__link-wrapper">
              <a href="#about" class="header__link">About </a>
            </li>
            <li class="header__link-wrapper">
              <a href="#projects" class="header__link">
                Projects
              </a>
            </li>
            <li class="header__link-wrapper">
              <a href=".#contact" class="header__link"> Contact </a>
            </li>
            <li class="header__link-wrapper">
            <a
                href="/Aditya_Barve.pdf"
                download
                style={{
                  display: "inline-block",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  padding: "19px 20px",
                  download : "resume.pdf",
                  textDecoration: "none",
                  fontSize: "16px",
                  borderRadius: "5px",
                  transition: "background-color 0.3s ease",
                }}
          >
                Download Resume
          </a>
            </li>
          </ul>
          <div class="header__main-ham-menu-cont" onClick={toggleMenu}>
            <img
              src="https://i.ibb.co/n1ZGKTP/ham-menu.png"
              alt="hamburger menu"
              class={`header__main-ham-menu ${isMenuOpen ? "d-none" : ""}`}
            /> 
            <img
              src="https://i.ibb.co/drhgS1c/ham-menu-close.png"
              alt="hamburger menu close"
              
              class={`header__main-ham-menu-close ${!isMenuOpen ? "d-none" : ""}`}
            />
            
          </div>
        </div>
      </div>
      <div class={`header__sm-menu ${isMenuOpen ? "header__sm-menu--active" : ""}`}>
        <div class="header__sm-menu-content">
          <ul class="header__sm-menu-links">
            <li class="header__sm-menu-link">
              <a href="./"> Home </a>
            </li>

            <li class="header__sm-menu-link">
            <Link to="#about">About</Link>
            </li>

            <li class="header__sm-menu-link">
            <Link to="#projects">Projects</Link>
            </li>

            <li class="header__sm-menu-link">
                <Link to="#contact">Contact</Link>
            </li>
            <li class="header__sm-menu-link">
              <a
                href="/Aditya Resume For web development.pdf"
                download
              >
                Download Resume
              </a>
            </li>


          </ul>
        </div>
      </div>
        </header>
        <section class="home-hero">
      <div class="home-hero__content">
        <h1 class="heading-primary">HEY, I'M Aditya Barve</h1>
        <div class="home-hero__info">
          <p class="text-primary">
          A Result-Oriented Web Developer building and managing Websites and Web Applications that leads to the success of the overall product
          </p>
        </div>
        <div class="home-hero__cta">
          <a href="#projects" class="btn btn--bg">Projects</a>
        </div>
      </div>
      <div class="home-hero__socials">
        <div class="home-hero__social">
          <Link to="https://www.linkedin.com/in/aditya-barve-6b52541a9/" class="home-hero__social-icon-link">
            <img
              src="https://i.ibb.co/q7SHNTp/linkedin-ico.png"
              alt="icon"
              class="home-hero__social-icon"
            />
          </Link>
        </div>
        <div class="home-hero__social">
          <a href="https://github.com/adityabarve1" class="home-hero__social-icon-link">
            <img
              src="https://i.ibb.co/zZHC5Jt/github-ico.png"
              alt="icon"
              class="home-hero__social-icon"
            />
          </a>
        </div>
        <div class="home-hero__social">
          <a href="https://x.com/barve_aditya11" class="home-hero__social-icon-link">
            <img
              src="https://i.ibb.co/DwV2pC4/twitter-ico.png"
              alt="icon"
              class="home-hero__social-icon"
            />
          </a>
        </div>
        
      </div>
      <div class="home-hero__mouse-scroll-cont">
        <div class="mouse"></div>
      </div>
        </section>
        <section id="about" class="about sec-pad">
      <div class="main-container">
        <h2 class="heading heading-sec heading-sec__mb-med">
          <span class="heading-sec__main">About Me</span>
          <span class="heading-sec__sub">
          Aspiring Computer Engineering student eager to apply academic knowledge to real-world challenges in a dynamic
          tech environment
          </span>
        </h2>
        <div class="about__content">
          <div class="about__content-main">
            <h3 class="about__content-title">Get to know me!</h3>
            <div class="about__content-details">
              <p class="about__content-details-para">
                Hey! It's
                <strong> Aditya Barve </strong>
                and I'm a <strong> Full Stack Web Developer </strong> located in
                Pune. From designing interactive
                <strong> college visual tours </strong>
                 to building 
                <strong> coding games for learning </strong>
                , I strive to deliver creative solutions that merge functionality with aesthetics.
              </p>
              <p class="about__content-details-para">
              I’ve worked on projects like college placement portals, event-organizing platforms, and alumni networks with chat and virtual tours, always focusing on creating seamless user experiences. With every project, my goal is to turn ideas into impactful, high-quality digital products. 
              <br></br>
              Let’s build something incredible together!
              <br></br>
              <br></br>
              Feel free to
                <strong> contact </strong> me here.
              </p>
            </div>
            <a href="./#contact" class="btn btn--med btn--theme dynamicBgClr"
              >Contact</a>
          </div>
          <div class="about__content-skills">
            <h3 class="about__content-title">My Skills</h3>
            <div class="skills">
              <div class="skills__skill">HTML</div>
              <div class="skills__skill">CSS</div>
              <div class="skills__skill">JavaScript</div>
              <div class="skills__skill">React</div>
              <div class="skills__skill">Tailwind</div>
              <div class="skills__skill">GIT</div>
              <div class="skills__skill">Node.JS</div>
              <div class="skills__skill">Express.JS</div>
              <div class="skills__skill">MongoDB</div>
              <div class="skills__skill">Vercel</div>
              <div class="skills__skill">Postman</div>
              <div class="skills__skill">MySQL</div>
              <div class="skills__skill"> MongodbCompass </div>
              <div class="skills__skill">DSA (C++)</div>
            </div>
          </div>
        </div>
      </div>
        </section>
        <section id="projects" class="projects sec-pad">
      <div class="main-container">
        <h2 class="heading heading-sec heading-sec__mb-bg">
          <span class="heading-sec__main">Projects</span>
          <span class="heading-sec__sub">
          Here you will find some of the personal and clients projects that I created with each project containing its own project link
          </span>
        </h2>

        <div class="projects__content">
          <div class="projects__row">
            <div class="projects__row-img-cont">

              <img
                src="https://i.ibb.co/cX1kf7F/Untitled-design.png"
                alt="Software Screenshot"
                class="projects__row-img"
                loading="lazy"
              />
            </div>
            <div class="projects__row-content">
              <h3 class="projects__row-content-title">Fastest Finger First</h3>
              <p class="projects__row-content-desc">
              Developed a web application for a college fest that 
              allows participants to solve coding challenges by arranging
               jumbled lines of code using a drag-and-drop interface
              </p>
              <a
                href="https://codefiesta-fff.vercel.app"
                class="btn btn--med btn--theme dynamicBgClr"
                target="_blank"
                >View Project</a>
            </div>
          </div>
          <div class="projects__row">
            <div class="projects__row-img-cont">
              <img
                src="https://i.ibb.co/VNbRx0t/Untitled-design-2.png"
                alt="Software Screenshot"
                class="projects__row-img"
                loading="lazy"
              />
            </div>
            <div class="projects__row-content">
              <h3 class="projects__row-content-title">Training and Placement Portal </h3>
              <p class="projects__row-content-desc">
              • Engineered a user-friendly placement portal that integrated real-
                time job postings, enabling students to engage with employers directly.
                
              </p>
              <a
                href="https://github.com/adityabarve1/training-and-placement-website-Using-PHP.git"
                class="btn btn--med btn--theme dynamicBgClr"
                target="_blank"
                >View Project</a>
            </div>
          </div>
          <div class="projects__row">
            <div class="projects__row-img-cont">
              <img
                src="https://i.ibb.co/Jq5BvHd/Untitled-design-3.png"
                alt="Software Screenshot"
                class="projects__row-img"
                loading="lazy"
              />
            </div>
            <div class="projects__row-content">
              <h3 class="projects__row-content-title">PortFolio Website</h3>
              <p class="projects__row-content-desc">
              PortFolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally
                
              </p>
              <a
                href="#"
                class="btn btn--med btn--theme dynamicBgClr"
                target="_blank"
                >View Project</a>
            </div>
          </div>
        </div>
      </div>
        </section>
        <section id="contact" class="contact sec-pad dynamicBg">
      <div class="main-container">
        <h2 class="heading heading-sec heading-sec__mb-med">
          <span class="heading-sec__main heading-sec__main--lt">Contact</span>
          <span class="heading-sec__sub heading-sec__sub--lt">
            Feel free to Contact me by submitting the form below and I will get back to you as soon as possible
          </span>
        </h2>
        <div class="contact__form-container">
          <form onSubmit={handleSubmit} class="contact__form">
            <div class="contact__form-field">
              <label class="contact__form-label" for="name">Name</label>
              <input
                required
                placeholder="Enter Your Name"
                type="text"
                class="contact__form-input"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div class="contact__form-field">
              <label class="contact__form-label" for="email">Email</label>
              <input
                required
                placeholder="Enter Your Email"
                type="email"
                class="contact__form-input"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div class="contact__form-field">
              <label class="contact__form-label" htmlFor="message">Message</label>
              <textarea
                required
                cols="30"
                rows="10"
                class="contact__form-input"
                placeholder="Enter Your Message"
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" class="btn btn--theme contact__btn">
              Submit
            </button>
            {formStatus === 'success' && <p className="form-status success">Message sent successfully!</p>}
            {formStatus === 'error' && <p className="form-status error">Something went wrong. Please try again.</p>}
          </form>
        </div>
      </div>
        </section>
        <footer class="main-footer">
      <div class="main-container">
        <div class="main-footer__upper">
          <div class="main-footer__row main-footer__row-1">
            <h2 class="heading heading-sm main-footer__heading-sm">
              <span>Social</span>
            </h2>
            <div class="main-footer__social-cont">
            <div class="home-hero__social">
              <Link to="https://www.linkedin.com/in/aditya-barve-6b52541a9/" class="home-hero__social-icon-link">
                <img
                  src="https://i.ibb.co/q7SHNTp/linkedin-ico.png"
                  alt="icon"
                  class="home-hero__social-icon"
                />
              </Link>
            </div>
              
            <div class="home-hero__social">
          <a href="https://github.com/adityabarve1" class="home-hero__social-icon-link">
            <img
              src="https://i.ibb.co/zZHC5Jt/github-ico.png"
              alt="icon"
              class="home-hero__social-icon"
            />
          </a>
        </div>
        <div class="home-hero__social">
          <a href="https://x.com/barve_aditya11" class="home-hero__social-icon-link">
            <img
              src="https://i.ibb.co/DwV2pC4/twitter-ico.png"
              alt="icon"
              class="home-hero__social-icon"
            />
          </a>
        </div>
        
            </div>
          </div>
          <div class="main-footer__row main-footer__row-2">
            <h4 class="heading heading-sm text-lt">Aditya Barve</h4>
            <p class="main-footer__short-desc">
            A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product
            </p>
          </div>
        </div>

        <div class="main-footer__lower">
          &copy; Copyright 2024. Made by
          <a rel="noreferrer" target="_blank" href="https://AdityaBarve.com"
            >Aditya Barve</a>
        </div>
      </div>
        </footer>
    </div>
    )
}

export default HomePage;
