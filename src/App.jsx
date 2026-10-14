import './App.css';

const skills = {
  "Frontend": ["React.js", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Redux", "TanStack Query", "shadcn/ui"],
  "Backend & Data": ["Node.js", "Express.js", "FastAPI", "REST APIs", "MongoDB", "MySQL", "PostgreSQL"],
  "Tools & Workflow": ["Git", "GitHub", "Docker", "Postman", "Jira", "AWS Amplify", "Vite"],
  "Core Concepts": ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems", "Responsive UI", "API Integration"]
};
const projects = [
  {
    n: "01",
    title: "ApplyFlow",
    type: "Browser extension · AI product",
    desc: "A privacy-first job application assistant combining browser autofill with an AI-powered resume parsing workflow. It extracts structured profile details from PDF and DOCX resumes using a local LLM, validates the data, and helps users complete repetitive application forms while keeping profile data on-device.",
    tags: ["React", "TypeScript", "Chrome Extension", "Manifest V3", "Ollama", "Llama 3.2", "Zod"]
  },
  {
    n: "02",
    title: "FGH — E-commerce & AI Virtual Try-On",
    type: "Full-stack · E-commerce",
    desc: "Building an e-commerce platform with an admin dashboard connected to the customer-facing storefront. Products created in the dashboard appear on the live site, with direct routing between the storefront and admin experience. An AI-powered virtual try-on feature is planned, allowing shoppers to upload a photo and preview products on themselves.",
    tags: ["React", "TypeScript", "Node.js", "Product Management", "Admin Dashboard", "AI Try-On (planned)"]
  }
];
const journey = [
  {
    date: "Aug 2025 — Present",
    role: "Software Engineer",
    company: "Centralogic Consultancy Pvt. Ltd.",
    location: "Pune, Maharashtra",
    desc: "Worked end-to-end on Agent Deal Desk, a React.js and TypeScript commission and settlement calculation application, from development through production deployment. Implemented role-based access control in user role management, migrated 40+ modules to V1, standardized REST APIs, optimized API calls with TanStack Query, and wrote tests with Vitest, Jest, and React Testing Library while maintaining coverage above 70%.",
    tags: ["React.js", "TypeScript", "RBAC", "TanStack Query", "Vitest", "Jest", "REST APIs"]
  },
  {
    date: "Sept 2024 — July 2025",
    role: "Associate Software Developer",
    company: "RoboMQ Pvt. Ltd.",
    location: "Jaipur, Rajasthan",
    desc: "Contributed to a Retrieval-Augmented Generation (RAG) project within the first month, built a product guide feature for the company website and deployed it successfully, and collaborated with cross-functional teams in an Agile environment.",
    tags: ["Frontend Development", "Product Guide", "RAG", "Agile"]
  },
  {
    date: "May 2024 — July 2024",
    role: "React Developer Intern",
    company: "Celebal Technologies",
    location: "Jaipur, Rajasthan",
    desc: "Contributed to a production web application using React.js, debugged and resolved UI/UX issues, and collaborated with the team through Agile sprints and stand-ups.",
    tags: ["React.js", "UI/UX", "Agile", "Debugging"]
  }
];
function SectionTitle({ eyebrow, title, copy }) { return <div className="section-title"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{copy && <p>{copy}</p>}</div>; }
export default function App() {
 return <div className="site-shell">
  <header className="topbar"><a className="wordmark" href="#home">MS<span>.</span></a><nav><a href="#journey">Journey</a><a href="#projects">Projects</a><a href="#skills">Skills</a><a href="#about">About</a></nav><a className="top-cta" href="#contact">Let’s talk <span>↗</span></a></header>
  <main>
   <section className="hero section-wrap" id="home"><div className="hero-copy"><div className="availability"><span className="pulse"/> OPEN TO THE RIGHT OPPORTUNITY</div><p className="hero-kicker">HELLO, I'M</p><h1>Madhav<br/><span>Somani.</span></h1><h2>Frontend Developer <i>·</i> React.js Engineer</h2><p className="hero-description">I build meaningful digital experiences with React and modern JavaScript, driven by curiosity, a passion for solving problems, and the constant urge to get better. I learn fast, take ownership, and turn ideas into products people can actually use.</p><div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <span>↘</span></a><a className="text-link" href="/Madhav_Somani_Resume.pdf" target="_blank" rel="noreferrer">View resume ↗</a></div><div className="hero-meta"><span>BASED IN INDIA</span><span>REACT · UI ENGINEERING · PRODUCT THINKING</span></div></div><div className="hero-art" aria-label="Decorative graphic"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orbit orbit-three"/><div className="hero-monogram">M<span>.</span></div><div className="floating-card card-top"><span className="mini-dot"/> React.js <b>↗</b></div><div className="floating-card card-bottom"><span className="code-mark">&lt;/&gt;</span><div><b>Build. Refine.</b><small>Repeat with intent.</small></div></div><span className="art-index">PORTFOLIO / 2026</span></div></section>
   <div className="ticker" aria-label="Areas of focus"><div>{['FRONTEND ENGINEERING','REACT & NEXT.JS','DESIGN-MINDED DEVELOPMENT','ACCESSIBLE EXPERIENCES','FRONTEND ENGINEERING','REACT & NEXT.JS','DESIGN-MINDED DEVELOPMENT','ACCESSIBLE EXPERIENCES'].map((x,i)=><span key={i}>{x}<b>✳</b></span>)}</div></div>
   <section className="section-wrap journey section-block" id="journey"><SectionTitle eyebrow="01 / THE JOURNEY" title="Experience that shapes the craft." copy="A growing journey across product engineering, user interfaces, and solving real problems with code."/><div className="timeline">{journey.map((item,i)=><article className="timeline-item" key={item.company+item.date}><div className="timeline-date">{item.date}</div><div className="timeline-marker"><span/></div><div className="timeline-content"><div className="role-heading"><div><h3>{item.role}</h3><p className="company">{item.company} <span>· {item.location}</span></p></div><span className="role-number">0{i+1}</span></div><p className="body-copy">{item.desc}</p><div className="tag-list">{item.tags.map(t=><span key={t}>{t}</span>)}</div></div></article>)}</div></section>
   <section className="projects-section section-block" id="projects"><div className="section-wrap"><SectionTitle eyebrow="02 / SELECTED WORK" title="Ideas, built into things." copy="A few projects that reflect how I approach product problems — with curiosity, care, and a focus on the people using them."/><div className="project-grid">{projects.map(p=><article className="project-card" key={p.n}><div className="project-card-top"><span>PROJECT / {p.n}</span><span className="project-arrow">↗</span></div><div className={'project-visual visual-'+p.n}><span className="visual-label">{p.n}</span>{p.n==='01'?<div className="visual-window"><div className="window-dots"><i/><i/><i/></div><div className="window-line long"/><div className="window-line"/><div className="window-pill"/></div>:<div className="visual-table fgh-visual"><div className="fgh-product"><span>FGH</span><i/><i/><i/></div><div className="fgh-admin"><b>PRODUCTS</b><span/><span/><span/><em>+ Add product</em></div></div>}</div><p className="project-type">{p.type}</p><h3>{p.title}</h3><p className="project-description">{p.desc}</p><div className="tag-list">{p.tags.map(t=><span key={t}>{t}</span>)}</div></article>)}</div></div></section>
   <section className="section-wrap section-block skills-section" id="skills"><SectionTitle eyebrow="03 / TECHNICAL ARSENAL" title="Tools are a means.
Good experiences are the goal." copy="The technologies I reach for to build reliable, polished, and maintainable web products."/><div className="skills-grid">{Object.entries(skills).map(([category,items],i)=><div className="skill-group" key={category}><div className="skill-group-head"><span>0{i+1}</span><h3>{category}</h3></div><div className="skill-chips">{items.map(item=><span key={item}>{item}</span>)}</div></div>)}</div></section>
   <section className="about-section section-block" id="about"><div className="section-wrap about-layout"><div><SectionTitle eyebrow="04 / A LITTLE ABOUT ME" title="Curious by default."/><p className="about-copy">I'm a frontend developer who enjoys the space where thoughtful design meets useful engineering. I care about the small details like clear interactions, responsive layouts, accessible experiences, and code that the next person can understand.</p><p className="about-copy">Outside the editor, you'll find me travelling, discovering new places over chai, listening to music, dancing, or solving a coding problem just for the satisfaction of it.</p></div><div className="about-note"><span className="quote-mark">“</span><p>Make it work.<br/>Make it clear.<br/><em>Make it matter.</em></p><span className="note-caption">A PRINCIPLE I TRY TO BUILD BY</span></div></div></section>
   <section className="contact-section section-wrap section-block" id="contact"><div className="contact-panel"><div><span className="eyebrow">05 / YOUR TURN</span><h2>Have something<br/><span>good in mind?</span></h2><p>I'm open to conversations about frontend roles, interesting products, and collaborations. Let's build something useful.</p></div><div className="contact-links"><a href="mailto:somanimadhav8875@gmail.com">Email me <span>↗</span></a><a href="https://www.linkedin.com/in/madhav-somani-0b01a6261/" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a><a href="https://github.com/Somanimadhav" target="_blank" rel="noreferrer">GitHub <span>↗</span></a></div></div></section>
  </main><footer className="footer section-wrap"><a className="wordmark" href="#home">MS<span>.</span></a><p>Designed with intention. Built with React.</p><span>© {new Date().getFullYear()} MADHAV SOMANI</span></footer>
 </div>;
}
