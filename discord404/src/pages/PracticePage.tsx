import styles from "./LearningMindset.module.css";

function PracticePage() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>🏋️ Practice Resources</h2>

      {/* Coding Challenges */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Coding Challenges</h3>
        <ul className={styles.list}>
          <li>
            <a
              className={styles.link}
              href="https://leetcode.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LeetCode
            </a>
          </li>
          <li>
            <a
              className={styles.link}
              href="https://www.codewars.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Codewars
            </a>
          </li>
        </ul>
      </section>

      {/* Projects */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Projects</h3>
        <ul className={styles.list}>
          <li>
            <a
              className={styles.link}
              href="https://www.frontendmentor.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Frontend Mentor
            </a>
          </li>
          <li>
            <a
              className={styles.link}
              href="https://roadmap.sh/projects"
              target="_blank"
              rel="noopener noreferrer"
            >
              Developer Roadmap – Project Ideas
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default PracticePage;
