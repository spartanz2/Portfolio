import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import "./protfolio.css";

function Protfolio() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectRef = useRef(null);
  const internshipRef = useRef(null);
  const Achievements = useRef(null);
  const contactRef = useRef(null);

  const form = useRef();

const sendEmail = async (e) => {
  e.preventDefault();

  try {
    await emailjs.sendForm(
      "service_r5xnysw",
      "template_q2qjt5h",
      form.current,
      "tL9m3W1077r0iFuhP"
    );

    await emailjs.sendForm(
      "service_r5xnysw",
      "template_moua5po",
      form.current,
      "tL9m3W1077r0iFuhP"
    );

    alert("Message sent successfully!");
    form.current.reset();
  } catch (error) {
    console.log(error);
    alert("Failed to send message");
  }
};

  useEffect(() => {
    const canvas = document.getElementById("bg");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    let particles = [];

    for (let i = 0; i < 150; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 3,
        dx: Math.random() - 0.5,
        dy: Math.random() - 0.5,
      });
    }

    let animationId;

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#00fff7";

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });

      animationId = requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);



  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div>
      <canvas id="bg"></canvas>

      <nav>
        <div className="logo">Portfolio</div>

        <ul>
          <li onClick={() => scrollToSection(homeRef)}>Home</li>
          <li onClick={() => scrollToSection(aboutRef)}>About</li>
          <li onClick={() => scrollToSection(skillsRef)}>Skills</li>
          <li onClick={() => scrollToSection(projectRef)}>Projects</li>
          <li onClick={() => scrollToSection(internshipRef)}>Internships</li>
          <li onClick={() => scrollToSection(Achievements)}>Achievements</li>
          <li onClick={() => scrollToSection(contactRef)}>Contact</li>
        </ul>
      </nav>

      <div className="hero" ref={homeRef}>
  <div className="hero-text">
    <h1>
      Hi, I'm <span>Vignesh M</span>
    </h1>

    <TypeAnimation
      sequence={[
        "Full Stack Developer",
        2000,
        "EEE Student",
        2000,
        "AI & IoT Enthusiast",
        2000,
        "Problem Solver",
        2000,
      ]}
      wrapper="h2"
      repeat={Infinity}
    />

    <p>
      Passionate Full Stack Developer and Electrical &
      Electronics Engineering student who loves building
      modern web applications and AI-powered solutions.
    </p>

    <div className="hero-buttons">
      <button
        onClick={() => scrollToSection(projectRef)}
      >
        View Projects
      </button>

      <a
        href="/resume.pdf"
        download
        className="resume-btn"
      >
        Download Resume
      </a>
    </div>

    <div className="socials">
      <a
        href="https://github.com/spartanz2"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/vignesh-m-bb9a59299"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>

      <a href="mailto:mv2050286@gmail.com">
        <FaEnvelope />
      </a>
    </div>
  </div>

  <div className="card">
    <img src="/My.jpeg" alt="Vignesh M" />
  </div>
</div>

      {/* ABOUT */}
      <section ref={aboutRef}>
        <h1 className="title">About Me</h1>
        <p
          style={{
            textAlign: "center",
            fontSize: "18px",
            lineHeight: 2,
          }}
        >
          I'm an Electrical and Electronics Engineering student with a strong passion for 
