import { LuGithub } from 'react-icons/lu';
import TechStack from './components/TechStack.jsx';
import PortfolioContinuation from './components/PortfolioContinuation.jsx';
import portrait from '../assets/portrait.png';

function Hero() {
  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Rafazli, back to top">RAFAZLI</a>
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#tools">Tools</a>
        </nav>
        <a className="contact-label" href="mailto:rafafazli7@gmail.com?subject=Let%27s%20talk">Let's talk <span aria-hidden="true">↗</span></a>
      </header>

      <section className="hero" id="top" aria-label="Frontend">
        <h1>FRONTEND</h1>
        <div className="sticker sticker-github" aria-hidden="true"><LuGithub /></div>
        <div className="sticker sticker-figma" aria-hidden="true">
          <svg viewBox="0 0 24 36" xmlns="http://www.w3.org/2000/svg"><path fill="#f24e1e" d="M6 0h6v12H6a6 6 0 0 1 0-12"/><path fill="#ff7262" d="M12 0h6a6 6 0 0 1 0 12h-6z"/><path fill="#a259ff" d="M6 12h6v12H6a6 6 0 0 1 0-12"/><circle fill="#1abcfe" cx="18" cy="18" r="6"/><path fill="#0acf83" d="M6 24h6v6a6 6 0 1 1-6-6"/></svg>
        </div>
        <div className="sticker sticker-react" aria-hidden="true">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="7" fill="#087e9b"/><ellipse cx="50" cy="50" rx="43" ry="16" stroke="#087e9b" strokeWidth="4"/><ellipse cx="50" cy="50" rx="43" ry="16" stroke="#087e9b" strokeWidth="4" transform="rotate(60 50 50)"/><ellipse cx="50" cy="50" rx="43" ry="16" stroke="#087e9b" strokeWidth="4" transform="rotate(120 50 50)"/></svg>
        </div>
        <div className="sticker sticker-js" aria-hidden="true"><span>JS</span></div>
        <img className="portrait" src={portrait} alt="Portrait of Rafazli" />
      </section>

      <section className="about" id="about" aria-labelledby="about-title">
        <div className="about-heading">
          <h2 id="about-title">A little<br />about me.</h2>
          <svg className="asterisk" viewBox="0 0 48 48" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M21 2h6l2 13 10-8 4 5-9 10 12 4-2 6-13-2 6 11-5 4-9-9-5 11-6-2 3-13-12 4-2-6 12-6-9-9 4-5 11 8z" fill="#e78770"/></svg>
        </div>
        <div className="about-copy">
          <p>Hi, I'm Rafazli, a frontend developer passionate about creating thoughtful digital experiences. I love bringing ideas to life through the web.</p>
          <p>My approach to every project is rooted in curiosity and attention to detail, creating interfaces that look good and feel good to use.</p>
        </div>
      </section>
    </>
  );
}

export default function App() {
  return (
    <main className="canvas">
      <Hero />
      <TechStack />
      <PortfolioContinuation />
    </main>
  );
}
