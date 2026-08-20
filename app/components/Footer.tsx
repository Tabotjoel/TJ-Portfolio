import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>© 2026 TABOT JOEL EBANGHA</p>

        <p>Built with Next.js</p>
      </div>
    </footer>
  );
}
