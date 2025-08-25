import styles from "./JavaScript.module.css";

function JsPage() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>⚛ JavaScript Resources</h2>

      {/* Websites Section */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Websites</h3>
        <ul className={styles.list}>
          <li>
            <a
              className={styles.link}
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              rel="noopener noreferrer"
            >
              MDN JavaScript Docs
            </a>
          </li>
          <li>
            <a
              className={styles.link}
              href="https://javascript.info/"
              target="_blank"
              rel="noopener noreferrer"
            >
              JavaScript.info
            </a>
          </li>
          <li>
            <a
              className={styles.link}
              href="https://www.w3schools.com/js/"
              target="_blank"
              rel="noopener noreferrer"
            >
              W3Schools JavaScript Tutorial
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
              href="https://www.theodinproject.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Odin Project (Full Web Dev Path)
            </a>
          </li>
          <li>
            <a
              className={styles.link}
              href="https://fullstackopen.com/en/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Full Stack Open (University of Helsinki)
            </a>
          </li>
          <li>
            <a
              className={styles.link}
              href="https://www.udemy.com/course/the-complete-javascript-course/"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Complete JavaScript Course (Udemy)
            </a>
          </li>
          <li>
            <a
              className={styles.link}
              href="https://www.coursera.org/learn/javascript-basics"
              target="_blank"
              rel="noopener noreferrer"
            >
              JavaScript Basics (Coursera)
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
              href="https://www.youtube.com/c/TraversyMedia"
              target="_blank"
              rel="noopener noreferrer"
            >
              Traversy Media (JS tutorials)
            </a>
          </li>
          <li>
            <a
              className={styles.link}
              href="https://www.youtube.com/c/TheNetNinja"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Net Ninja (JS playlists)
            </a>
          </li>
          <li>
            <a
              className={styles.link}
              href="https://javascript30.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wes Bos – JavaScript30 (30 days of JS projects)
            </a>
          </li>
        </ul>
      </section>

      {/* Practice Section */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Practice</h3>
        <ul className={styles.list}>
          <li>
            <a
              className={styles.link}
              href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/"
              target="_blank"
              rel="noopener noreferrer"
            >
              freeCodeCamp – JavaScript Algorithms & Data Structures
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default JsPage;
