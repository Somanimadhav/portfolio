import { useEffect } from 'react';
import './App.css';

const skills = {
  "Frontend": ["React.js", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Redux", "TanStack Query", "shadcn/ui"],
  "Backend & Data": ["Node.js", "Express.js", "FastAPI", "REST APIs", "MongoDB", "MySQL", "PostgreSQL"],
   "AI, Automation & Integrations": ["LLMs", "RAG", "LangChain", "LangGraph (learning/building)", "Prompt Engineering", "Workflow Automation", "REST APIs", "MCP (exploring)"],
  "Tools & Delivery": ["Git", "GitHub", "Docker", "Postman", "Jira", "AWS Amplify", "Vite", "Debugging", "Deployment"],
  "Engineering Foundations": ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems", "System Design", "API Integration"]
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
    title: "OpsPilot AI — Email & Workflow Automation",
    type: "FDE-style project · AI agents · In progress",
    desc: "An in-progress workflow automation concept focused on turning incoming emails and support requests into actionable work. The planned agent flow classifies intent, extracts key details, gathers context, drafts or routes responses, triggers follow-up tasks, and escalates cases when human approval is needed. The goal is to connect LLM reasoning with reliable tools and observable workflows—not just generate text.",
    tags: ["LLMs", "LangChain", "LangGraph (planned)", "Email Automation", "API Integrations", "Human-in-the-Loop", "Workflow Design"]
  },
  {
    n: "03",
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
 useEffect(() => {
  const sections = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
   sections.forEach((section) => section.classList.add('is-visible'));
   return undefined;
  }

  const observer = new IntersectionObserver((entries) => {
   entries.forEach((entry) => {
    if (entry.isIntersecting) {
     entry.target.classList.add('is-visible');
     observer.unobserve(entry.target);
    }
   });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  sections.forEach((section) => observer.observe(section));
  return () => observer.disconnect();
 }, []);

 return <div className="site-shell">
  <header className="topbar"><a className="wordmark" href="#home">MS<span>.</span></a><nav><a href="#journey">Journey</a><a href="#projects">Projects</a><a href="#skills">Skills</a><a href="#education">Education</a><a href="#about">About</a></nav><a className="top-cta" href="#contact">Let’s talk <span>↗</span></a></header>
  <main>
   <section className="hero section-wrap" id="home"><div className="hero-copy"><div className="availability"><span className="pulse"/> OPEN TO THE RIGHT OPPORTUNITY</div><p className="hero-kicker">HELLO, I'M</p><h1>Madhav<br/><span>Somani.</span></h1><h2>Forward Deployed Engineer <i>·</i> Product-minded Software Engineer</h2><p className="hero-description">I work at the intersection of customer problems, software engineering, and AI-enabled automation. With a strong frontend foundation and hands-on full-stack experience, I enjoy turning ambiguous requirements into useful workflows—integrating APIs, debugging across the stack, and iterating with the people who use the product.</p><div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <span>↘</span></a><a className="text-link" href="/Madhav_Somani_Resume.pdf" target="_blank" rel="noreferrer">View resume ↗</a></div><div className="hero-meta"><span>BASED IN INDIA</span><span>CUSTOMER PROBLEMS · API INTEGRATIONS · AI AUTOMATION</span></div></div><div className="hero-art" aria-label="Decorative graphic"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orbit orbit-three"/><div className="hero-monogram">M<span>.</span></div><div className="floating-card card-top"><span className="mini-dot"/> React.js <b>↗</b></div><div className="floating-card card-bottom"><span className="code-mark">&lt;/&gt;</span><div><b>Build. Refine.</b><small>Repeat with intent.</small></div></div><span className="art-index">PORTFOLIO / 2026</span></div></section>
   <div className="ticker" aria-label="Areas of focus"><div>{['FORWARD DEPLOYED ENGINEERING','CUSTOMER PROBLEM SOLVING','AI & WORKFLOW AUTOMATION','API INTEGRATIONS','END-TO-END DELIVERY','FORWARD DEPLOYED ENGINEERING','CUSTOMER PROBLEM SOLVING','AI & WORKFLOW AUTOMATION','API INTEGRATIONS','END-TO-END DELIVERY'].map((x,i)=><span key={i}>{x}<b>✳</b></span>)}</div></div>
   <section className="section-wrap journey section-block reveal" id="journey"><SectionTitle eyebrow="01 / THE JOURNEY" title="Experience that shapes the craft." copy="A growing journey across product engineering, customer-facing collaboration, integrations, and solving real problems with code."/><div className="timeline">{journey.map((item,i)=><article className="timeline-item" key={item.company+item.date}><div className="timeline-date">{item.date}</div><div className="timeline-marker"><span/></div><div className="timeline-content"><div className="role-heading"><div><h3>{item.role}</h3><p className="company">{item.company} <span>· {item.location}</span></p></div><span className="role-number">0{i+1}</span></div><p className="body-copy">{item.desc}</p><div className="tag-list">{item.tags.map(t=><span key={t}>{t}</span>)}</div></div></article>)}</div></section>
   <section className="projects-section section-block reveal" id="projects"><div className="section-wrap"><SectionTitle eyebrow="02 / SELECTED WORK" title="Ideas, built into things." copy="A few projects that reflect how I approach product problems — with curiosity, care, and a focus on the people using them."/><div className="project-grid">{projects.map(p=><article className="project-card" key={p.n}><div className="project-card-top"><span>PROJECT / {p.n}</span><span className="project-arrow">↗</span></div><div className={'project-visual visual-'+p.n}><span className="visual-label">{p.n}</span>{p.n==='01'?<div className="visual-window"><div className="window-dots"><i/><i/><i/></div><div className="window-line long"/><div className="window-line"/><div className="window-pill"/></div>:p.n==='02'?<div className="automation-visual"><div className="automation-node">INBOX</div><span>↓</span><div className="automation-node highlight">AI ROUTER</div><span>↓</span><div className="automation-branches"><i>REPLY</i><i>CREATE TASK</i><i>ESCALATE</i></div></div>:<div className="visual-table fgh-visual"><div className="fgh-product"><span>FGH</span><i/><i/><i/></div><div className="fgh-admin"><b>PRODUCTS</b><span/><span/><span/><em>+ Add product</em></div></div>}</div><p className="project-type">{p.type}</p><h3>{p.title}</h3><p className="project-description">{p.desc}</p><div className="tag-list">{p.tags.map(t=><span key={t}>{t}</span>)}</div></article>)}</div></div></section>
   <section className="section-wrap section-block skills-section reveal" id="skills"><SectionTitle eyebrow="03 / TECHNICAL ARSENAL" title="Tools are a means.
Good experiences are the goal." copy="The technologies I reach for to build reliable, polished, and maintainable web products."/><div className="skills-grid">{Object.entries(skills).map(([category,items],i)=><div className="skill-group" key={category}><div className="skill-group-head"><span>0{i+1}</span><h3>{category}</h3></div><div className="skill-chips">{items.map(item=><span key={item}>{item}</span>)}</div></div>)}</div></section>
   <section className="section-wrap section-block education-section reveal" id="education"><SectionTitle eyebrow="04 / EDUCATION" title="The foundations behind the work." copy="A strong engineering foundation, built through curiosity and consistency."/><article className="education-card"><div className="education-icon" aria-hidden="true">⌂</div><div className="education-main"><span className="education-label">BACHELOR OF TECHNOLOGY · COMPUTER SCIENCE & ENGINEERING</span><h3>Swami Keshvanand Institute of Technology, Jaipur</h3><p>Jaipur, Rajasthan, India</p><div className="coursework"><span>Data Structures & Algorithms</span><span>Object-Oriented Programming</span><span>Operating Systems</span><span>DBMS</span><span>System Design</span><span>Computer Networks</span><span>Software Engineering</span></div></div><div className="education-score"><strong>8.95</strong><span>CGPA / 10</span></div></article></section>
   <section className="section-wrap section-block achievements-section reveal" id="achievements"><SectionTitle eyebrow="05 / ACHIEVEMENTS" title="Progress, measured in practice." copy="Small steps, consistent practice, and a love for solving challenging problems."/><div className="achievement-grid"><article className="achievement-card"><span className="achievement-icon gold">♜</span><div><h3>LeetCode Rating</h3><p>1500+ rating on LeetCode, built through regular problem-solving practice.</p></div></article><article className="achievement-card"><span className="achievement-icon blue">⌘</span><div><h3>700+ Problems Solved</h3><p>Solved 700+ coding problems across LeetCode, GeeksforGeeks, and HackerRank.</p></div></article><article className="achievement-card"><span className="achievement-icon green">↗</span><div><h3>Consistency First</h3><p>Strengthening data structures, algorithms, and problem-solving fundamentals one challenge at a time.</p></div></article></div></section>
   <section className="section-wrap section-block beyond-section reveal" id="beyond"><SectionTitle eyebrow="06 / BEYOND CODE" title="Life outside the editor." copy="“Life is more fun when you have hobbies.”"/><div className="hobby-grid">{[{icon:'📚',name:'Reading',desc:'Exploring new ideas, stories, and perspectives.'},{icon:'✍️',name:'Writing',desc:'Turning thoughts and experiences into words.'},{icon:'💃',name:'Dancing',desc:'Finding rhythm, energy, and joy in movement.'},{icon:'🎤',name:'Singing',desc:'Making room for music and expression.'},{icon:'♟️',name:'Chess',desc:'Thinking ahead, one move at a time.'},{icon:'🏏',name:'Cricket',desc:'Teamwork, competition, and match-day energy.'},{icon:'🏸',name:'Badminton',desc:'Quick rallies and a little friendly competition.'},{icon:'🎱',name:'8 Ball Pool',desc:'Aiming carefully and enjoying the game.'}].map((hobby)=><article className="hobby-card" key={hobby.name}><span>{hobby.icon}</span><h3>{hobby.name}</h3><p>{hobby.desc}</p></article>)}</div></section>
   <section className="about-section section-block reveal" id="about"><div className="section-wrap about-layout"><div><SectionTitle eyebrow="07 / A LITTLE ABOUT ME" title="Curious by default."/><p className="about-copy">I'm a product-minded engineer with a frontend foundation who enjoys working close to real users and customer problems. I like understanding the “why” behind a requirement, shaping a practical solution, connecting systems through APIs, and staying accountable through implementation, debugging, and iteration.</p><p className="about-copy">I'm especially interested in Forward Deployed Engineering, AI-enabled products, and workflow automation—where software, integrations, and customer context come together to deliver a measurable outcome. Outside the editor, you'll find me travelling, discovering new places over chai, writing, dancing, or solving a coding problem.</p></div><div className="about-note"><span className="quote-mark">“</span><p>Make it work.<br/>Make it clear.<br/><em>Make it matter.</em></p><span className="note-caption">A PRINCIPLE I TRY TO BUILD BY</span></div></div></section>
   <section className="contact-section section-wrap section-block reveal" id="contact"><div className="contact-panel"><div><span className="eyebrow">08 / YOUR TURN</span><h2>Have something<br/><span>good in mind?</span></h2><p>I'm exploring Forward Deployed Engineer and product-focused software engineering opportunities—especially roles involving customer problem-solving, integrations, AI, and automation. If you're building something useful, let's talk.</p></div><div className="contact-links"><a href="tel:+919636806364">Call me · 9636806364 <span>↗</span></a><a href="https://wa.me/919636806364" target="_blank" rel="noreferrer">WhatsApp <span>↗</span></a><a href="mailto:somanimadhav8875@gmail.com">Email me <span>↗</span></a><a href="https://www.linkedin.com/in/madhav-somani-0b01a6261/" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a><a href="https://github.com/Somanimadhav" target="_blank" rel="noreferrer">GitHub <span>↗</span></a></div></div></section>
  </main><footer className="footer section-wrap"><a className="wordmark" href="#home">MS<span>.</span></a><p>Designed with intention. Built with React.</p><span>© {new Date().getFullYear()} MADHAV SOMANI</span></footer>
 </div>;
}