Full Stack Web Development, AI, and IoT technologies. 
I enjoy transforming ideas into real-world applications that are practical, user-friendly, and impactful.
My journey into programming started with curiosity, and it has grown into a passion for building scalable web applications using React, Node.js, Express.js, and MongoDB. Alongside web development, I also explore Artificial Intelligence and Renewable Energy Monitoring Systems, combining software with engineering to solve real-world problems.
I believe that learning happens through practice. That's why I actively solve coding problems, participate in hackathons, and continuously work on personal projects to improve my skills. My goal is not just to write code but to create products that provide meaningful experiences for users.
Some of the projects I've built include a Full Stack E-commerce Platform, an Interactive Learning Platform (Stack Quest), and an AI-powered Renewable Energy Monitoring System. These experiences have strengthened my problem-solving abilities, teamwork, and understanding of modern software development.
When I'm not coding, you'll probably find me exploring new technologies, learning advanced development concepts, or challenging myself with competitive programming problems.
I'm always eager to learn, build, and contribute to innovative projects that make a difference.
      </p>
      </section>

      {/* SKILLS */}
     <section ref={skillsRef}>
  <h1 className="title">Skills & Expertise</h1>

  {/* Core Engineering Skills */}
  <div className="skill-category">
    <h2>⚡ Core Engineering Skills</h2>

    <div className="skills">
      <div className="skill">⚙️ Electrical Circuits</div>
      <div className="skill">🔋 Renewable Energy Systems</div>
      <div className="skill">📡 IoT Development</div>
      <div className="skill">🖥️ PCB Design</div>
      <div className="skill">🤖 AI & Machine Learning</div>
      <div className="skill">🧠 TensorFlow</div>
    </div>
  </div>

  {/* Technical Skills */}
  <div className="skill-category">
    <h2>💻 Full Stack Development</h2>

    <div className="skills">
      <div className="skill">HTML5</div>
      <div className="skill">CSS3</div>
      <div className="skill">JavaScript</div>
      <div className="skill">React.js</div>
      <div className="skill">Node.js</div>
      <div className="skill">Express.js</div>
      <div className="skill">MongoDB</div>
      <div className="skill">MySQL</div>
      <div className="skill">Java</div>
      <div className="skill">Python</div>
      <div className="skill">REST APIs</div>
      <div className="skill">Git & GitHub</div>
    </div>
  </div>

  {/* Tools & Platforms */}
  <div className="skill-category">
    <h2>🛠️ Tools & Platforms</h2>

    <div className="skills">
      <div className="skill">VS Code</div>
      <div className="skill">Render</div>
      <div className="skill">Vercel</div>
      <div className="skill">GitHub</div>
      <div className="skill">MongoDB Atlas</div>
    </div>
  </div>

  {/* Professional Skills */}
  <div className="skill-category">
    <h2>🚀 Professional Skills</h2>

    <div className="skills">
      <div className="skill">Problem Solving</div>
      <div className="skill">Leadership</div>
      <div className="skill">Team Collaboration</div>
      <div className="skill">Communication</div>
      <div className="skill">Time Management</div>
      <div className="skill">Adaptability</div>
      <div className="skill">Quick Learning</div>
      <div className="skill">Critical Thinking</div>
    </div>
  </div>
</section>

          {/* PROJECTS */}
<section ref={projectRef}>
  <h1 className="title">Featured Projects</h1>
  <div className="projects">

  <div className="project">
  <span className="project-tag">FULL STACK</span>

  <h2>🛒 Virtual Mall</h2>

  <p>
    Developed a full-stack e-commerce platform that allows users to browse
    products, search by keywords, filter categories, and manage their
    shopping experience. Implemented secure authentication, product
    management, and REST API integration with MongoDB to provide fast
    and reliable data storage and retrieval.
  </p>

  <div className="tech-stack">
    <span>React</span>
    <span>Node.js</span>
    <span>Express.js</span>
    <span>MongoDB</span>
    <span>REST API</span>
  </div>

  <div className="project-buttons">
    <a
      href="https://e-commerce-oolj.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="live-btn"
    >
      🚀 Live Demo
    </a>
  </div>
</div>

    <div className="project">
  <span className="project-tag">AI + IoT</span>

  <h2>⚡ Renewable Energy Monitoring System</h2>

  <p>
    Designed and developed an IoT-based system to monitor renewable
    energy sources, battery storage, and electricity consumption in
    real time. Built an AI-powered demand forecasting model using
    TensorFlow to predict future energy requirements, helping optimize
    energy distribution and improve overall system efficiency.
  </p>

  <div className="tech-stack">
    <span>Python</span>
    <span>TensorFlow</span>
    <span>IoT</span>
    <span>Raspberry Pi</span>
  </div>

  <a
    href="https://spartanz2.github.io/Renew-Tech-1/"
    target="_blank"
    rel="noopener noreferrer"
    className="live-btn"
  >
    🚀 Live Demo
  </a>
