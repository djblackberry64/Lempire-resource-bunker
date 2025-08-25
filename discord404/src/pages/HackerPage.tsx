import styles from "./LearningMindset.module.css";

function HackerPage() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>💻 Hacker Resources</h2>

      {/* Websites Section */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Websites</h3>
        <ul className={styles.list}>
          <li>
            <a
              className={styles.link}
              href="https://www.hackerrank.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              HackerRank
            </a>
          </li>
          <li>
            <a
              className={styles.link}
              href="https://overthewire.org/wargames/"
              target="_blank"
              rel="noopener noreferrer"
            >
              OverTheWire Wargames
            </a>
          </li>
        </ul>
      </section>

      {/* Videos Section */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Videos</h3>
        <ul className={styles.list}>
          <li>
            <a
              className={styles.link}
              href="https://www.youtube.com/c/LiveOverflow"
              target="_blank"
              rel="noopener noreferrer"
            >
              LiveOverflow – Hacking Tutorials
            </a>
          </li>
          <li>
            <a
              className={styles.link}
              href="https://www.youtube.com/c/Computerphile"
              target="_blank"
              rel="noopener noreferrer"
            >
              Computerphile Security & Hacking Videos
            </a>
          </li>
        </ul>
      </section>

      {/* Tools Section */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Tools</h3>
        <ul className={styles.list}>
          <li>
            <a
              className={styles.link}
              href="https://www.kali.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kali Linux
            </a>
          </li>
          <li>
            <a
              className={styles.link}
              href="https://www.metasploit.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Metasploit Framework
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default HackerPage;
