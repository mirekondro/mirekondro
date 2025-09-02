import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram } from 'react-icons/fa6'
import './App.css'

interface ClickableBlockProps {
  logo: string;
  title: string;
  subtitle: string;
  subtitle2?: string;
  onClick: () => void;
}

function ClickableBlock({ logo, title, subtitle, subtitle2, onClick }: ClickableBlockProps) {
  return (
    <div className="clickable-block" onClick={onClick}>
      <img src={logo} alt={title} className="logo" />
      <div className="text">
        <h3>{title}</h3>
        <p>{subtitle}</p>
        {subtitle2 && <p className="subtitle2">{subtitle2}</p>}
      </div>
    </div>
  )
}

function App() {
  return (
    <>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '32px' }}>

        <div className="social-icons">
          <a href="https://github.com/mirekondro" target="_blank" rel="noopener noreferrer">
            <FaGithub size={20} />
          </a>
          <a href="https://linkedin.com/in/mirekondro" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={20} />
          </a>
          <a href="https://x.com/leaftys" target="_blank" rel="noopener noreferrer">
            <FaXTwitter size={20} />
          </a>
          <a href="https://instagram.com/mirekondro" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={20} />
          </a>
        </div>

        <h1 className='name'>Miroslav Ondroušek</h1>
        <h2>Software and Web Developer & Designer</h2>
        <p>
          I create modern web apps and interfaces that combine smart coding with thoughtful design, turning ideas into seamless digital experiences.
        </p>

        <h1 className='projects'>What projects I worked on</h1>
        <div className='projects-list'>
          <ClickableBlock
            logo="/weroof-white.png"
            title="WeRoof s.r.o."
            subtitle="Website and visual identity for a roofing company."
            onClick={() => window.open("https://weroof.cz", "_blank")}
          />
          <ClickableBlock
            logo="/feedy.png"
            title="Feedy - Food Delivery App"
            subtitle="Final school project. Website and mobile app for food delivery service."
            onClick={() => window.open("https://feedy-three.vercel.app/", "_blank")}
          />
          <ClickableBlock
            logo="/lastel.png"
            title="LASTEL POTS s.r.o."
            subtitle="Vouchers for company selling pots and more."
            onClick={() => window.open("https://lastel.cz/", "_blank")}
          />
        </div>

        <h1 className='work'>Work experience</h1>
        <div className='experience-list'>
          <ClickableBlock
            logo="/blogic.png"
            title="Business Logic s.r.o."
            subtitle="Intership 2023 - Fullstack Developer (C# .NET MVC)"
            subtitle2="Intership 2024 - Mobile App Developer (React Native)"
            onClick={() => window.open("https://www.blogic.cz/", "_blank")}
          />
          <ClickableBlock
            logo="/zff.jpg"
            title="Zlín Film Festival"
            subtitle="Volunteer 2022, Virtual Reality Department"
            onClick={() => window.open("https://www.zlinfest.cz/", "_blank")}
          />
        </div>

        <h1 className='contact'>Contact</h1>
        <p>
          Got a project in mind or want to collaborate? Feel free to reach out – I’d love to hear from you! 
          You can email me at 
          <a href="mailto:mirekondro@post.cz"> mirekondro@post.cz </a>
          or call me at 
          <a href="tel:+420604164894"> +420 604 164 894</a> (🇨🇿)
          or 
          <a href="tel:+4531814408"> +45 31814408</a> (🇩🇰).
        </p>
      </div>
    </>
  )
}

export default App