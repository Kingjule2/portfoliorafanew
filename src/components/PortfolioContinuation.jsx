import { useEffect, useRef } from "react";
import {
  LuArrowDownRight,
  LuArrowUpRight,
  LuGithub,
  LuLinkedin,
  LuMail,
} from "react-icons/lu";
import "./portfolio-continuation.css";
import jadiduluImage from "../../assets/jadidulu.png";
import vclassImage from "../../assets/vclass.png";
import jagaAnabulPoster from "../../asetfoto/Poster Beranda.png";
import RocketLaunch from "./RocketLaunch.jsx";

const email = "rafafazli7@gmail.com";
const contact = (subject) =>
  `mailto:${email}?subject=${encodeURIComponent(subject)}`;

const projects = [
  {
    number: "01",
    name: "Jadidulu",
    category: "SOFTWARE HOUSE / PRODUCT STUDIO",
    description:
      "A software house I'm currently building to create thoughtful digital products and meaningful web experiences.",
    tags: ["Software House", "Product Design", "Web Development"],
    image: jadiduluImage,
    imageAlt: "Jadidulu homepage with an invitation to bring an app idea to life",
  },
  {
    number: "02",
    name: "Jaga Anabul",
    category: "DONATION PLATFORM / FREELANCE",
    description:
      "A donation platform for animal shelters, built to help people discover and support anabul care initiatives.",
    tags: ["Frontend", "Donation Platform", "Freelance"],
    image: jagaAnabulPoster,
    imageAlt: "Jaga Anabul poster reading Bersama, Kita Jaga Mereka with volunteers holding pets",
    poster: true,
  },
  {
    number: "03",
    name: "VClass",
    category: "EDUCATION PLATFORM / FREELANCE",
    description:
      "A freelance frontend project for a digital classroom experience that makes online learning easier to access and navigate.",
    tags: ["Frontend", "Education", "Freelance"],
    image: vclassImage,
    imageAlt: "V-Class landing page showing digital classroom tools and a live exam dashboard",
  },
];

function SectionLabel({ number, children }) {
  return (
    <p className="portfolio-eyebrow">
      <span className="portfolio-dot" aria-hidden="true" />
      {number} / {children}
    </p>
  );
}

function ProjectPreview({ project }) {
  return (
    <div className={`preview-window ${project.poster ? "preview-poster" : "preview-screenshot"}`}>
      <img src={project.image} alt={project.imageAlt} loading="lazy" decoding="async" />
    </div>
  );
}

function ProjectActions({ project }) {
  return (
    <div className="project-actions">
      <a
        className="project-action"
        href={contact(`Source code inquiry: ${project.name}`)}
        aria-label={`Request ${project.name} GitHub source`}
      >
        <LuGithub aria-hidden="true" /> Request GitHub{" "}
        <LuArrowUpRight aria-hidden="true" />
      </a>
      <a
        className="project-action"
        href={contact(`Demo inquiry: ${project.name}`)}
        aria-label={`Request a live demo of ${project.name}`}
      >
        Request Live Demo <LuArrowUpRight aria-hidden="true" />
      </a>
      <span className="project-availability">
        Project links not public · request access by email
      </span>
    </div>
  );
}

const capabilities = [
  [
    "01",
    "Frontend Development",
    "Building responsive and interactive web experiences.",
  ],
  [
    "02",
    "Interactive UI",
    "Creating interfaces with thoughtful motion and micro-interactions.",
  ],
  [
    "03",
    "API Integration",
    "Connecting frontend applications with real-world services and data.",
  ],
  [
    "04",
    "Dashboard Development",
    "Turning complex information into clean and usable interfaces.",
  ],
];

const journey = [
  ["01", "The first line", "Started learning web development."],
  ["02", "The foundations", "HTML, CSS & JavaScript."],
  ["03", "Beyond the browser", "Laravel & fullstack projects."],
  ["04", "A new focus", "React & TypeScript."],
  ["05", "Making it real", "Products & competition projects."],
  ["NOW", "What comes next", "Focused on frontend engineering."],
];

