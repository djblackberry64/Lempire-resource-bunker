import styles from "./LearningMindset.module.css";

function LearningMindsetPage() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>🧠 Learning & Mindset Resources</h2>

      {/* Articles & Blogs Section */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Articles & Blogs</h3>
        <ul className={styles.list}>
          <li>
            <a
              className={styles.link}
              href="https://www.freecodecamp.org/news/learning-to-code-when-it-gets-difficult/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learning to Code When It Gets Difficult (freeCodeCamp)
            </a>
          </li>
          <li>
            <a
              className={styles.link}
              href="https://jamesclear.com/atomic-habits"
              target="_blank"
              rel="noopener noreferrer"
            >
              Atomic Habits (James Clear)
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
              href="https://www.youtube.com/watch?v=WNWcP08B1vM"
              target="_blank"
              rel="noopener noreferrer"
            >
              How to Stay Motivated While Learning to Code – TechLead
            </a>
          </li>
          <li>
            <a
              className={styles.link}
              href="https://www.youtube.com/watch?v=H14bBuluwB8"
              target="_blank"
              rel="noopener noreferrer"
            >
              Carol Dweck: The Power of Believing You Can Improve (Growth Mindset)
            </a>
          </li>
        </ul>
      </section>

      {/* Books Section */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Books</h3>
        <ul className={styles.list}>
          <li>
            <a
              className={styles.link}
              href="https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Pragmatic Programmer
            </a>
          </li>
          <li>
            <a
              className={styles.link}
              href="https://www.mindsetworks.com/science/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mindset: The New Psychology of Success (Carol Dweck)
            </a>
          </li>
        </ul>
      </section>

      {/* Practice & Reflection Section */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Practice & Reflection</h3>
        <ul className={styles.list}>
          <li>
            <a
              className={styles.link}
              href="https://www.codingame.com/start"
              target="_blank"
              rel="noopener noreferrer"
            >
              CodinGame – Practice Problem Solving
            </a>
          </li>
          <li>
            <a
              className={styles.link}
              href="https://www.notion.so/product"
              target="_blank"
              rel="noopener noreferrer"
            >
              Use Notion/Journaling to Track Progress
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default LearningMindsetPage;
