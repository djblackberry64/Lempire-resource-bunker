import styles from "./LearningMindset.module.css";

function HowToUsePage() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>📖 How to Use This Resource Hub</h2>

      <section className={styles.section}>
        <p className={styles.paragraph}>
          This hub is designed to guide you through your developer journey. 
          Each page focuses on a different area — from learning programming 
          fundamentals to exploring advanced tools and practicing coding.
        </p>
      </section>

      {/* Steps Section */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Steps to Get Started</h3>
        <ol className={styles.list}>
          <li>Start with <strong>Programming Fundamentals</strong> to build a solid base.</li>
          <li>Pick a language (Python, Java, etc.) and go through its resources.</li>
          <li>Apply your knowledge in the <strong>Practice</strong> section.</li>
          <li>Level up with the <strong>Hacker</strong> section for advanced challenges.</li>
          <li>Use <strong>Developer Tools</strong> to streamline your workflow.</li>
          <li>Boost your productivity and contribute in <strong>Open Source</strong>.</li>
          <li>Keep revisiting <strong>Learning & Mindset</strong> to stay motivated.</li>
        </ol>
      </section>
    </div>
  );
}

export default HowToUsePage;
