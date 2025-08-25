import styles from "./LearningMindset.module.css";

function ProductivityOpenSourcePage() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>⚡ Productivity & Open Source</h2>

      {/* Productivity Tools */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Productivity Tools</h3>
        <ul className={styles.list}>
          <li>
            <a
              className={styles.link}
              href="https://trello.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Trello
            </a>
          </li>
          <li>
            <a
              className={styles.link}
              href="https://notion.so/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Notion
            </a>
          </li>
        </ul>
      </section>

      {/* Open Source */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Open Source Contribution</h3>
        <ul className={styles.list}>
          <li>
            <a
              className={styles.link}
              href="https://opensource.guide/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Source Guides
            </a>
          </li>
          <li>
            <a
              className={styles.link}
              href="https://goodfirstissue.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Good First Issues
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default ProductivityOpenSourcePage;
