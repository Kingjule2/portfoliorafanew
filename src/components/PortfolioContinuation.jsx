import { useEffect, useRef, useState } from "react";
import {
  LuArrowDownRight,
  LuArrowUpRight,
  LuGithub,
} from "react-icons/lu";
import "./portfolio-continuation.css";
import jadiduluImage from "../../assets/jadidulu.png";
import vclassImage from "../../assets/vclass.png";
import jagaAnabulPoster from "../../asetfoto/Poster Beranda.png";
import { composeEmail } from "../contact.js";

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
        href={composeEmail(`Source code inquiry: ${project.name}`)}
        aria-label={`Request ${project.name} GitHub source`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <LuGithub aria-hidden="true" /> Request GitHub{" "}
        <LuArrowUpRight aria-hidden="true" />
      </a>
      <a
        className="project-action"
        href={composeEmail(`Demo inquiry: ${project.name}`)}
        aria-label={`Request a live demo of ${project.name}`}
        target="_blank"
        rel="noopener noreferrer"
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

// Launch once per mount when half the stage is visible; never take over page scroll.
// Reduced motion skips to the email CTA, which stays inert until the flight ends.
function RocketContact() {
  const stage = useRef(null);
  const [phase, setPhase] = useState("idle");

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finish = () => {
      if (motion.matches) {
        observer.disconnect();
        setPhase("complete");
      }
    };
    if (motion.matches || !("IntersectionObserver" in window)) {
      setPhase("complete");
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPhase("countdown");
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(stage.current);
    motion.addEventListener("change", finish);
    return () => {
      observer.disconnect();
      motion.removeEventListener("change", finish);
    };
  }, []);

  useEffect(() => {
    // One-shot launch: 1s hold, 350ms ignition, 1s camera follow, 650ms exit.
    // Tracking/exit durations match the transform transitions in the stylesheet.
    const sequence = {
      countdown: [1000, "shake"],
      shake: [350, "tracking"],
      tracking: [1000, "exit"],
      exit: [650, "complete"],
    };
    const next = sequence[phase];
    if (!next) return;
    const timer = window.setTimeout(() => setPhase(next[1]), next[0]);
    return () => window.clearTimeout(timer);
  }, [phase]);

  const ready = phase === "complete";

  return (
    <section
      className="contact-cta portfolio-light"
      id="contact"
      aria-label="Let's connect"
      data-phase={phase}
      ref={stage}
    >
      <div className="launch-header">
        <SectionLabel number="08">LET'S CONNECT</SectionLabel>
        <span className="launch-coordinate" aria-hidden="true">NEXT STOP / YOUR IDEA</span>
      </div>
      <div className="launch-scene" aria-hidden="true">
        <div className="launch-world">
          <div className="launch-sky" />
          <span className="launch-star star-one">+</span>
          <span className="launch-star star-two">+</span>
          <span className="launch-star star-three">+</span>
          <div className="launch-ground">
            <div className="launch-pad" />
            <div className="launch-smoke">
              <span /><span /><span /><span /><span /><span />
            </div>
          </div>
        </div>
        <div className="rocket-flight">
          <svg className="launch-rocket" viewBox="0 0 160 280" fill="none">
            <g className="rocket-flame">
              <path d="M62 193Q48 231 80 274Q112 231 98 193Z" fill="#8da777" />
              <path d="M71 195Q63 224 80 249Q97 224 89 195Z" fill="#e5edb7" />
            </g>
            <g stroke="#26352c" strokeWidth="3" strokeLinejoin="round">
              <path d="M54 124Q22 140 24 192L58 175M106 124Q138 140 136 192L102 175" fill="#8da777" />
              <path d="M61 179H99L96 199H64Z" fill="#26352c" />
              <path d="M80 12C48 39 42 92 49 144L58 183H102L111 144C118 92 112 39 80 12Z" fill="#faf8f2" />
              <path d="M80 12Q57 32 51 66H109Q103 32 80 12Z" fill="#a9bf93" />
              <path d="M98 72Q109 128 96 177" stroke="#d7ddd1" strokeWidth="7" />
              <circle cx="80" cy="99" r="23" fill="#a9bf93" />
              <circle cx="80" cy="99" r="16" fill="#263b36" />
              <path d="M72 94Q75 88 82 89" stroke="#f3f1ef" strokeLinecap="round" />
              <path d="M80 151V189" strokeLinecap="round" />
              <path d="M59 171H101" />
            </g>
          </svg>
        </div>
        <p className="launch-status">
          {phase === "idle" || phase === "countdown"
            ? "GREAT IDEAS START HERE."
            : phase === "shake"
              ? "READY FOR LIFTOFF."
              : "A LITTLE AMBITION. NO LIMITS."}
        </p>
      </div>
      <div className="blast-message" inert={!ready} aria-hidden={!ready}>
        <p className="blast-kicker">YOUR NEXT BIG THING</p>
        <h2 id="contact-title">ready to blast<br /><em>your idea?</em></h2>
        <a className="blast-button" href={composeEmail("Ready to blast my idea")} target="_blank" rel="noopener noreferrer">
          Contact me <LuArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

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

      <RocketContact />

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
          <a href={composeEmail("Hello Rafa")} target="_blank" rel="noopener noreferrer">Email</a>
        </nav>
        <p className="footer-credit">Designed &amp; built by Rafa.</p>
      </footer>
    </div>
  );
}
