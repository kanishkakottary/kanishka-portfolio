"use client";

import { useState } from "react";

import {
  MapPin,
  ArrowUpRight,
  Sun,
  Moon,
  Menu,
  X,
  Code2,
  GraduationCap,
  BriefcaseBusiness,
  Award,
  Send,
  ExternalLink,
} from "lucide-react";

import styles from "./page.module.css";

function LinkedInIcon({ size = 20 }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
    </svg>
  );
}

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  const navLinks = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Education", "#education"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Experience", "#experience"],
    ["Certificates", "#certificates"],
    ["Contact", "#contact"],
  ];

  const skills = [
    "C Programming",
    "C++",
    "Java",
    "MS Word",
    "PowerPoint",
    "MS Excel",
  ];

  const projects = [
    {
      title: "CampusConnect",
      category: "College Lost & Found Platform",
      description:
        "A platform where students can report lost items, post found items and connect with their owners.",
      tech: ["JavaScript"],
      link: "https://github.com/kanishkakottary/CampusConnect",
    },
    {
      title: "PG Care",
      category: "Complaint Management System",
      description:
        "A PG Care complaint management system designed to help manage complaints and improve communication.",
      tech: ["JavaScript"],
      link: "https://github.com/kanishkakottary/PGCare",
    },
    {
      title: "Developer Profile Card",
      category: "Web Development",
      description:
        "A CSS-based project that presents developer information through a styled profile card.",
      tech: ["CSS"],
      link: "https://github.com/kanishkakottary/developer-profile-card",
    },
  ];

  const education = [
    {
      qualification: "Bachelor of Engineering",
      institution:
        "Sahyadri College of Engineering and Management",
      detail: "Computer Science and Engineering",
      result: "CGPA: 8.80",
      year: "Expected 2029",
    },
    {
      qualification: "Pre-University Course (PUC)",
      institution: "Expert P.U. College",
      detail: "Pre-University Education",
      result: "93.33%",
      year: "Completed",
    },
    {
      qualification: "SSLC",
      institution: "Carmel School",
      detail: "CBSE",
      result: "School Education",
      year: "Completed",
    },
  ];

  const certificates = [
    {
      name: "Learn Java",
      date: "5 November 2026",
      description:
        "Completed all lessons and practice projects in Learn Java.",
    },
    {
      name: "Practice C",
      date: "10 September 2026",
      description:
        "Completed all practice problems in Practice C.",
    },
    {
      name: "Programming in C",
      date: "28 May 2026",
      description:
        "Completed all lessons and practice projects in Programming in C.",
    },
  ];

  const activities = [
    {
      role: "Finance Lead",
      organization: "Sahyadri Science Talent Hunt",
      period: "2026 – Present",
      description:
        "Serving as Finance Lead, contributing to the event's financial coordination.",
    },
    {
      role: "Documentation Volunteer",
      organization: "Sahyadri Science Talent Hunt",
      period: "2025",
      description:
        "Contributed to documentation activities for the event.",
    },
    {
      role: "Smart India Hackathon – Internal College Selection",
      organization: "Smart India Hackathon",
      period: "College-level selection",
      description:
        "Participated in the internal college selection and was selected for the college-level presentation with an AI-Enabled Learning & Competency-Gap Platform idea.",
    },
  ];

  function handleContactSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setFormMessage(
      "Your form has passed validation. This portfolio demo does not yet send or store messages."
    );

    form.reset();
  }

  return (
    <main className={`${styles.site} ${darkMode ? styles.dark : ""}`}>

      {/* NAVIGATION */}

      <header className={styles.header}>
        <nav className={styles.navbar}>

          <a href="#home" className={styles.logo}>
            K<span>.</span>
          </a>

          <div
            className={`${styles.navLinks} ${
              menuOpen ? styles.navOpen : ""
            }`}
          >
            {navLinks.map(([label, href]) => (
              <a
                href={href}
                key={label}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>

          <div className={styles.navActions}>

            <button
              className={styles.themeButton}
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle dark and light mode"
              title="Toggle theme"
            >
              {darkMode ? (
                <Sun size={20} />
              ) : (
                <Moon size={20} />
              )}
            </button>

            <button
              className={styles.menuButton}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? (
                <X size={23} />
              ) : (
                <Menu size={23} />
              )}
            </button>

          </div>
        </nav>
      </header>

      {/* HOME */}

      <section id="home" className={styles.hero}>

        <div className={styles.heroContent}>

          <p className={styles.eyebrow}>
            HELLO, WELCOME TO MY PORTFOLIO
          </p>

          <h1>
            Hi, I&apos;m <span>Kanishka</span>
          </h1>

          <h2>
            Computer Science Engineering Student
          </h2>

          <p className={styles.heroDescription}>
            A second-year engineering student passionate about learning
            technology, developing new skills and building practical projects.
          </p>

          <div className={styles.heroButtons}>

            <a href="#projects" className={styles.primaryButton}>
              Explore My Work
              <ArrowUpRight size={18} />
            </a>

            <a href="#contact" className={styles.secondaryButton}>
              Get in Touch
            </a>

          </div>

          <div className={styles.socialLinks}>

            <a
              href="https://github.com/kanishkakottary"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Code2 size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/kanishka-s-kottary-460461384/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={20} />
            </a>

          </div>
        </div>

        <div className={styles.heroImageWrapper}>

          <div className={styles.imageDecoration}></div>

          <img
            src="/profile.jpg"
            alt="Kanishka S. Kottary"
            className={styles.profileImage}
          />

          <div className={styles.imageCaption}>
            <span>Computer Science</span>
            <span>Engineering Student</span>
          </div>

        </div>

        <a href="#about" className={styles.scrollLink}>
          SCROLL TO EXPLORE ↓
        </a>

      </section>

      {/* ABOUT */}

      <section id="about" className={styles.section}>

        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>GET TO KNOW ME</p>
          <h2>About Me</h2>
        </div>

        <div className={styles.aboutContent}>

          <div className={styles.aboutText}>

            <h3>A little introduction</h3>

            <p>
              I&apos;m Kanishka S. Kottary, a second-year Computer Science
              Engineering student at Sahyadri College of Engineering and
              Management, Mangaluru.
            </p>

            <p>
              I&apos;m interested in exploring technology, strengthening my
              programming knowledge and developing practical skills through
              projects. I enjoy learning new concepts and taking opportunities
              that help me grow both personally and technically.
            </p>

            <p>
              My goal is to continue improving my technical abilities,
              problem-solving skills and experience through hands-on learning.
            </p>

          </div>

          <div className={styles.aboutHighlights}>

            <div className={styles.highlightCard}>
              <GraduationCap size={25} />
              <h4>Education</h4>
              <p>Computer Science Engineering</p>
            </div>

            <div className={styles.highlightCard}>
              <Code2 size={25} />
              <h4>Interests</h4>
              <p>Programming and Technology</p>
            </div>

            <div className={styles.highlightCard}>
              <MapPin size={25} />
              <h4>Location</h4>
              <p>Mangaluru, Karnataka</p>
            </div>

            <div className={styles.highlightCard}>
              <BriefcaseBusiness size={25} />
              <h4>Focus</h4>
              <p>Learning through Projects</p>
            </div>

          </div>
        </div>
      </section>

      {/* EDUCATION */}

      <section id="education" className={styles.section}>

        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>MY ACADEMIC BACKGROUND</p>
          <h2>Education</h2>
        </div>

        <div className={styles.educationGrid}>

          {education.map((item) => (
            <article
              className={styles.educationCard}
              key={item.qualification}
            >

              <div className={styles.cardIcon}>
                <GraduationCap size={23} />
              </div>

              <h3>{item.qualification}</h3>

              <h4>{item.institution}</h4>

              <p>{item.detail}</p>

              <div className={styles.educationFooter}>
                <strong>{item.result}</strong>
                <span>{item.year}</span>
              </div>

            </article>
          ))}

        </div>
      </section>

      {/* SKILLS */}

      <section
        id="skills"
        className={`${styles.section} ${styles.softSection}`}
      >

        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>WHAT I WORK WITH</p>
          <h2>Technical Skills</h2>
          <p>
            Technologies and tools I have learned and worked with.
          </p>
        </div>

        <div className={styles.skillsGrid}>

          {skills.map((skill, index) => (
            <div className={styles.skillCard} key={skill}>

              <span className={styles.skillNumber}>
                {String(index + 1).padStart(2, "0")}
              </span>

              <Code2 size={23} />

              <h3>{skill}</h3>

            </div>
          ))}

        </div>
      </section>

      {/* PROJECTS */}

      <section id="projects" className={styles.section}>

        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>SOME OF MY WORK</p>
          <h2>My Projects</h2>
          <p>
            Projects available in my GitHub repositories.
          </p>
        </div>

        <div className={styles.projectsGrid}>

          {projects.map((project, index) => (
            <article
              className={styles.projectCard}
              key={project.title}
            >

              <div className={styles.projectTop}>
                <span>PROJECT 0{index + 1}</span>
                <Code2 size={25} />
              </div>

              <p className={styles.projectCategory}>
                {project.category}
              </p>

              <h3>{project.title}</h3>

              <p className={styles.projectDescription}>
                {project.description}
              </p>

              <div className={styles.techTags}>
                {project.tech.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className={styles.projectLink}
              >
                View on GitHub
                <ExternalLink size={17} />
              </a>

            </article>
          ))}

        </div>
      </section>

      {/* EXPERIENCE */}

      <section
        id="experience"
        className={`${styles.section} ${styles.softSection}`}
      >

        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>MY JOURNEY</p>
          <h2>Experience & Activities</h2>
        </div>

        <div className={styles.timeline}>

          {activities.map((activity) => (
            <article
              className={styles.timelineItem}
              key={activity.role}
            >

              <div className={styles.timelineDot}></div>

              <div className={styles.timelineCard}>

                <span className={styles.timelineDate}>
                  {activity.period}
                </span>

                <h3>{activity.role}</h3>

                <h4>{activity.organization}</h4>

                <p>{activity.description}</p>

              </div>

            </article>
          ))}

        </div>
      </section>

      {/* CERTIFICATES */}

      <section id="certificates" className={styles.section}>

        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>LEARNING & DEVELOPMENT</p>
          <h2>Certifications</h2>
          <p>
            Courses and practice programs I have completed.
          </p>
        </div>

        <div className={styles.certificatesGrid}>

          {certificates.map((certificate) => (
            <article
              className={styles.certificateCard}
              key={certificate.name}
            >

              <div className={styles.certificateIcon}>
                <Award size={27} />
              </div>

              <span className={styles.certificateLabel}>
                CERTIFICATE
              </span>

              <h3>{certificate.name}</h3>

              <p>{certificate.description}</p>

              <span className={styles.certificateDate}>
                {certificate.date}
              </span>

            </article>
          ))}

        </div>
      </section>

      {/* CONTACT */}

      <section
        id="contact"
        className={`${styles.section} ${styles.softSection}`}
      >

        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>LET&apos;S CONNECT</p>
          <h2>Get in Touch</h2>

          <p>
            Have a question or an opportunity to share? Feel free to connect
            with me.
          </p>
        </div>

        <div className={styles.contactContent}>

          <div className={styles.contactInfo}>

            <h3>Connect with me</h3>

            <p>
              I&apos;m always interested in learning, collaborating and connecting
              with people in technology.
            </p>

            <a
              href="https://github.com/kanishkakottary"
              target="_blank"
              rel="noreferrer"
              className={styles.contactLink}
            >
              <Code2 size={20} />
              GitHub
              <ArrowUpRight size={16} />
            </a>

            <a
              href="https://www.linkedin.com/in/kanishka-s-kottary-460461384/"
              target="_blank"
              rel="noreferrer"
              className={styles.contactLink}
            >
              <LinkedInIcon size={20} />
              LinkedIn
              <ArrowUpRight size={16} />
            </a>

          </div>

          <form
            className={styles.contactForm}
            onSubmit={handleContactSubmit}
          >

            <label htmlFor="visitorName">
              Your Name
            </label>

            <input
              id="visitorName"
              name="visitorName"
              type="text"
              placeholder="Enter your name"
              required
            />

            <label htmlFor="visitorEmail">
              Your Email
            </label>

            <input
              id="visitorEmail"
              name="visitorEmail"
              type="email"
              placeholder="Enter your email"
              required
            />

            <label htmlFor="visitorMessage">
              Your Message
            </label>

            <textarea
              id="visitorMessage"
              name="visitorMessage"
              rows="5"
              placeholder="Write your message..."
              required
            />

            <button
              type="submit"
              className={styles.primaryButton}
            >
              Submit Message
              <Send size={17} />
            </button>

            {formMessage && (
              <p className={styles.formMessage} role="status">
                {formMessage}
              </p>
            )}

          </form>

        </div>
      </section>

      {/* FOOTER */}

      <footer className={styles.footer}>

        <a href="#home" className={styles.footerLogo}>
          K<span>.</span>
        </a>

        <p>
          Designed & developed by{" "}
          <strong>Kanishka S. Kottary</strong>
        </p>

        <div className={styles.footerSocials}>

          <a
            href="https://github.com/kanishkakottary"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Code2 size={19} />
          </a>

          <a
            href="https://www.linkedin.com/in/kanishka-s-kottary-460461384/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={19} />
          </a>

        </div>

        <span className={styles.copyright}>
          © {new Date().getFullYear()} Kanishka. All rights reserved.
        </span>

      </footer>

    </main>
  );
}