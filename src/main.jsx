import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight, BrainCircuit, Code2, Database, Github, Linkedin,
  Mail, MapPin, Menu, X, ExternalLink, Sparkles, ChevronDown
} from "lucide-react";
import "./styles.css";

const profile = {
  name: "Avanish Ojha",
  email: "avanish.00@zohomail.in",
  location: "Noida, India",
  phone: "+91 75591 55702",
  linkedin: "https://www.linkedin.com/in/avanishojha08/",
  github: "https://github.com/Avanish08/",
};

const skills = [
  { title: "Python & Programming", icon: Code2, items: ["Python", "JavaScript ES6+", "SQL", "HTML5", "CSS3"] },
  { title: "AI & Machine Learning", icon: BrainCircuit, items: ["Machine Learning", "Supervised Learning", "Unsupervised Learning", "Classification", "Regression", "Model Evaluation"] },
  { title: "Computer Vision", icon: Sparkles, items: ["YOLOv8", "Object Detection", "Number Plate Detection", "Movement Detection", "Image Processing"] },
  { title: "Data Science", icon: Database, items: ["Pandas", "NumPy", "Scikit-learn", "EDA", "Data Cleaning", "Data Visualization"] },
  { title: "AI Fundamentals", icon: BrainCircuit, items: ["Artificial Intelligence", "Deep Learning Fundamentals", "NLP Fundamentals", "Generative AI"] },
  { title: "Web & Backend", icon: Code2, items: ["React.js", "Node.js", "Express.js", "REST APIs", "MongoDB"] },
  { title: "Tools", icon: Database, items: ["Git", "GitHub", "Jupyter", "Google Colab", "VS Code", "Postman"] },
];

const projects = [
  {
    title: "Number Plate Detection",
    type: "AI / Computer Vision",
    description: "A Python-based computer vision project focused on detecting and locating vehicle number plates from visual input.",
    tags: ["Python", "Computer Vision", "Object Detection"],
    github: "https://github.com/Avanish08/Number-Plate-dect",
  },
  {
    title: "Object & Movement Detection using YOLOv8",
    type: "AI / Computer Vision",
    description: "An object and movement detection project using YOLOv8 to identify objects in visual input and explore movement detection.",
    tags: ["Python", "YOLOv8", "Computer Vision", "Object Detection"],
    github: "https://github.com/Avanish08/object-movent-dection-using-yolov8",
  },
  {
    title: "VAP MERN Project",
    type: "Full-Stack Application",
    description: "A collaborative full-stack application built with the MERN stack, featuring client-server architecture, REST API communication and MongoDB-backed functionality.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    github: "https://github.com/Avanish08/VAP_MERN_PROJECT",
  },
  {
    title: "Attendance Management System",
    type: "Web Application",
    description: "A responsive attendance management interface with structured forms, data presentation and a foundation for future analytics-driven functionality.",
    tags: ["HTML5", "CSS3", "JavaScript", "Data Handling"],
    github: "https://github.com/Avanish08/Attendance-System",
  },
];

const experience = [
  {
    company: "Ashiyana Dream Home Pvt. Ltd.",
    role: "Graphic Designer Intern",
    dates: "Jan 2025 — Apr 2025",
    bullets: [
      "Created digital and print marketing materials for business and client requirements.",
      "Collaborated with teams to develop visual concepts and maintain brand consistency.",
      "Worked with Photoshop, Illustrator and InDesign while managing multiple deadlines.",
      "Strengthened attention to detail, communication, creativity and problem-solving skills."
    ]
  },
  {
    company: "PHN Technology Pvt. Ltd.",
    role: "Web Development Intern",
    dates: "Apr 2023 — Jun 2023",
    bullets: [
      "Developed responsive web pages using HTML5, CSS3 and JavaScript.",
      "Assisted with UI components, layouts, debugging and website maintenance.",
      "Integrated REST APIs and helped implement application features.",
      "Used Git and GitHub for version control and participated in testing and optimization."
    ]
  }
];

