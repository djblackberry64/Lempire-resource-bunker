import styles from "./Cpp.module.css";

function CppPage() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>💻 C++ Resources</h2>

      {/* Websites Section */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Websites</h3>
        <ul className={styles.list}>
          <li>
            <a
              className={styles.link}
              href="https://en.cppreference.com/w/"
              target="_blank"
              rel="noopener noreferrer"
            >
              C++ Reference
            </a>
          </li>
          <li>
            <a
              className={styles.link}
              href="https://www.learncpp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LearnCpp.com
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
              href="https://www.youtube.com/watch?v=vLnPwxZdW4Y"
              target="_blank"
              rel="noopener noreferrer"
            >
              C++ Tutorial for Beginners (freeCodeCamp)
            </a>
          </li>
          <li>
            <a
              className={styles.link}
              href="https://www.youtube.com/c/TheCherno"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Cherno – C++ Game Engine Tutorials
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
              href="https://www.udemy.com/course/beginning-c-plus-plus-programming/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Beginning C++ Programming (Udemy)
            </a>
          </li>
          <li>
            <a
              className={styles.link}
              href="https://www.coursera.org/specializations/cplusplus"
              target="_blank"
              rel="noopener noreferrer"
            >
              C++ For C Programmers Specialization (Coursera)
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default CppPage;
