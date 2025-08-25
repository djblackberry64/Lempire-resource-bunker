import styles from "./LearningMindset.module.css";

function DeveloperToolsPage() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>🛠️ Developer Tools</h2>

      {/* IDEs */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>IDEs</h3>
        <ul className={styles.list}>
          <li>
            <a
              className={styles.link}
              href="https://code.visualstudio.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              VS Code
            </a>
          </li>
          <li>
            <a
              className={styles.link}
              href="https://www.jetbrains.com/idea/"
              target="_blank"
              rel="noopener noreferrer"
            >
              IntelliJ IDEA
            </a>
          </li>
        </ul>
      </section>

      {/* Version Control */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Version Control</h3>
        <ul className={styles.list}>
          <li>
            <a
              className={styles.link}
              href="https://git-scm.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Git
            </a>
          </li>
          <li>
            <a
              className={styles.link}
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default DeveloperToolsPage;
