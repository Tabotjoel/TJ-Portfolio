import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <p className={styles.label}>06 — Contact</p>

        <h2>
          Let&apos;s work
          <br />
          together.
        </h2>

        <p className={styles.description}>
          I&apos;m open to opportunities, collaborations, and interesting
          projects in data science, analytics, and software development.
        </p>

        <a href="mailto:joeltabot56@gmail.com" className={styles.email}>
          Get in touch →
        </a>

        <div className={styles.socials}>
          <a
            href="https://github.com/Tabotjoel"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/tabot-joel-087709249/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="/Tabot_Joel_Ebangha_Resume.pdf" target="_blank">
            Download Resume ↗
          </a>
        </div>
      </div>
    </section>
  );
}
