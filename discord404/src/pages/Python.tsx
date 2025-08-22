import styles from "./PythonPage.module.css";

function PythonPage() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>🐍 Python Resources</h2>

      {/* Websites Section */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Websites</h3>
        <ul className={styles.list}>
          <li>
            <a
              className={styles.link}
              href="https://docs.python.org/3/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Official Python Docs
            </a>
          </li>
          <li>
            <a
              className={styles.link}
              href="https://realpython.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Real Python
            </a>
          </li>
          <li>
            <a
              className={styles.link}
              href="https://pypi.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Python Packages
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
              href="https://www.youtube.com/c/CoreyMSchafer"
              target="_blank"
              rel="noopener noreferrer"
            >
              Corey Schafer YouTube Channel
            </a>
          </li>
          <li>
            <a
              className={styles.link}
              href="https://www.youtube.com/c/TechWithTim"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tech With Tim YouTube Channel
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
              href="https://www.udemy.com/course/complete-python-bootcamp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Complete Python Bootcamp (Udemy)
            </a>
          </li>
          <li>
            <a
              className={styles.link}
              href="https://www.coursera.org/specializations/python"
              target="_blank"
              rel="noopener noreferrer"
            >
              Python for Everybody (Coursera)
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default PythonPage;
