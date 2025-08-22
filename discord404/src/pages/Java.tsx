import styles from "./Java.module.css";

function JavaPage() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>☕ Java Resources</h2>

      {/* Websites Section */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Websites</h3>
        <ul className={styles.list}>
          <li>
            <a
              className={styles.link}
              href="https://docs.oracle.com/javase/8/docs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Java SE Docs
            </a>
          </li>
          <li>
            <a
              className={styles.link}
              href="https://spring.io/guides"
              target="_blank"
              rel="noopener noreferrer"
            >
              Spring Framework Guides
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
              href="https://www.youtube.com/c/ProgrammingwithMosh"
              target="_blank"
              rel="noopener noreferrer"
            >
              Java for Beginners – Mosh
            </a>
          </li>
          <li>
            <a
              className={styles.link}
              href="https://www.youtube.com/c/JavaBrainsChannel"
              target="_blank"
              rel="noopener noreferrer"
            >
              Java Brains (Spring + Java tutorials)
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
              href="https://www.udemy.com/course/java-the-complete-java-developer-course/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Complete Java Masterclass (Udemy)
            </a>
          </li>
          <li>
            <a
              className={styles.link}
              href="https://www.coursera.org/specializations/java-programming"
              target="_blank"
              rel="noopener noreferrer"
            >
              Java Programming and Software Engineering (Coursera)
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default JavaPage;