export default function PortfolioContinuation() {
  const root = useRef(null);

  useEffect(() => {
    if (
      !root.current ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const section = root.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px 40px 0px" },
    );
    section
      .querySelectorAll(".reveal")
      .forEach((element) => observer.observe(element));
    section.classList.add("is-animated");
    return () => observer.disconnect();
  }, []);

  return (
    <div className="continuation" ref={root}>
      <section
        className="selected-work portfolio-dark portfolio-section"
        id="work"
        aria-labelledby="work-title"
      >
        <div className="portfolio-section-head reveal">
          <SectionLabel number="03">SELECTED WORK</SectionLabel>
          <div className="portfolio-heading-row">
            <h2 id="work-title">
              Selected <em>Work.</em>
            </h2>
            <p>
              A selection of things I've designed, built, and probably
              over-engineered.
            </p>
          </div>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article
              className={`project-showcase ${project.number === "02" ? "project-reverse" : ""} reveal`}
              key={project.number}
            >
              <div className="project-visual">
                <ProjectPreview project={project} />
                <span className="preview-caption">
                  PROJECT VISUAL / {project.name.toUpperCase()}
                </span>
              </div>
              <div className="project-info">
                <div className="project-number">
                  <span>{project.number} / 03</span>
                  <span aria-hidden="true">↗</span>
                </div>
                <p className="project-category">{project.category}</p>
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <ul className="project-tags" aria-label="Technologies">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <ProjectActions project={project} />
              </div>
            </article>
          ))}
        </div>
        <div className="work-end">
          <span>GOOD WORK TAKES CURIOSITY.</span>
          <LuArrowDownRight aria-hidden="true" />
        </div>
      </section>

      <section
        className="case-study portfolio-light portfolio-section"
        id="case-study"
        aria-labelledby="case-title"
      >
        <div className="reveal">
          <SectionLabel number="04">BEHIND THE BUILD</SectionLabel>
          <div className="portfolio-heading-row">
            <h2 id="case-title">
              Behind <em>the Build.</em>
            </h2>
            <p>
              More than a screen. A little look at the thinking behind Jadidulu.
            </p>
          </div>
        </div>
        <div className="case-layout">
          <div className="case-visual reveal">
            <div className="case-visual-top">
              <span>FIELD NOTES / 001</span>
              <span>JADIDULU ↗</span>
            </div>
            <div className="case-landscape" aria-hidden="true">
              <span className="landscape-sun" />
              <span className="landscape-hill hill-back" />
              <span className="landscape-hill hill-front" />
              <span className="landscape-lines" />
            </div>
            <div className="case-visual-bottom">
              <strong>
                Building what
                <br />
                comes next.
              </strong>
              <span>LAND + DATA + POSSIBILITY</span>
            </div>
          </div>
          <ol className="case-steps reveal">
            <li>
              <span>01 / PROBLEM</span>
              <div>
                <h3>Start with the land.</h3>
                <p>
                  Good digital products start with a clear understanding of
                  people, context, and the problem worth solving.
                </p>
              </div>
            </li>
            <li>
              <span>02 / IDEA</span>
              <div>
                <h3>Turn data into direction.</h3>
                <p>
                  Bring strategy, design, and technology together in one
                  focused software house.
                </p>
              </div>
            </li>
            <li>
              <span>03 / BUILD</span>
              <div>
                <h3>Make the complex usable.</h3>
                <p>
                  Shape the experience around clear thinking, useful details,
                  and interfaces people want to use.
                </p>
              </div>
            </li>
            <li>
              <span>04 / RESULT</span>
              <div>
                <h3>A place to begin.</h3>
                <p>
                  A growing studio with room for better ideas and meaningful
                  products to take shape.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section
        className="capabilities portfolio-light portfolio-section"
        id="capabilities"
        aria-labelledby="capabilities-title"
      >
        <div className="reveal">
          <SectionLabel number="05">WHAT I DO</SectionLabel>
          <div className="portfolio-heading-row">
            <h2 id="capabilities-title">
              What I <em>Do.</em>
            </h2>
            <p>Somewhere between making it work and making it feel right.</p>
          </div>
        </div>
        <div className="capability-list">
          {capabilities.map(([number, title, description]) => (
            <div className="capability-row reveal" key={number}>
              <span className="capability-number">{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <LuArrowUpRight aria-hidden="true" />
            </div>
          ))}
        </div>
      </section>

      <section
        className="journey portfolio-dark portfolio-section"
        id="journey"
        aria-labelledby="journey-title"
      >
        <div className="reveal">
          <SectionLabel number="06">MY JOURNEY</SectionLabel>
          <div className="portfolio-heading-row">
            <h2 id="journey-title">
              My <em>Journey.</em>
            </h2>
            <p>
              One thing learned, then another. The best part is there’s always
              more.
            </p>
          </div>
        </div>
        <ol className="journey-list">
          {journey.map(([number, title, description]) => (
            <li className="journey-step reveal" key={number}>
              <span className="journey-marker" aria-hidden="true" />
              <span className="journey-number">{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
              <span className="journey-arrow" aria-hidden="true">
                ↗
              </span>
            </li>
          ))}
        </ol>
      </section>

      <section
        className="building portfolio-dark portfolio-section"
        id="building"
        aria-labelledby="building-title"
      >
        <div className="building-layout reveal">
          <div>
            <SectionLabel number="07">ON THE DESK</SectionLabel>
            <h2 id="building-title">
              Currently
              <br />
              <em>Building.</em>
            </h2>
            <p>
              Exploring better ways to build interactive, scalable and visually
              engaging web experiences.
            </p>
          </div>
          <div className="building-notes">
            <div className="building-status">
              <span className="portfolio-dot" aria-hidden="true" /> CURRENTLY
              BUILDING <span aria-hidden="true">↗</span>
            </div>
            <ul>
              <li>
                Advanced React interfaces <span>01</span>
              </li>
              <li>
                Interactive UI experiments <span>02</span>
              </li>
              <li>
                AI-powered web applications <span>03</span>
              </li>
              <li>
                Product-focused frontend development <span>04</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section
        className="contact-cta portfolio-light portfolio-section"
        id="contact"
        aria-labelledby="contact-title"
      >
        <RocketLaunch />
      </section>

      <footer className="portfolio-footer">
        <div className="footer-identity">
          <a href="#top">
            Rafa<span>↗</span>
          </a>
          <p>Frontend Developer</p>
        </div>
        <nav aria-label="Footer links">
          <a
            href="https://github.com/Kingjule2"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/search/results/people/?keywords=Rafa%20Fazli"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Search for Rafa Fazli on LinkedIn"
          >
            LinkedIn
          </a>
          <a href={`mailto:${email}`}>Email</a>
        </nav>
        <p className="footer-credit">Designed &amp; built by Rafa.</p>
      </footer>
    </div>
  );
}
