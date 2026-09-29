import { useEffect, useRef } from "react";
import {
  LuArrowDownRight,
  LuArrowUpRight,
  LuGithub,
  LuLinkedin,
  LuMail,
} from "react-icons/lu";
import "./portfolio-continuation.css";

const email = "rafafazli7@gmail.com";
const contact = (subject) =>
  `mailto:${email}?subject=${encodeURIComponent(subject)}`;

const projects = [
  {
    number: "01",
    name: "ReGreen",
    category: "LAND INTELLIGENCE / AI",
    description:
      "An AI-powered concept for understanding land conditions and recommending thoughtful restoration paths.",
    tags: ["AI", "Data Visualization", "Web App"],
    preview: "regreen",
  },
  {
    number: "02",
    name: "SMPL",
    category: "SMART FARMING / IOT",
    description:
      "A smarter way to keep an eye on catfish farming, from water conditions to automated feeding.",
    tags: ["Dashboard", "IoT", "Monitoring"],
    preview: "smpl",
  },
  {
    number: "03",
    name: "E-Commerce Platform",
    category: "COMMERCE / FULLSTACK",
    description:
      "A B2B commerce experience built to make product discovery and ordering feel a little less complicated.",
    tags: ["Laravel", "E-Commerce", "UI Design"],
    preview: "commerce",
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

function ProjectPreview({ kind }) {
  if (kind === "regreen") {
    return (
      <div
        className="preview-window preview-regreen"
        aria-label="Illustrative ReGreen land intelligence interface"
      >
        <div className="preview-chrome">
          <span />
          <span />
          <span />
          <small>regreen / overview</small>
        </div>
        <div className="green-interface">
          <aside className="green-sidebar">
            <strong>
              re<span>green</span>.
            </strong>
            <i />
            <i />
            <i />
            <i />
          </aside>
          <div className="green-content">
            <div className="green-topline">
              <small>LAND OVERVIEW</small>
              <span>↗ Explore region</span>
            </div>
            <h3>
              Make space
              <br />
              for <em>growth.</em>
            </h3>
            <p>Data-led insights for a greener tomorrow.</p>
            <div className="green-dashboard">
              <div className="green-map">
                <span className="map-patch patch-one" />
                <span className="map-patch patch-two" />
                <span className="map-patch patch-three" />
                <span className="map-pin">✳</span>
                <small>RESTORATION ZONE / 01</small>
              </div>
              <div className="green-metrics">
                <small>LAND HEALTH</small>
                <strong>
                  78<span>%</span>
                </strong>
                <div className="metric-track">
                  <i />
                </div>
                <small>Recommended action</small>
                <b>Restore native canopy ↗</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (kind === "smpl") {
    return (
      <div
        className="preview-window preview-smpl"
        aria-label="Illustrative SMPL fish farm monitoring interface"
      >
        <div className="preview-chrome">
          <span />
          <span />
          <span />
          <small>smpl / control room</small>
        </div>
        <div className="smpl-interface">
          <div className="smpl-top">
            <strong>
              smpl<span>.</span>
            </strong>
            <small>● &nbsp;SYSTEM RUNNING</small>
          </div>
          <div className="smpl-intro">
            <small>FARM OVERVIEW / POND 01</small>
            <h3>
              A clearer view
              <br />
              of your farm<span>.</span>
            </h3>
          </div>
          <div className="smpl-panels">
            <div className="smpl-main-panel">
              <small>WATER TEMPERATURE</small>
              <strong>
                28.4<span>°C</span>
              </strong>
              <div className="smpl-chart">
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>
              <span>Stable over the last 24 hours</span>
            </div>
            <div className="smpl-side-panels">
              <div>
                <small>WATER QUALITY</small>
                <strong>Healthy ↗</strong>
                <span>All readings normal</span>
              </div>
              <div>
                <small>NEXT FEED</small>
                <strong>16:30</strong>
                <span>Automatic schedule</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div
      className="preview-window preview-commerce"
      aria-label="Illustrative B2B commerce storefront interface"
    >
      <div className="preview-chrome">
        <span />
        <span />
        <span />
        <small>commerce / storefront</small>
      </div>
      <div className="commerce-interface">
        <div className="commerce-top">
          <strong>
            form & function<span>®</span>
          </strong>
          <span>Shop &nbsp;&nbsp; Collections &nbsp;&nbsp; About</span>
          <small>Cart (02)</small>
        </div>
        <div className="commerce-editorial">
          <small>THE WORKSPACE EDIT / 001</small>
          <h3>
            Objects for
            <br />
            better work.
          </h3>
          <p>Considered essentials for spaces that create.</p>
          <span>Explore the collection ↗</span>
        </div>
        <div className="commerce-product product-one">
          <div className="product-shape lamp">
            <i />
          </div>
          <small>01 / DESK LIGHT</small>
        </div>
        <div className="commerce-product product-two">
          <div className="product-shape chair">
            <i />
          </div>
          <small>02 / STUDIO CHAIR</small>
        </div>
      </div>
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
                <ProjectPreview kind={project.preview} />
                <span className="preview-caption">
                  INTERFACE CONCEPT / {project.name.toUpperCase()}
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
              More than a screen. A little look at the thinking behind ReGreen.
            </p>
          </div>
        </div>
        <div className="case-layout">
          <div className="case-visual reveal">
            <div className="case-visual-top">
              <span>FIELD NOTES / 001</span>
              <span>REGREEN ↗</span>
            </div>
            <div className="case-landscape" aria-hidden="true">
              <span className="landscape-sun" />
              <span className="landscape-hill hill-back" />
              <span className="landscape-hill hill-front" />
              <span className="landscape-lines" />
            </div>
            <div className="case-visual-bottom">
              <strong>
                Restoring what
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
                  Restoration decisions need a clearer picture of local
                  conditions and opportunities.
                </p>
              </div>
            </li>
            <li>
              <span>02 / IDEA</span>
              <div>
                <h3>Turn data into direction.</h3>
                <p>
                  Bring land insights and recommendations together in one
                  approachable interface.
                </p>
              </div>
            </li>
            <li>
              <span>03 / BUILD</span>
              <div>
                <h3>Make the complex usable.</h3>
                <p>
                  Shape the experience around readable data, clear navigation,
                  and actionable next steps.
                </p>
              </div>
            </li>
            <li>
              <span>04 / RESULT</span>
              <div>
                <h3>A place to begin.</h3>
                <p>
                  A product concept that makes restoration insights easier to
                  explore and understand.
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
        <div className="reveal">
          <SectionLabel number="08">LET'S CONNECT</SectionLabel>
          <p className="contact-kicker">HAVE A PROJECT IN MIND?</p>
          <h2 id="contact-title">
            Have an idea?
            <br />
            <em>Let's build something.</em>
          </h2>
          <div className="contact-bottom">
            <p>
              I'm always interested in working on interesting products,
              experiments, and digital experiences.
            </p>
            <a className="talk-button" href={contact("Let's build something")}>
              <span>Let's Talk</span>
              <LuArrowUpRight aria-hidden="true" />
            </a>
          </div>
          <div className="contact-links">
            <a
              href="https://github.com/Kingjule2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LuGithub aria-hidden="true" /> GitHub{" "}
              <LuArrowUpRight aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/search/results/people/?keywords=Rafa%20Fazli"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Search for Rafa Fazli on LinkedIn"
            >
              <LuLinkedin aria-hidden="true" /> LinkedIn{" "}
              <LuArrowUpRight aria-hidden="true" />
            </a>
            <a href={`mailto:${email}`}>
              <LuMail aria-hidden="true" /> Email{" "}
              <LuArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
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
