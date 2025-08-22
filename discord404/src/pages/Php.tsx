import styles from "./Php.module.css";

function PhpPage() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>🐘 PHP Resources</h2>

      {/* Websites Section */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Websites</h3>
        <ul className={styles.list}>
          <li>
            <a className={styles.link} href="https://www.php.net/manual/en/" target="_blank" rel="noopener noreferrer">
              PHP Manual
            </a>
          </li>
          <li>
            <a className={styles.link} href="https://laravel.com/docs" target="_blank" rel="noopener noreferrer">
              Laravel Docs
            </a>
          </li>
        </ul>
      </section>

      {/* Videos Section */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Videos</h3>
        <ul className={styles.list}>
          <li>
            <a className={styles.link} href="https://www.youtube.com/c/TheNetNinja" target="_blank" rel="noopener noreferrer">
              The Net Ninja (PHP & Laravel tutorials)
            </a>
          </li>
          <li>
            <a className={styles.link} href="https://www.youtube.com/c/TraversyMedia" target="_blank" rel="noopener noreferrer">
              Traversy Media (PHP courses)
            </a>
          </li>
        </ul>
      </section>

      {/* Courses Section */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Courses</h3>
        <ul className={styles.list}>
          <li>
            <a className={styles.link} href="https://www.udemy.com/course/php-for-complete-beginners-includes-msql-object-oriented/" target="_blank" rel="noopener noreferrer">
              PHP for Beginners (Udemy)
            </a>
          </li>
          <li>
            <a className={styles.link} href="https://www.coursera.org/learn/web-applications-php" target="_blank" rel="noopener noreferrer">
              Web Applications with PHP (Coursera)
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default PhpPage;