</div>

    <div className="project">
  <span className="project-tag">EDTECH</span>

  <h2>🚀 Stack Quest</h2>

  <p>
    Developed a full-stack learning platform that provides structured
    courses, interactive coding practice, quizzes, and progress tracking
    for students learning web development. Implemented user
    authentication, course completion tracking, and automatic certificate
    generation to help learners monitor their progress and earn
    certificates upon successful completion.
  </p>

  <div className="tech-stack">
    <span>React</span>
    <span>Node.js</span>
    <span>Express.js</span>
    <span>MongoDB</span>
  </div>

  <a
    href="https://stack-quest-frontend.vercel.app/login"
    target="_blank"
    rel="noopener noreferrer"
    className="live-btn"
  >
    🚀 Live Demo
  </a>
</div>

  </div>
</section>

{/* INTERNSHIPS */}
<section ref={internshipRef}>
  <h1 className="title">Internships</h1>

  <div className="projects">

    <div className="project">
      <span className="project-tag">WEB DEVELOPMENT</span>
      <h2>💻 SkillVertex</h2>

      <p>
        Completed a Web Development internship where I gained
        hands-on experience in building modern web applications.
        Worked with frontend and backend technologies, developed
        responsive user interfaces, and improved
        understanding of database management and software development
        workflows.
      </p>

      <div className="tech-stack">
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
        <span>UI/UX</span>
        <span>Frontend</span>
      </div>

      <div className="duration">
        📅 Jul 2024 - Aug 2024
      </div>
    </div>

    <div className="project">
      <span className="project-tag">FULL STACK DEVELOPMENT</span>

      <h2>💼 Internship Studio</h2>

      <p>
        Successfully completed a 6-month internship focused on Website
        Design and Frontend Development. Built responsive and
        user-friendly web interfaces using HTML, CSS, JavaScript, and
        modern web technologies. Improved skills in UI/UX design, integrated APIs
        debugging, and cross-browser compatibility while working on
        real-world projects.
      </p>

      <div className="tech-stack">
        <span>React</span>
        <span>Node.js</span>
        <span>Express.js</span>
        <span>MongoDB</span>
        <span>REST API</span>
      </div>

      <div className="duration">
        📅 Dec 2025 - Jun 2026
      </div>
    </div>

  </div>
</section>

<section ref={Achievements}>
  <h1 className="title">Achievements</h1>

  <div className="projects">
    <div className="project">
      <h2>🏆 LeetCode</h2>
      <p>Solved 100+ coding problems.</p>
    </div>

    <div className="project">
      <h2>⭐ CodeChef</h2>
      <p>Solved 900+ programming problems.</p>
    </div>

    <div className="project">
      <h2>🚀 Hackathons</h2>
      <p>Participated in multiple hackathons and technical events.</p>
    </div>
  </div>
</section>

{/* CONTACT */}

{/* CONTACT */}
<section className="contact-section" ref={contactRef}>
  <h1 className="title">Let's Connect</h1>
  <div className="contact-container">
    <div className="contact-card">
      <h3>📧 Email</h3>
      <a href="mailto:mv2050286@gmail.com">
        mv2050286@gmail.com
      </a>
    </div>

    <div className="contact-card">
      <h3>📱 Phone</h3>
      <p>+91 99437 82104</p>
    </div>

    <div className="contact-card">
      <a
        href="https://www.linkedin.com/in/vignesh-m-bb9a59299"
        target="_blank"
        rel="noreferrer"
      >
      <h3>💼 LinkedIn</h3>
        View Profile
      </a>
    </div>

    <div className="contact-card">
      <a
        href="https://github.com/spartanz2"
        target="_blank"
        rel="noreferrer"
      >
        <h3>💻 GitHub</h3>
        View Repositories
      </a>
    </div>

  </div>

<form ref={form} onSubmit={sendEmail} className="contact-form">
  <input
    type="text"
    name="user_name"
    placeholder="Your Name"
    required
  />

  <input
    type="email"
    name="user_email"
    placeholder="Your Email"
    required
  />

  <textarea
    name="message"
    rows="6"
    placeholder="Write your message..."
    required
  ></textarea>

  <button type="submit">
    Send Message 🚀
  </button>
</form>

</section>

      <footer>
        © 2026 Vignesh M | All Rights Reserved
      </footer>
    </div>
  );
}

export default Protfolio;