function App() {
  const [menu, setMenu] = React.useState(false);

  const closeMenu = () => setMenu(false);

  return (
    <div className="site">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="nav">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">AO</span>
          <span>AVANISH<span className="accent">.</span></span>
        </a>

        <button className="menu-btn" onClick={() => setMenu(!menu)} aria-label="Toggle navigation">
          {menu ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={menu ? "nav-links open" : "nav-links"}>
          {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
          ))}
          <a className="nav-cta" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn <ArrowUpRight size={16} />
          </a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <div className="eyebrow"><span className="pulse" /> Available for opportunities</div>
            <h1>Building practical <span>AI & Computer Vision</span> solutions.</h1>
            <p className="hero-text">
              I'm <strong>Avanish Ojha</strong>, an entry-level AI/ML Developer focused on Python, Machine Learning,
              Computer Vision and practical AI applications.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn primary">Explore my work <ArrowUpRight size={18} /></a>
              <a href={`mailto:${profile.email}`} className="btn secondary">Let's connect <Mail size={17} /></a>
            </div>
            <div className="quick-links">
              <a href={profile.github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a>
              <span><MapPin size={17}/> Noida, India</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="AI developer visual">
            <div className="orbit orbit-a" />
            <div className="orbit orbit-b" />
            <div className="core">
              <div className="core-icon"><BrainCircuit size={58} /></div>
              <span>AI / ML</span>
              <small>Developer</small>
            </div>
            <div className="float-card card-python"><b>PY</b><span>Python</span></div>
            <div className="float-card card-data"><b>01</b><span>Data → Insight</span></div>
            <div className="float-card card-api"><b>API</b><span>Build · Integrate · Scale</span></div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-label">01 / About</div>
          <div className="about-grid">
            <div>
              <h2>AI/ML focus.<br/><span>Software foundation.</span></h2>
            </div>
            <div className="about-copy">
              <p>
                I’m an engineering graduate focused on growing as an <strong>AI/ML Developer</strong>.
                My software-development experience gives me a practical foundation for building and integrating intelligent applications.
              </p>
              <p>
                I’m building my capabilities across <strong>Python, machine learning, data analysis,
                AI, APIs and modern web technologies</strong>, with a strong interest in solving real-world
                problems through automation and intelligent systems.
              </p>
              <div className="stats">
                <div><strong>2026</strong><span>B.E. Graduate</span></div>
                <div><strong>CV</strong><span>Computer Vision</span></div>
                <div><strong>AI/ML</strong><span>Career focus</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-label">02 / Skills</div>
          <div className="section-heading">
            <h2>My <span>technical toolkit.</span></h2>
            <p>A growing stack across machine learning, data, AI and software engineering.</p>
          </div>
          <div className="skills-grid">
            {skills.map(({ title, icon: Icon, items }) => (
              <article className="skill-card" key={title}>
                <div className="skill-icon"><Icon size={21}/></div>
                <h3>{title}</h3>
                <div className="tags">{items.map(x => <span key={x}>{x}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-label">03 / Projects</div>
          <div className="section-heading">
            <h2>Selected <span>work.</span></h2>
            <p>AI/ML projects first, supported by a strong foundation in full-stack software development.</p>
          </div>
          <div className="projects">
            {projects.map((p, i) => (
              <article className="project-card" key={p.title}>
                <div className="project-number">0{i + 1}</div>
                <div className="project-content">
                  <span className="project-type">{p.type}</span>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <div className="tags">{p.tags.map(x => <span key={x}>{x}</span>)}</div>
                  <div className="project-links">
                    <a href={p.github} target="_blank" rel="noreferrer"><Github size={16}/> GitHub</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-label">04 / Experience</div>
          <div className="section-heading">
            <h2>Where I've <span>worked.</span></h2>
          </div>
          <div className="timeline">
            {experience.map((job) => (
              <article className="timeline-item" key={job.company}>
                <div className="timeline-dot" />
                <div className="timeline-meta"><span>{job.dates}</span></div>
                <div className="timeline-content">
                  <h3>{job.role}</h3>
                  <h4>{job.company}</h4>
                  <ul>{job.bullets.map(b => <li key={b}>{b}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section education">
          <div className="section-label">05 / Education</div>
          <div className="education-card">
            <div className="degree-icon"><BrainCircuit size={30}/></div>
            <div>
              <span className="project-type">Bachelor of Engineering</span>
              <h2>Vishwaniketan's iMEET</h2>
              <p>Graduated June 2026 · CGPA 6.91 / 10</p>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="contact-box">
            <div className="section-label">06 / Contact</div>
            <h2>Let's build something <span>intelligent.</span></h2>
            <p>I'm currently available for entry-level AI/ML, Computer Vision, Machine Learning, Data Science and Python development opportunities.</p>
            <a className="btn primary" href={`mailto:${profile.email}`}>Start a conversation <ArrowUpRight size={18}/></a>
            <div className="contact-details">
              <a href={`mailto:${profile.email}`}><Mail size={17}/> {profile.email}</a>
              <span><MapPin size={17}/> {profile.location}</span>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Avanish Ojha</span>
        <span>AI/ML Developer · Built with React</span>
      </footer>

      <a href="#home" className="back-top" aria-label="Back to top"><ChevronDown size={19}/></a>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
