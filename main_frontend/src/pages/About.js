import React from 'react';

// PUBLIC_INTERFACE
export default function About() {
  /** Simple About page describing the project or organization */
  return (
    <section>
      <h2>About</h2>
      <p>
        This project is a lightweight React starter designed for rapid development and easy scaling.
      </p>
      <p>
        Structure:
      </p>
      <pre style={{ textAlign: 'left', background: 'var(--bg-secondary)', padding: 12, borderRadius: 8, overflow: 'auto' }}>
{`src/
  pages/        # Page-level components used by routes
  components/   # Reusable UI components (create as needed)
  App.js        # Layout wrapper (header, nav, footer)
  index.js      # Entry point with routes`}
      </pre>
    </section>
  );
}
