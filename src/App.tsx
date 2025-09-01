import { useState } from 'react'
import './App.css'

function ClickableBlock({ logo, title, subtitle, subtitle2, onClick }) {
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
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '32px' }}>
        <h1>Miroslav Ondroušek</h1>

        <h2>Software and Web Developer & Designer</h2>

        <p>
          I create modern web apps and interfaces that combine smart coding with thoughtful design, turning ideas into seamless digital experiences.
        </p>

        <h1>What projects I worked on</h1>
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
        </div>

        <h1>Work experience</h1>
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

          <h1>Contact</h1>
          <p>
  Got a project in mind or want to collaborate? Feel free to reach out – I’d love to hear from you! 
  You can email me at 
  <a href="mailto:mirekondro@post.cz"> mirekondro@post.cz</a>
  or call me at 
  <a href="tel:+420604164894"> +420 604 164 894</a> (Czech Republic) 
  or 
  <a href="tel:+4531814408"> +45 31814408</a> (Denmark).
</p>

      </div>
    </>
  )
}

export default App
