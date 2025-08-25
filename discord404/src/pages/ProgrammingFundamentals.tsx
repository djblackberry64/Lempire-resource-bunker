import styles from "./LearningMindset.module.css";

function ProgrammingFundamentalsPage() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>📚 Programming Fundamentals</h2>

      {/* Websites Section */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Websites</h3>
        <ul className={styles.list}>
          <li>
            <a
              className={styles.link}
              href="https://cs50.harvard.edu/x/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Harvard CS50 – Intro to Computer Science
            </a>
          </li>
          <li>
            <a
              className={styles.link}
              href="https://www.geeksforgeeks.org/fundamentals-of-algorithms/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GeeksforGeeks – Algorithms & Data Structures
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
              href="https://www.youtube.com/watch?v=8PopR3x-VMY"
              target="_blank"
              rel="noopener noreferrer"
            >
              Big O Notation Explained (CS Dojo)
            </a>
          </li>
          <li>
            <a
              className={styles.link}
              href="https://www.youtube.com/watch?v=6avJHaC3C2U"
              target="_blank"
              rel="noopener noreferrer"
            >
              Computer Science Basics – CrashCourse
            </a>
          </li>
        </ul>
      </section>

      {/* Courses Section */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Courses</h3>
        <ul className={styles.list}>
          <li>
            <a
              className={styles.link}
              href="https://www.udemy.com/course/algorithms-and-data-structures-in-python/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Algorithms & Data Structures (Udemy)
            </a>
          </li>
          <li>
            <a
              className={styles.link}
              href="https://www.coursera.org/specializations/cs-fundamentals"
              target="_blank"
              rel="noopener noreferrer"
            >
              Computer Science Fundamentals (Coursera)
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default ProgrammingFundamentalsPage;
