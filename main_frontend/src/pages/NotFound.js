import React from 'react';

// PUBLIC_INTERFACE
export default function NotFound() {
  /** Fallback page when no routes match */
  return (
    <section>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
    </section>
  );
}
